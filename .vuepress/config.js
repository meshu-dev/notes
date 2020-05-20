// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Programming', link: '/programming/' },
      { text: 'Server', link: '/server/' },
      { text: 'Misc', link: '/misc/' }
    ],
    sidebar: {
      '/programming/': [
        ['git/', 'Git'],
        {
          title: 'JavaScript',
          children: [
            ['javascript/', 'VanillaJS'],
            ['javascript/react/', 'React']
          ]
        },
        {
          title: 'PHP',
          link: '/php',
          children: [
            ['php/symfony/', 'Symfony'],
            ['php/api-platform/', 'API Platform']
          ]
        }
      ],
      '/server/': [
        ['dotnetcore/', 'Dot Net Core'],
        ['jenkins/', 'Jenkins'],
      	['mysql/', 'MySQL'],
        ['nodejs/', 'NodeJS'],
        ['php/', 'PHP'],
        ['sql-server/', 'SQL Server'],
        ['ssh/', 'SSH'],
        ['ssl/', 'SSL']
      ],
      '/misc/': [
        ['jwt/', 'JWT']
      ]
    }
  }
}
