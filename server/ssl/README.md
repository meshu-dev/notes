# SSL

## FREE SSL certificates

Can receive free SSL certificates that last for 3 months from the link below.

[SSL for free](https://www.sslforfree.com)

## Lets Encrypt

Found a guide to a possible alternative for sslforfree as its no longer free.

- [Lets Encrypt - Amazon guide](https://hackernoon.com/easy-lets-encrypt-certificates-on-aws-79387767830b)

## Nginx Https setup

Open vhost file and add in the following fields with values changed to actual values.

```
listen 443;
listen [::]:443;

ssl on;
ssl_certificate /etc/ssl/certs/certificate.crt;
ssl_certificate_key /etc/ssl/certs/private.key;
```

### Bundle setup

In nginx you cannot set certificate crt and ca bundle as the 'ssl_certificate' command can only be used once therefore crt and ca bundle needs to be combined to a single file.

Run following command to combine both files to a new file.

```
cat certificate.crt ca_bundle.crt >> combined_certs.crt
```

Reference: [Github page showing crt/ca bundle](https://gist.github.com/singhabhinav/132b8196abac026b43fa)

Github webhook validation fix ---> Combine certificates - Also add in break in between certs
