import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'HeroImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'backgroundInformationTitle',
      title: 'BackgroundInformationTitle',
      type: 'string',
    },
    {
      name: 'backgroundInformation',
      title: 'BackgroundInformation',
      type: 'text',
    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: "reference", to: {type: "social"}}],
    },
  ],
})
