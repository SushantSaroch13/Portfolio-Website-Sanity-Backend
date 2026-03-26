// schemas/projectsPage.js
export default {
    name: 'projectsPage',
    title: 'Projects Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Heading',
      },
      {
        name: 'intro',
        type: 'array',
        title: 'Description',
        of: [{ type: 'block' }], // rich text
      },
    ],
  }