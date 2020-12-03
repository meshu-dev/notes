# Setup

## Create Laravel apps

Use compose to add the Laravel installer.

```
composer global require laravel/installer
```

Had to end up updating $PATH variable so update .zprofile file.

```
sudo vim ~/.zprofile
```

Then add the following to the file.

> export PATH=$PATH:$HOME/.composer/vendor/bin

Then use laravel installer to create app.

```
laravel new blog
```

## Run app

Change to app directory and run the serve command.

```
php artisan serve
```

## Create secret key

Add .env file and then run the following command.

```
php artisan key:generate
```