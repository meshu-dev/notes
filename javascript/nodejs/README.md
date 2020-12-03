# Node.js

## Linting

[Why and how to use ESLint](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7)

## NPM run issue

I received the following errors when running npm install.

> No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

> No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

> No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

Use the following steps to fix.

- Install Xcode

- Run the following command

```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

Reference: [Github issue page](https://github.com/nodejs/node-gyp/issues/569)
