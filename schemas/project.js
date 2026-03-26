export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      // 🔥 Basic Info
      {
        name: 'title',
        type: 'string',
        title: 'Project Title',
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: { source: 'title', maxLength: 96 },
        validation: Rule => Rule.required(),
      },
  
      // 🔥 Thumbnail (card view)
      {
        name: 'image',
        type: 'image',
        title: 'Project Image',
        options: { hotspot: true },
      },
  
      // 🔥 Short Description (card)
      {
        name: 'description',
        type: 'text',
        title: 'Short Description',
        rows: 3,
      },
  
      // 🔥 Full Content (from blog schema)
      {
        name: 'content',
        type: 'array',
        title: 'Detailed Content',
        of: [
          { type: 'block' },
  
          // 👇 allow images inside content (VERY IMPORTANT)
          {
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
  
      // 🔥 Tech Stack (tags)
      {
        name: 'techStack',
        type: 'array',
        title: 'Tech Stack',
        of: [{ type: 'string' }],
        options: { layout: 'tags' },
      },
  
      // 🔥 Links
      {
        name: 'githubUrl',
        type: 'url',
        title: 'GitHub URL',
      },
      {
        name: 'liveUrl',
        type: 'url',
        title: 'Live URL',
      },
  
      // 🔥 Highlight Projects
      {
        name: 'featured',
        type: 'boolean',
        title: 'Featured Project',
        initialValue: false,
      },
  
      // 🔥 Metrics (this is GOLD for your profile)
      {
        name: 'metrics',
        type: 'array',
        title: 'Key Metrics',
        of: [{ type: 'string' }],
        description: 'Example: Accuracy: 91%, R²: 0.99',
      },
  
      // 🔥 Optional Sections (makes projects structured)
      {
        name: 'sections',
        type: 'object',
        title: 'Project Sections',
        fields: [
          {
            name: 'problem',
            type: 'text',
            title: 'Problem Statement',
          },
          {
            name: 'solution',
            type: 'text',
            title: 'Solution',
          },
          {
            name: 'results',
            type: 'text',
            title: 'Results / Outcome',
          },
        ],
      },
  
      // 🔥 Date
      {
        name: 'publishedAt',
        type: 'date',
        title: 'Date of Publish',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today',
        },
      },
    ],
  }