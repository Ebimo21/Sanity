export default {
    name: 'people',
    type: 'document',
      title: 'People',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },

      {
        name: 'email',
        type: 'string',
        title: 'Email',

      },

      {
        name: 'image', 
        type: 'image',
        title: 'Pics',
        options: {
            hotspot: true // <-- Defaults to false
          }
      },

      {
        name: 'number',
        type: 'number',
        title: 'number'
      }
    ]
  }