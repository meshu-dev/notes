# Tinker

Tinker is a tool to allow users to write and execute Laravel and PHP code in the command line.

## Command

To use tinker run the following command.

```
php artisan tinker
```

## Create user

To easily create users run the following command.

```
factory(App\User::class)->create(['name' => 'Mesh', 'email' => 'example@mail.com', 'password' => bcrypt('password')])
```
