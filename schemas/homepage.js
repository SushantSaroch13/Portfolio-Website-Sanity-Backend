export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // 🔹 Hero
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
    },
    {
      name: 'heroDescription',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }], // 🔥 rich text (better than plain text)
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

    // 🔹 Resume
    {
      name: 'resume',
      title: 'Resume',
      type: 'object',
      fields: [
        {
          name: 'drive',
          title: 'Resume Link',
          type: 'url',
        },

        {
          name: 'experience',
          title: 'Experience',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'company', type: 'string' },
                { name: 'title', type: 'string' },
                { name: 'desc', type: 'text' },
                { name: 'start', type: 'string' },
                { name: 'end', type: 'string' },

                {
                  name: 'logo',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
      ],
    },

    // 🔥 Photos Section (your 5 images)
    {
      name: 'photos',
      title: 'Homepage Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: Rule => Rule.max(5),
    },
  ],
}