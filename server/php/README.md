# PHP

[Digital Ocean - Upgrade Guide](https://www.digitalocean.com/community/tutorials/how-to-upgrade-to-php-7-on-ubuntu-14-04)

## Upgrade to PHP 7.4

### Ubuntu server
Install repository for PHP 7.4...
```
sudo add-apt-repository ppa:ondrej/php
```
Update Ubuntu...
```
sudo apt-get update
```
Install PHP 7.4
```
sudo apt-get install php7.4
```
Install PHP 7.4 extensions
```
sudo apt-get install php7.4-mysql
sudo apt-get install php7.4-xml
sudo apt-get install php7.4-mbstring
sudo apt-get install php7.4-json
sudo apt-get install php7.4-mongodb
sudo apt-get install php7.4-zip
```
Install PHP 7.4 FPM
```
sudo apt-get install php7.4-fpm
```

## PHP-FPM

To restart php-fpm run the following.

```
sudo systemctl restart php7.4-fpm
```
