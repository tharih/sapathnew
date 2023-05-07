import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photographys',
  title: 'Photographys',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'name',
    //   title: 'Name',
    //   type: 'string',
    // }),
   
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // }),
    defineField({
        name: 'photo',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
          },

      }),

      defineField({
        name: 'alt',
        title: 'Title',
        type: 'string',
      })
    
     
  ],
})
