// .vuepress/config.js
module.exports = {
  title: 'Dev Notes',
  description: 'Description of dev notes',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Development', link: '/development/' },
      { text: 'Server', link: '/server/' },
      { text: 'Misc', link: '/misc/' }
    ],
    sidebar: {
      '/development/': [
        ['git/', 'Git'],
        {
          title: 'JavaScript',
          children: [
            ['javascript/angular/', 'Angular'],
            ['javascript/react/', 'React'],
            ['javascript/', 'VanillaJS']
          ]
        },
        {
          title: 'PHP',
          link: '/php',
          children: [
            ['php/api-platform/', 'API Platform'],
            ['php/laravel/', 'Laravel'],
            ['php/symfony/', 'Symfony']
          ]
        }
      ],
      '/server/': [
        ['dotnetcore/', 'Dot Net Core'],
        ['jenkins/', 'Jenkins'],
        ['mongodb/', 'MongoDB'],
      	['mysql/', 'MySQL'],
        ['nginx/', 'Nginx'],
        ['nodejs/', 'NodeJS'],
        ['php/', 'PHP'],
        ['pm2/', 'PM2'],
        ['sql-server/', 'SQL Server'],
        ['ssh/', 'SSH'],
        ['ssl/', 'SSL'],
        ['systemd/', 'Systemd']
      ],
      '/misc/': [
        ['jwt/', 'JWT']
      ]
    },
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}
