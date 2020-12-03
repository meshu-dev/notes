# MySQL

## Install

Run command via brew

```
brew install mysql
```

This will install the latest version of MySQL (8.0.21 on last install).

[MySQL homebrew page](https://formulae.brew.sh/formula/mysql)

## Setup

Run MySQL server

```
brew services start mysql
```

Change root password with following command

```
mysql_secure_installation
```

## Issues

List of issues encountered and solutions to them.

### SequelPro connection issue

Connecting to SequelPro may show the following error.

> Unable to connect to host 127.0.0.1, or the request timed out.
>
> Be sure that the address is correct and that you have the necessary privileges, or try increasing the connection timeout (currently 10 seconds).
>
>MySQL said: Authentication plugin 'caching_sha2_password' cannot be loaded: dlopen(/usr/local/lib/plugin/caching_sha2_password.so, 2): image not found
>

Access MySQL through command-line.

```
mysql -u root -p
```

Change the user password through the following query.

```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```

Flush privileges to apply password change.

```
FLUSH PRIVILEGES;
```

Now try logging in again through SequelPro and it should work.

Reference: [Joeyklee github](https://gist.github.com/joeyklee/5ada6a254804c33dbebbca4161277836)

### SequelPro DB error

When accessing a DB the following error thrown contained the following text.

> -[_NSInlineData isEqualToString:]: unrecognized selector sent to instance 0x60802d051c10

The issue is that sequel pro throws an error with connecting to databases with MySQL 8.0.

Solution: Install a test build (Sequel Pro Nightly) found on [test builds](https://sequelpro.com/test-builds) page.

- Reference: [Github issue page](https://github.com/sequelpro/sequelpro/issues/2699)
