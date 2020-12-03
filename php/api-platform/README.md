# API Platform

## Run app

Use php server to run api-platform app

```
php -S 127.0.0.1:8000 -t public
```

## Entities

Install the maker bundle

```
composer require maker --dev
```

Use the maker commands to create an entity

```
./bin/console make:entity
```

## Migrations

Install the migrations bundle

```
composer require migrations
```

Create migration file
```
./bin/console make:migration
```

Run migrations
```
./bin/console doctrine:migrations:migrate
```

## Users

Install the maker bundle

```
composer require maker --dev
```

Use the maker command to create a user entity

```
./bin/console make:user
```

## Issues

If the following error occurs...

> Invalid firewall "main": user provider "users_in_memory" not found.

Comment out 'provider: users_in_memory' inside of security.yaml
