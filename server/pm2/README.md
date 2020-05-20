# PM2

## Updating ecosystem.config.js file

Delete the currently running processes

```
pm2 delete all
```

Add and run pm2 processes that are defined inside of ecosystem.config.js file

```
pm2 start ecosystem.config.js
```

Save current state of running processes

```
pm2 save
```

Update startup so same processes will start up and run on server boot

```
pm2 startup
```
