# SQL Server

## Install

[Install guide](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15)

### Ubuntu server

Import key

```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
```

Add repository

```
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/18.04/mssql-server-2019.list)"
```

Update ubuntu

```
sudo apt-get update
```

Install SQL server

```
sudo apt-get install -y mssql-server
```

Setup config

```
sudo /opt/mssql/bin/mssql-conf setup
```

## Change password

Stop SQL server from running

```
sudo systemctl stop mssql-server
```

Set new password
```
sudo /opt/mssql/bin/mssql-conf set-sa-password
```

Start SQL server again
```
sudo systemctl start mssql-server
```
