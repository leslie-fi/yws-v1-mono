export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb810cc39307800ca544d91',
                  title: 'Sanity Studio',
                  name: 'yws-v-1-mono-studio',
                  apiId: 'd3a2ff16-d8c1-4639-b298-4ec38a7be724'
                },
                {
                  buildHookId: '5fb810ccb7715500de3fd69a',
                  title: 'Blog Website',
                  name: 'yws-v-1-mono',
                  apiId: 'f3e2e76e-373a-426b-95f0-f639f199f309'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leslie-fi/yws-v1-mono',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://yws-v-1-mono.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
