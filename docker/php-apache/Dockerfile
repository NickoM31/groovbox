FROM php:7.0-apache

RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        libicu-dev \
        zlib1g-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpng12-dev \
        libxml2-dev \
        libmcrypt-dev \
        git \
        vim \
        cron \
        rsyslog \
        ssmtp \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/ --with-png-dir=/usr \
    && docker-php-ext-install intl mbstring pdo_mysql zip gd bcmath exif opcache mcrypt soap \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite ssl

RUN rm -f /etc/apache2/sites-available/default-ssl.conf
COPY vhosts.conf /etc/apache2/sites-available/default-ssl.conf

RUN a2ensite default-ssl

COPY php.ini /usr/local/etc/php/php.ini
COPY ttdev.crt /etc/ssl/certs/ssl-cert-snakeoil.pem
COPY ttdev.key /etc/ssl/private/ssl-cert-snakeoil.key
COPY ssmtp.conf /etc/ssmtp/ssmtp.conf
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /var/www/html/
RUN chown -R www-data:www-data /var/www/

# Cron
COPY crontab /etc/cron.d/app
RUN rm -Rf /etc/cron.daily  && \
   rm -Rf /etc/cron.weekly && \
   rm -Rf /etc/cron.monthly && \
   rm -Rf /etc/cron.hourly && \
   chmod a+x /etc/cron.d/app

EXPOSE 443

ENTRYPOINT ["/entrypoint.sh"]
