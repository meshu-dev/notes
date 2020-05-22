# Git

## Setup remote git repository

Replace [ssh git repo url] with the ssh git repository url found on github pages

```
git remote add origin [ssh git repo url]
```

When doing a git pull you will get an error when attempting to merge local repository with remote, use the following to merge both repositories

```
git pull origin master --allow-unrelated-histories
```
