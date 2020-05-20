# SSL

## FREE SSL certificates

Can receive free SSL certificates that last for 3 months from the link below.

[SSL for free](https://www.sslforfree.com)

## Nginx Https setup

Open vhost file and add in the following fields with values changed to actual values.

```
listen 443;
listen [::]:443;

ssl on;
ssl_certificate /etc/ssl/certs/certificate.crt;
ssl_certificate_key /etc/ssl/certs/private.key;
```
