# Git

## Setup remote git repository

Replace [ssh git repo url] with the ssh git repository url found on github pages

```
git remote add origin [ssh git repo url]
```

When doing a git pull you will get an error when attempting to merge local repository with remote.

> fatal: refusing to merge unrelated histories

Use the following to merge both repositories.

```
git pull origin master --allow-unrelated-histories
```

## Change url for origin

To change an existing origin remote repository setup in a local repository.

```
git remote set-url origin [ssh git repo url]
```
