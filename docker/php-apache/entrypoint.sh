#!/bin/bash
set -e

rsyslogd
cron

# Change www-data's uid & guid to be the same as directory in host
# Fixes cache problems
sed -ie "s/`id -u www-data`/`stat -c %u /var/www/html`/g" /etc/passwd

apache2-foreground
