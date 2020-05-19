// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Programming', link: '/programming/' },
      { text: 'Server', link: '/server/' },
      { text: 'S3 Hosting', link: '/s3-hosting/' }
    ],
    sidebar: {
      '/local/': [
      	['react/', 'React'],
        ['php/', 'PHP'],
        ['php/symfony/', 'Symfony']
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
