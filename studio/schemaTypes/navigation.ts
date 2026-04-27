// studio/schemaTypes/navigation.ts
import { defineType, defineField } from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigáció (Menü)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Belső név',
      type: 'string',
      initialValue: 'Főmenü',
      readOnly: true,
    }),
    defineField({
      name: 'links',
      title: 'Menüpontok',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Felirat (pl: Rólunk)', type: 'string' },
            { name: 'href', title: 'Hivatkozás (pl: #about)', type: 'string' }
          ]
        }
      ]
    })
  ]
})