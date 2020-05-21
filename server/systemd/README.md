# Systemd

Used this to enable a .Net Core app to run on server boot, will use that as an example.

[Microsoft linux deploy guide](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-apache?view=aspnetcore-3.1)

## Commands

Create a service file to run process.

```
sudo vim /etc/systemd/system/app.service
```

Enable service.

```
sudo systemctl enable app.service
```

Start up service.

```
sudo systemctl start app.service
```

Check current status of the service.

```
sudo systemctl status app.service
```
