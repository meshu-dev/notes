# PostgreSQL

## MacOS

### Install

Run the following command via brew.

```
brew install postgresql
```

### Commands

Start postgresql.

```
brew services start postgresql
```

Stop postgresql.

```
brew services stop postgresql
```

Restart postgresql.

```
brew services restart postgresql
```

### DB Client

[Postico](https://eggerapps.at/postico)

```
brew cask install postico
```

[PSequel](http://www.psequel.com)

```
brew cask install psequel
```

### Issues

I ran into the following error when using the default 'postgres' database to create a new table.

> role "postgres" does not exist

To solve the issue I run the following query.

```
CREATE USER postgres SUPERUSER;
```

Reference: ()[https://stackoverflow.com/questions/15301826/psql-fatal-role-postgres-does-not-exist]
