# Controllers

Create controllers with 7 RESTful controller actions.

```
php artisan make:controller ProjectController -r
```

Create controllers with 7 RESTful controller actions based on Model

```
php artisan make:controller ProjectController -r -m Project
```

Route structure for 7 RESTful controller actions.

> GET /videos -> index
>
> GET /videos/create -> create -> Create form
>
> POST /videos -> store
>
> GET /videos/2 -> show
>
> GET /videos/2/edit -> edit -> Edit form
>
> PUT /videos/2 -> update
>
> DELETE /videos/2 -> destroy
