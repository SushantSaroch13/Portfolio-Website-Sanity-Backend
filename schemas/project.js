export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of project',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of project',
            options: {
                source: 'title',
            }
        },
        {
            name: 'projectLogo',
            type: 'image',
            title: 'Project Logo',
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description',
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL',
        },
        {
            name: 'label',
            type: 'string',
            title: 'Label',
        },
        {
            name: 'publishedAt',
            title: 'Date of Publish',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM-DD',
              calendarTodayLabel: 'Today',
            },
        },
    ]
}