# Symfony

Notes on programming with Symfony 5

## Symfony commands

To run symfony apps...

```
symfony serve
```

---

To build new symfony apps...

```
symfony new todo-api
```

---

To run symfony apps in background...

```
symfony serve -d
```
```
symfony server:status
```
```
symfony server:stop
```

---
## Composer commands


Add annotations recipe...

```
composer require annotations
```

---

Remove recipe...

```
composer remove annotations
```

---

Show list of current recipes

```
composer recipes
```

---

Show info on specific recipe

```
composer recipes doctrine/annotations
```

---

Add profiler (Useful for dev)

```
composer require profiler --dev
```

---

Unpack packs (more control over individual packages contained in pack)

```
composer unpack symfony/debug-pack
```

---

## Bin/console commands

Command Manager...

```
php bin/console
```

---

Show all routes

```
php bin/console debug:router
```

---

Show list of services that are autowired

```
php bin/console debug:autowiring
```

---

Search through list of services

```
php bin/console debug:autowiring log
```

---

Show config options for specified bundle

```
php bin/console config:dump FrameworkBundle
php bin/console config:dump FrameworkBundle cache
```

---

Clear cache

```
php bin/console cache:clear
```

---

Show config parameters (Can be added in config/services.yaml)

```
php bin/console debug:container --parameters
```

---

Show all services (Custom service classes stored in App\Service directory)

```
php bin/console debug:autowiring Markdown --all
```

---

Show all services in service container

```
php bin/console debug:container
```

---

Set secret vault value

```
php bin/console secret:set SENTRY_DSN
```

---
## Terms

- Bundles
  - Symfony plugins

- Symfony Flex
  - It's a composer plugin that uses the Symfony recipe system
  - Search for recipes at [http://flex.symfony.com](http://flex.symfony.com)

- Environemnt variables
  - Can use environment variables in config files

```
sentry:
  dsn: '%env(SENTRY_DSN)%'
```

- Config/services.yaml
  - Add config parameters in this file
  - For autowired custom classes can specify scaler typed parameters that may be defiend in class constructor

```
App\Service\MarkdownHelper:
	arguements:
		$isDebug: '%kernel.debug%'
```

  - Can also have autowired parameters defined globally

```
services:
	_defaults:
		autowire: true
		autoconfigure: true
		bind:
			$isDebug: '%kernel.debug%'
```

---
## Building an API

### Install packages

- Install maker bundle which provides boilerplate for classes.

```
composer require maker --dev
```

- Install Doctrine pack to use ORM.
  - Guide available at [Doctrine guide](https://symfony.com/doc/current/doctrine.html).

```
composer require orm
```

- Install serializer pack as FOSRestBundle requires a serializer setup.

```
composer require symfony/serializer-pack
```

- Install FOSRestBundle 3 beta\([FOSRestBundle Github](https://github.com/FriendsOfSymfony/FOSRestBundle)\).

```
composer require friendsofsymfony/rest-bundle:3.0.0-beta2
```

### Config Doctrine

- Open up .env file and update the DATABASE_URL with database connection details.

```
vim .env
```

> DATABASE_URL=mysql://root:@localhost:3306/test?serverVersion=5.7

- Create database defined in .env DATABASE_URL.

```
php bin/console doctrine:database:create
```

### Param Fetcher

Symfony validator is required when enabling and using param fetcher.

```
composer require symfony/validator
```

## Migrations

- Create entity class.

```
php bin/console make:entity
```

- Create migration file.
  - Migragtions will check entities with database and automatically add CREATE TABLE or UPDATE TABLE SQL to migration.

```
./bin/console make:migration 
```

- Run migrations

```
./bin/console doctrine:migrations:migrate 
```

## Fixtures

### Install

Run command below to install.

```
composer require --dev orm-fixtures
```

### Usage

It's common to have a fixture class for each entity class.

Create fixtures using maker bundle.

```
./bin/console make:fixtures
```

Run fixture files.

```
./bin/console doctrine:fixtures:load
```

### Faker

To use generated test data use the faker package.

To install run this command.

```
composer require fzaninotto/faker --dev
```

## Coding Standards

Below link is a guide to documentating and structuring code.

[Symfony coding standards](https://symfony.com/doc/current/contributing/code/standards.html).

## PHP Unit

### Install

Install Symfony phpunit package.

```
composer require --dev symfony/phpunit-bridge
```

Install browser kit package to run tests on API endpoints.

```
composer require --dev symfony/browser-kit
```

### Usage

Create PHP Unit test.

```
./bin/console make:unit-test
```

Run PHP Unit tests.

```
php bin/phpunit
```

Commands for run fixtures to prepare data for php unit tests.

```
./bin/console doctrine:schema:drop --force
./bin/console doctrine:schema:
./bin/console doctrine:fixtures:load
```

Reference: [Commands to drop and create DB](https://coderwall.com/p/staybw/workaround-for-1701-cannot-truncate-a-table-referenced-in-a-foreign-key-constraint-using-doctrine-fixtures-load-purge-with-truncate)
