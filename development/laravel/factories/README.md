# Factories

Factories use Faker to create test data in the DB.

```
php artisan make:factory ArticleFactory
```

Create factory with matching Model

```
php artisan make:factory ArticleFactory -m "App\Article"
```

Run factories via tinker.

```
factory(App\Article::class, 5)->create();
```
