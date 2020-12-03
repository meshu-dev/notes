// .vuepress/config.js
module.exports = {
  title: 'Dev Notes',
  description: 'Description of dev notes',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Design', link: '/design/' },
      { text: 'Development', link: '/development/' },
      { text: 'Server', link: '/server/' },
      { text: 'Misc', link: '/misc/' }
    ],
    sidebar: {
      '/design/': [
        ['design-patterns/', 'Design Patterns'],
        ['design-principles/', 'Design Principles'],
        ['git-workflows/', 'Git Workflows']
      ],
      '/development/': [
        ['brew/', 'Brew'],
        ['git/', 'Git'],
        {
          title: 'Go',
          children: [
            ['go/hello-world/', 'Hello World'],
            ['go/commands/', 'Commands']
          ]
        },
        {
          title: 'JavaScript',
          children: [
            ['javascript/angular/', 'Angular'],
            ['javascript/nodejs/', 'Nodejs'],
            ['javascript/nuxtjs/', 'Nuxtjs'],
            ['javascript/react/', 'React'],
            ['javascript/svelte/', 'Svelte'],
            ['javascript/', 'VanillaJS'],
            ['javascript/vuejs/', 'Vue.js']
          ]
        },
        {
          title: 'Laravel',
          link: '/laravel',
          children: [
            ['laravel/features/', 'Features'],
            ['laravel/make/', 'Make'],
            ['laravel/migrations/', 'Migrations'],
            ['laravel/setup/', 'Setup'],
            ['laravel/tinker/', 'Tinker']
          ]
        },
        ['macos/', 'MacOS'],
        ['mysql/', 'MySQL'],
        {
          title: 'PHP',
          link: '/php',
          children: [
            ['php/api-platform/', 'API Platform'],
            ['php/codesniffer/', 'CodeSniffer'],
            ['php/coding-standards-fixer/', 'Coding Standards Fixer'],
            ['php/docblocks/', 'DocBlocks'],
            ['php/slim/', 'Slim'],
            ['php/symfony/', 'Symfony'],
            ['php/versions/', 'Versions']
          ]
        },
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
