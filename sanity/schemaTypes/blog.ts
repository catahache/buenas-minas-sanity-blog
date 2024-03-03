export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article'
        },
        {
            name: 'slug', //for CEO purposes
            type: 'slug',
            title: 'Slug of blog article',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image of blog article'
        },
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small description of blog article'
        },
        {
            name: 'content',
            type: 'array', // sanity assumes that this field content is in an array, not what i want, i want a text editor
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
                {
                  type: 'image'
                }
            ]
        },
    ]
}