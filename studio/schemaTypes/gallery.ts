// studio/schemaTypes/gallery.ts
import { defineType, defineField } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galéria Szekció',
  type: 'document',
  fields: [
    defineField({ name: 'subtitle', title: 'Kis alcím', type: 'string', initialValue: 'Munkáink' }),
    defineField({ name: 'title', title: 'Főcím', type: 'string', initialValue: 'Kész munkák, valódi eredmények' }),
    defineField({ name: 'description', title: 'Leírás', type: 'text' }),

    // A bal oldali nagy kép
    defineField({
      name: 'largeImage',
      title: 'Bal oldali NAGY kép (360px magas)',
      type: 'object',
      fields: [
        { name: 'image', type: 'image', title: 'Fotó', options: { hotspot: true } },
        { name: 'title', type: 'string', title: 'Felirat (pl: Gardrób összeszerelés)' },
        { name: 'location', type: 'string', title: 'Helyszín (pl: Miskolc, 2024)' }
      ]
    }),

    // A jobb oldali kis kép
    defineField({
      name: 'smallImage',
      title: 'Jobb oldali KIS kép (168px magas)',
      type: 'object',
      fields: [
        { name: 'image', type: 'image', title: 'Fotó', options: { hotspot: true } },
        { name: 'title', type: 'string', title: 'Felirat (pl: Konyhabútor)' }
      ]
    }),

    // A statisztika / Facebook kártya
    defineField({
      name: 'statsCard',
      title: 'Jobb oldali Statisztika Kártya',
      type: 'object',
      fields: [
        { name: 'number', type: 'string', title: 'Kiemelt szám (pl: 500+)' },
        { name: 'label', type: 'string', title: 'Felirat (pl: Elvégzett munka)' },
        { name: 'text', type: 'text', title: 'Leírás' },
      ]
    })
  ],
})