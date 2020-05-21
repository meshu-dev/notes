# AWS S3

## Access keys

Follow the Amazon guide to setup access keys which are required to manage S3 files remotely.

- [Managing AWS access keys](https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html)

## Set file permissions

Follow the Amazon guide to set file permissions.

- [Managing AWS S3 file permissions](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteAccessPermissionsReqd.html)

## Url redirects

A blog on setting up site redirects.

- [Blog on static site redirects](https://anil.io/blog/aws/amazon-s3-static-website-redirect-rules)

- [Another blog on s3 site redirects](https://medium.com/tensult/how-to-do-site-redirection-using-aws-522a4002c645)

- [S3 and Cloudfront guide](https://www.davidbaumgold.com/tutorials/host-static-site-aws-s3-cloudfront)

## Deploying static sites

Links on guides to setting up static website hosting on AWS S3.

- [Gatsby site S3 guide](https://benenewton.com/deploy-your-gatsby-js-site-to-aws-s-3)

- [React site S3 guide](https://www.newline.co/fullstack-react/articles/deploying-a-react-app-to-s3)

- [React app deploy to cloudfront and s3](https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)

## S3Cmd

Tool used to manage files in AWS S3 in linux.

### Install

Add key.

```
wget -O- -q http://s3tools.org/repo/deb-all/stable/s3tools.key | sudo apt-key add -
```

Add entry to source list.

```
sudo wget -O/etc/apt/sources.list.d/s3tools.list http://s3tools.org/repo/deb-all/stable/s3tools.list
```

Update ubuntu.

```
sudo apt-get update
```

Install s3cmd.

```
sudo apt-get install -y s3cmd
```

### Set AWS access keys

Get AWS access and secret keys at hand and run the following command in order to set those keys to the s3cmd config.

```
s3cmd --configure
```

