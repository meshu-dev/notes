# CodeSniffer

Tool used to enforce coding standard and conventions.

## Install

### Mac OS Install

Use below command which requires brew to be installed.

```
brew install php-code-sniffer
```

### Windows Install

Use composer to install codesniffer.

```
composer global require "squizlabs/php_codesniffer=*"
```

## Setup default standard

To check which coding standards are available use the following...

```
phpcs -i
```

To set a default standard use the following command...
```
phpcs --config-set default_standard PSR12
```

You can now check the default standard...
```
phpcs --config-show
```

## Usage

Full list of commands can be found at [CS usage Wiki page](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Usage).

### Basic commands

Check version.

```
phpcs --version
```

Run codesniffer replacing [directory to sniff] with path to codebase.

```
phpcs [directory to sniff]
```

Run codesniffer with specific standard, replace [directory to sniff] with path to codebase.

```
phpcs --standard=PSR1 [directory to sniff]
```

Get a summary of errors and warnings, replace [directory to sniff] with path to codebase.

```
phpcs --report=summary [directory to sniff]
```

List installed coding standards.

```
phpcs -i
```

### Automatically fix issues

PHP CodeSniffer includes PHP Code Beautifier and Fixer (phpcbf) which can be used to automatically fix specific issues. CS can tell you which issues are fixable with phpcbf.

Run phpcbf replacing [directory to sniff] with path to codebase.

```
phpcbf [directory to sniff]
```

### Config commands

Show config.

```
phpcs --config-show
```

Set default coding standard.

```
phpcs --config-set default_standard PSR2
```

Command list for config file.

[CS config Wiki page](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Configuration-Options#setting-the-default-coding-standard)

## Links

[PSR-12 blog](https://www.php-fig.org/blog/2019/09/new-blog-psr-12-approval)

[PSR guide](https://webdevetc.com/programming-tricks/php/general-php/what-are-php-s-psrs)

[How to use PSRs](https://siderlabs.com/blog/5-php-coding-standards-you-will-love-and-how-to-use-them-adf6a4855696)
