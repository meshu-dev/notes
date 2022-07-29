const { defaultTheme } = require('vuepress')

module.exports = {
  title: 'Dev Notes',
  description: 'Description of dev notes',
  base: '/notes/',
  theme: defaultTheme({
    navbar: [
      { text: 'Design', link: '/design/' },
      {
        text: 'Languages',
        children: [
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
        { text: 'Design Patterns', link: '/design/design-patterns/' },
        { text: 'Design Principles', link: '/design/design-principles/' },
        { text: 'Git Workflows', link: '/design/git-workflows/' }
      ],
      '/php/': [
        { text: 'API Platform', link: '/php/api-platform/' },
        { text: 'Codesniffer', link: '/php/codesniffer/' },
        { text: 'Coding Standards Fixer', link: '/php/coding-standards-fixer/' },
        { text: 'DocBlocks', link: '/php/docblocks/' },
        { 
          text: 'Laravel',
          link: '/php/laravel/',
          children: [
            { text: 'Controllers', link: '/php/laravel/controllers/' },
            { text: 'Factories', link: '/php/laravel/factories/' },
            { text: 'Features', link: '/php/laravel/features/' },
            { text: 'Make', link: '/php/laravel/make/' },
            { text: 'Migrations', link: '/php/laravel/migrations/' },
            { text: 'Misc', link: '/php/laravel/misc/' },
            { text: 'Setup', link: '/php/laravel/setup/' },
            { text: 'Tinker', link: '/php/laravel/tinker/' },
            { text: 'Vue', link: '/php/laravel/vue/' }
          ]
        },
        { text: 'Slim', link: '/php/slim/' },
        { text: 'Symfony', link: '/php/symfony/' },
        { text: 'Versions', link: '/php/versions/' }
      ],
      '/javascript/': [
        { text: 'Angular', link: '/javascript/angular/' },
        { text: 'Nodejs', link: '/javascript/nodejs/' },
        { text: 'Nuxtjs', link: '/javascript/nuxtjs/' },
        { text: 'React', link: '/javascript/react/' },
        { text: 'Svelte', link: '/javascript/svelte/' },
        { text: 'Vue.js', link: '/javascript/vuejs/' }
      ],
      '/go/': [
        { text: 'Commands', link: '/go/commands/' },
        { text: 'Hello World', link: '/go/hello-world/' }
      ],
      '/local/': [
        { text: 'Brew', link: '/local/brew/' },
        { text: 'Docker', link: '/local/docker/' },
        { text: 'Git', link: '/local/git/' },
        { text: 'MacOS', link: '/local/macos/' },
        { text: 'MySQL', link: '/local/mysql/' },
        { text: 'Software', link: '/local/software/' }
      ],
      '/server/': [
        { text: 'Dot Net Core', link: '/server/dotnetcore/' },
        { text: 'Jenkins', link: '/server/jenkins/' },
        { text: 'MongoDB', link: '/server/mongodb/' },
        { text: 'MySQL', link: '/server/mysql/' },
        { text: 'Nginx', link: '/server/nginx/' },
        { text: 'NodeJS', link: '/server/nodejs/' },
        { text: 'PHP', link: '/server/php/' },
        { text: 'PM2', link: '/server/pm2/' },
        { text: 'MySQL', link: '/server/mysql/' },
        { text: 'SQL Server', link: '/server/sql-server/' },
        { text: 'SSH', link: '/server/ssh/' },
        { text: 'SSL', link: '/server/ssl/' },
        { text: 'Systemd', link: '/server/systemd/' },
      ],
      '/misc/': [
        { text: 'Alphine.js', link: '/misc/alphinejs/' },
        { text: 'API Gateway', link: '/misc/api-gateway/' },
        { text: 'DDD', link: '/misc/ddd/' },
        { text: 'Deno', link: '/misc/deno/' },
        { text: 'GraphQL', link: '/misc/graphql/' },
        { text: 'JWT', link: '/misc/jwt/' },
        { text: 'Microservices', link: '/misc/microservices/' },
        { text: 'MVVM', link: '/misc/mvvm/' },
        { text: 'Sanctum', link: '/misc/sanctum/' },
        { text: 'SOLID', link: '/misc/solid/' },
        { text: 'TDD', link: '/misc/tdd/' },
        {
          text: 'Tutorials',
          link: '/misc/tutorials/',
          children: [
            ['/misc/tutorials/svelte/']
          ]
        }
      ]
    }
  }),
  themeConfig: {
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}
