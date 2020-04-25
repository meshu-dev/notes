// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Local', link: '/local/' },
      { text: 'Server', link: '/server/' },
      { text: 'S3 Hosting', link: '/s3-hosting/' }
    ],
    sidebar: {
      '/local/': [
      	['react/', 'React']
      ],
      '/server/': [
      	['mysql/', 'MySQL'],
        ['php/', 'PHP 7.4'],
        ['nodejs/', 'NodeJS 12'],
        ['jenkins/', 'Jenkins']
      ],
      '/s3-hosting/': [
        '',
        //'three',
        //'four'
      ],
      '/': [
        '',
        //'contact',
        //'about'
      ]
    }
  }
}
