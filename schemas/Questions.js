export default {
    name: 'question',
    type: 'document',
      title: 'Question',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'id'
      },

      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },

      {
        name: 'checked',
        type: 'number',
        title: 'checked'
      },

      {
        name: 'answer',
        type: 'string',
        title: 'answer'
      },

      {
        name: 'options',
        type: 'array',
        of: [{type: 'string'}],
        title: 'options'
      }
    ]
  }