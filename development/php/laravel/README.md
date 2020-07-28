# Laravel

## Features

A list of blogs detailing features.

- [Top features](https://medium.com/@ronak8036/top-features-of-laravel-php-framework-9082ac9eb4f2)
- [Hiring Laravel developers](https://www.coruscatesolution.com/things-to-consider-to-hire-dedicated-laravel-developers/)

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

## Migrations

Run migrations.

```
php artisan migrate
```

Rollback migrations.

```
php artisan migrate:rollback
```

Drop tables and re-run migrations.

```
php artisan migrate:fresh
```

## Make commands

View full list of make commands.

```
php artisan list make
```

Create model, migration and controller all in one command.

```
php artisan make:model Project -mc
```

Use help to see all options available.

```
php artisan help make:model
```

### Controllers

Create controllers with 7 RESTful controller actions.

```
php artisan make:controller ProjectController -r
```

Create controllers with 7 RESTful controller actions based on Model

```
php artisan make:controller ProjectController -r -m Project
```

Route structure for 7 RESTful controller actions.

> GET /videos -> index
>
> GET /videos/create -> create -> Create form
>
> POST /videos -> store
>
> GET /videos/2 -> show
>
> GET /videos/2/edit -> edit -> Edit form
>
> PUT /videos/2 -> update
>
> DELETE /videos/2 -> destroy

### Factories

Factories use Faker to create test data in the DB.

```
php artisan make:factory ArticleFactory
```

Create factory with matching Model

```
php artisan make:factory ArticleFactory -m "App\Article"
```

Run factories via tinker.

```
factory(App\Article::class, 5)->create();
```

## Create secret key

Add .env file and then run the following command.

```
php artisan key:generate
```

## Remove /api prefix

Below blog provides solution to removing /api prefix for API urls.

- [Remove api prefix blog](https://medium.com/@arthajonar/remove-api-prefix-from-url-on-laravel-35ed585f3a53)

## Code standards

Found some guides that provide info.

- [Laravel best practices](https://www.laravelbestpractices.com/)
- [Blog on guidelines](https://guidelines.spatie.be/code-style/laravel-php#general-php-rules)

## Vue.js integration

Found some guides that provide info.

- [Why vue.js laravel?](https://blog.pusher.com/why-vuejs-laravel)
- [Laravel and Vue.js](https://towardsdatascience.com/laravel-and-vue-c30770f1e88)
