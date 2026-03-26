export default {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Heading',
      },
  
      {
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [{ type: 'block' }], // 🔥 rich text (better than plain text)
      },
  
      {
        name: 'portrait',
        type: 'image',
        title: 'Portrait Image',
        options: { hotspot: true },
      },

      // 🔹 Social Links
    {
      name: 'socialLinks',
      type: 'object',
      title: 'Social Links',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'github', type: 'url' },
        { name: 'linkedin', type: 'url' },
        { name: 'email', type: 'string' },
      ],
    },
  
      // Optional (🔥 recommended)
    //   {
    //     name: 'subtitle',
    //     type: 'string',
    //     title: 'Short Tagline',
    //   },
    ],
  }