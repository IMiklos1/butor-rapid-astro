// studio/schemaTypes/stat.ts
import { defineType, defineField } from 'sanity'

export const statType = defineType({
  name: 'stat',
  title: 'Statisztikák',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Érték',
      type: 'string',
      description: 'Pl.: "10+", "1600+", "100%"',
    }),
    defineField({
      name: 'label',
      title: 'Felirat',
      type: 'string',
      description: 'Pl.: "Év tapasztalat"',
    }),
    defineField({
      name: 'order',
      title: 'Sorrend',
      type: 'number',
      description: 'Ez alapján lesznek sorbarendezve az oldalon (kisebb szám van elől).',
    }),
  ],
  // Ez csak a CMS vizuális megjelenését teszi szebbé a listában
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
  },
})