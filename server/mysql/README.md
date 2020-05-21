# MySQL 5.7

## Install

```
sudo apt install mysql-server
```

## Re-install MySQL

Added links to issue I encountered on re-installing MySQL.

- [Ask Ubuntu - How to reinstall](https://askubuntu.com/questions/265685/how-to-reinstall-mysql)
- [Ask Ubuntu - How to uninstall](https://askubuntu.com/questions/172514/how-do-i-uninstall-mysql)

## Retieve root user's password

Added link to solution.

[Ask Ubuntu - Get initial root password](https://askubuntu.com/questions/1139240/how-to-get-mysql-initial-root-password)

## Create user

Create user by specifcying username, host and password.

```
CREATE USER 'mesh'@'localhost' IDENTIFIED BY 'password';
```

Give user access to everything.

```
GRANT ALL PRIVILEGES ON *.* TO 'mesh'@'localhost';
```

Changes won't apply until you flush privileges.

```
FLUSH PRIVILEGES;
```

## Commands

Login into MySQL.

```
sudo mysql -u root -p
```

Create database.

```
create database movies;
```

