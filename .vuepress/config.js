// .vuepress/config.js
module.exports = {
  title: 'Dev Notes',
  description: 'Description of dev notes',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Design', link: '/design/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'PHP', link: '/php/' },
          { text: 'Javascript', link: '/javascript/' },
          { text: 'Go', link: '/go/' }
        ]
      },
      { text: 'Local', link: '/local/' },
      { text: 'Server', link: '/server/' },
      { text: 'Misc', link: '/misc/' }
    ],
    sidebar: {
      '/design/': [
        ['design-patterns/', 'Design Patterns'],
        ['design-principles/', 'Design Principles'],
        ['git-workflows/', 'Git Workflows']
      ],
      '/php/': [
        ['api-platform/', 'API Platform'],
        ['codesniffer/', 'Codesniffer'],
        ['coding-standards-fixer/', 'Coding Standards Fixer'],
        ['docblocks/', 'DocBlocks'],
        {
          title: 'Laravel',
          link: '/laravel',
          children: [
            ['laravel/controllers/', 'Controllers'],
            ['laravel/factories/', 'Factories'],
            ['laravel/features/', 'Features'],
            ['laravel/make/', 'Make'],
            ['laravel/migrations/', 'Migrations'],
            ['laravel/misc/', 'Misc'],
            ['laravel/setup/', 'Setup'],
            ['laravel/tinker/', 'Tinker'],
            ['laravel/vue/', 'Vue']
          ]
        },
        ['slim/', 'Slim'],
        ['symfony/', 'Symfony'],
        ['versions/', 'Versions']
      ],
      '/javascript/': [
        ['angular/', 'Angular'],
        ['nodejs/', 'Nodejs'],
        ['nuxtjs/', 'Nuxtjs'],
        ['react/', 'React'],
        ['svelte/', 'Svelte'],
        ['vuejs/', 'Vue.js']
      ],
      '/go/': [
        ['commands/', 'Commands'],
        ['hello-world/', 'Hello World']
      ],
      '/local/': [
        ['brew/', 'Brew'],
        ['git/', 'Git'],
        ['macos/', 'MacOS'],
        ['mysql/', 'MySQL'],
        ['software/', 'Software']
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
        ['alphinejs/', 'Alphine.js'],
        ['api-gateway/', 'API Gateway'],
        ['ddd/', 'DDD'],
        ['deno/', 'Deno'],
        ['graphql/', 'GraphQL'],
        ['jwt/', 'JWT'],
        ['microservices/', 'Microservices'],
        ['mvvm/', 'MVVM'],
        ['sanctum/', 'Sanctum'],
        ['solid/', 'SOLID'],
        ['tdd/', 'TDD'],
        {
          title: 'Tutorials',
          link: '/tutorials',
          children: [
            ['tutorials/svelte/', 'Svelte']
          ]
        }
      ]
    },
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}
