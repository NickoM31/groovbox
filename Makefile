PROJECT_CODE=Image

COMPOSE=docker-compose -p $(PROJECT_CODE)
COMPOSE_TEST=bin/test_env.sh

RUN=$(COMPOSE) run --rm tools
RUN_TEST=$(COMPOSE_TEST) run --rm tools

# ----------------#
#      base       #
# ----------------#

all: configure build start install

local: configure-local build start-local install

configure:
	#cp -n docker-compose.override.yml.dist docker-compose.override.yml || true

configure-local:
	#cp -n docker-compose.override.yml.dist docker-compose.override.yml || true


build:
	$(COMPOSE) pull && $(COMPOSE) build

clean:
	$(COMPOSE) kill
	$(COMPOSE) rm -vf

start:
	$(COMPOSE) up -d --remove-orphans

install: composer-install front-install

# ----------------#
#      tests      #
# ----------------#

cs:
	$(RUN_TEST) bin/php-cs-fixer fix --no-interaction --dry-run --level=symfony --diff -vvv

csfix:
	$(RUN) bin/php-cs-fixer fix --no-interaction --level=symfony --diff -vvv

# ----------------#
#    internals    #
# ----------------#

composer-install:
	$(RUN) composer install --no-interaction --prefer-dist

composer-update:
	$(RUN) composer update

front-install:
	$(RUN) npm install


# ----------------#
#    sync files   #
# ----------------#
upload-files-staging:
#	scp -r sites/default/files/[!.]* www-data@barry.local:/var/www/vhosts/www.oksilio.local/shared/sites/default/files/
