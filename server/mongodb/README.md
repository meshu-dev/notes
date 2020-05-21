# MongoDB

## Install

[Install guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu)

### Start MongoDB on server restart

Run the following after installing MongoDB

```
sudo systemctl enable mongod.service
```

## Commands

Added links to command guides.

- [MongoDB manual](https://docs.mongodb.com/manual/mongo)

- [Tutorialspoint - MongoDB create database](https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm)

## Authentication

### Enable authentication

By default MongoDB is accessible without a user.

To change open mongod.conf and add the enable setting.

```
vim /etc/mongod.conf
```

```
security:
  authorization: "enabled"
```

### User login

To access MongoDB on command line with a user account run the following.

```
mongo -u admin -p --authenticationDatabase admin
```


### Create users

Create user with access to any database.

```
db.createUser(
  { user: "admin", pwd: "password", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] }
)
```

Create user with read and write access.

```
db.createUser(
  { user: "admin", pwd: "password", roles: [ { role: "readWrite", db: "admin" }] }
)
```

### Grant user roles

Grant roles to users for specified databases.

```
db.grantRolesToUser('mesh', [{ role: 'readWrite', db: 'movies' }])
```

### Delete users

Delete user with following command.

```
db.dropUser("mesh");
```

## Create collections

Needed to create collections before use.

Select specific database.

```
use movies_db
```

Create a collection.

```
db.createCollection("movies")
```

### Issues and fixes

- [Create user issue](https://dba.stackexchange.com/questions/111727/mongo-create-a-user-as-admin-for-any-database-raise-an-error)

- [Enable authentication - medium blog](https://medium.com/mongoaudit/how-to-enable-authentication-on-mongodb-b9e8a924efac)
