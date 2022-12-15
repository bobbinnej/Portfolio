import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    // All fields in the website
     {
      name:"name",
      title:"Name",
      type:"string",
     },

     {
      name:"heroImage",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      },
     },

     {
      name:"role",
      title:"Role",
      type:"string",
     },

     {
      name:"backgroundInformation",
      title:"BackgroundInformation",
      type:"string",
     },

     {
      name:"profilePic",
      title:"ProfilePic",
      type:"image",
      options:{
        hotspot:true,
      },
     },

     {
      name:"phoneNumber",
      title:"PhoneNumber",
      type:"string",
     },

     {
      name:"email",
      title:"Email",
      type:"string",
     },

     {
       name:"address",
       title:"Address",
       type:"string",
     },

     {
      name:"socials",
      title:"Social",
      type:"array",
      of: [{type:"reference", to: {type:"social"} }],
     }
  ],

 
})
