export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      {
        name: 'siteName',
        type: 'string',
        title: 'Site Name (Footer)',
        description: 'This will appear in the footer.'
      },
      {
        name: 'avatar',
        type: 'image',
        title: 'Avatar Image (Header)',
        options: { hotspot: true }
      },
      {
        name: 'favicon',
        type: 'image',
        title: 'Favicon',
        description: 'The favicon for the browser tab.',
        options: { hotspot: true }
      },
      {
        name: 'socialPreview',
        type: 'image',
        title: 'Social Preview Image',
        description: 'Used for social sharing (Open Graph / Twitter card).',
        options: { hotspot: true }
      }
    ]
  }