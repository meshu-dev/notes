# Jenkins

## Setup

Install Java as it's required for jenkins

```
sudo apt install openjdk-11-jre-headless
```

Install guide

[Jenkins install](https://wiki.jenkins.io/display/JENKINS/Installing+Jenkins+on+Ubuntu)

## Integration with PHP

Here are some references to using Jenkins with PHP projects.

- [Continuous integration php jenkins ant](https://snipe.net/2012/12/11/continuous-integration-php-jenkins-ant)

- [Use Jenkins Git automate code pushes Laravel site](https://www.shift8web.ca/2018/02/use-jenkins-git-automate-code-pushes-laravel-site)

- [How to deploy laravel projects to live server \- the ultimate guide](https://laraveldaily.com/how-to-deploy-laravel-projects-to-live-server-the-ultimate-guide)

- [Jenkins PHP](https://modess.io/jenkins-php)

## Backup Jenkins

- [Backup guide \- Medium blog](https://medium.com/@_oleksii_/how-to-backup-and-restore-jenkins-complete-guide-62fc2f99b457)

## Setup git repositories

Links to guides on setting up git repositories to work with Jenkins.

- [Jenkins git setup](https://www.thegeekstuff.com/2016/10/jenkins-git-setup)

- [Jenkins guide \- Pantheon](https://pantheon.io/docs/guides/jenkins)

## Setup github integration

- [Jenkins github pull requests](https://github.com/gitbucket/gitbucket/wiki/Setup-Jenkins-GitHub-pull-request-builder-plugin)

- [Jenkins / Github CI guide](https://resources.github.com/whitepapers/practical-guide-to-CI-with-Jenkins-and-GitHub)

- [Integrate github with Jenkins](https://www.blazemeter.com/blog/how-to-integrate-your-github-repository-to-your-jenkins-project)

- [Adding remote requests to github](https://help.github.com/en/github/using-git/adding-a-remote)

## Connect to remote server

Links to guides on setting up Jenkins to connect to remote servers via SSH

- [Jenkins SSH publish guide](https://plugins.jenkins.io/publish-over-ssh)

- [Fix for host key verification failure](https://www.edureka.co/community/11280/how-resolve-this-error-jenkins-host-key-verification-failed)

## Setup HTTPS

Links to some guides on how to set this up.

- [Jenkins with SSL](http://sam.gleske.net/blog/engineering/2016/05/04/jenkins-with-ssl.html)

- [Github page](https://gist.github.com/geraldvillorente/26acf3a351643c618125)

- [Jenkins standalone SSL \- Let's Encrypt](http://www.vhinandrich.com/blog/jenkins-standalone-ssl-lets-encrypt)

- [Enable HTTPS Jenkins](https://jansipke.nl/enable-https-jenkins)

### Setup HTTPS key

Create jenkins_key.pkcs12 key file using ssl files.

```
sudo openssl pkcs12 -inkey /etc/ssl/certs/private.key -in /etc/ssl/certs/certificate.crt -certfile /etc/ssl/certs/ca_bundle.crt -export -out jenkins_key.pkcs12
```

Create jenkins.jks key file using prior jenkins_key.pkcs12 file.

```
sudo keytool -importkeystore -srckeystore jenkins_key.pkcs12 -srcstoretype pkcs12 -destkeystore jenkins.jks
```

Open the jenkins file.

```
sudo vim /etc/default/jenkins
```

Add the following parameters with values changed to actual values.

```
# HTTPS
HTTPS_PORT=8443
KEYSTORE=/srv/jenkins/jenkins.jks
PASSWORD=password
JENKINS_ARGS="--webroot=/var/cache/$NAME/war --httpsPort=$HTTPS_PORT --httpsKeyStore=$KEYSTORE --httpsKeyStorePassword=$PASSWORD --httpPort=-1"
```

### Triggering builds on new pipelines

Found an issue (maybe normal behaviour) with builds when creating new pipelines.

When the github webhook is called to Jenkins it won't trigger a build, it seems like the only fix for this is to do a manual build first and then any github webhook calls made after do trigger builds.

- [Reference about same issue](https://issues.jenkins-ci.org/browse/JENKINS-40814)

- Check logs to track github webhook requests at /log/all of jenkins website url.
