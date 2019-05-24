export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cdcc91c14feadd1163ea688',
                  title: 'Content Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nfegdutj',
                  apiId: '53bf13fd-4796-4e17-bf9c-235eecee902f'
                },
                {
                  buildHookId: '5cdcc91c346065b8d3de4561',
                  title: 'Virtual Pitching Academy Website',
                  name: 'sanity-nextjs-landing-pages-web-un5o8caz',
                  apiId: '69e41142-a866-4e2e-9bad-77949b1ab501'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://virtual-pitching-site.netlify.com/', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
