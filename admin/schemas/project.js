import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title:"Image",
            type: "image",
            options:{
                hotspot:true
            }
             
        }),

        defineField({
            name: "alt",
            title:"Alt",
            type: "string",
        }),
        defineField({
            name: "name",
            title:"Name",
            type: "string",
        }),
        defineField({
            name: "category",
            title:"Category",
            type: "reference",
            to:{
                type:"category"
            }
        }),
        defineField({
            name: "address",
            title:"URL",
            type: "string",
          
        })
    ],
});