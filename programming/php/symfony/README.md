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
