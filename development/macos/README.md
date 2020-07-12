# MacOS

This section is used to provide notes on development for the MacOS system.

## Errors

This section shows issues and resolutions to them.

### Library not loaded - icu4c

Run in the following issues when trying to use PHP or Node in the terminal.

Here is the error when trying to use phpcs.

> dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicuio.64.dylib
>
>  Referenced from: /usr/local/bin/php
>
>  Reason: image not found
>
> [1]    18785 abort      phpcs --version

Here is the error when trying to use vuepress.

> dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.64.dylib
>
>  Referenced from: /usr/local/bin/node
>
>  Reason: image not found

I ran the following commands to fix the issue and get PHP and Node working again.

```
brew uninstall --ignore-dependencies node
brew uninstall --force node

brew uninstall --ignore-dependencies icu4c
brew install icu4c

brew install node

brew services start php
```

Reference: [Stackoverflow solution](https://stackoverflow.com/questions/43780207/installing-node-with-brew-fails-on-mac-os-sierra).
