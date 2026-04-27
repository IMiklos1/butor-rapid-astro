// studio/schemaTypes/siteSettings.ts
import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Oldal Beállítások',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Belső név',
      type: 'string',
      initialValue: 'Kezdőlap szerkezete',
      readOnly: true, // Ezt nem kell módosítani
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Oldal Szekciói (Page Builder)',
      description: 'Add hozzá, töröld, vagy húzással rendezd át a szekciókat! Ami nincs a listában, az nem jelenik meg az oldalon.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Hero Szekció', value: 'hero' },
          { title: 'Statisztikák', value: 'stats' },
          { title: 'Szolgáltatások', value: 'services' },
          { title: 'Galéria', value: 'gallery' },
          { title: 'Vélemények', value: 'testimonials' },
          { title: 'Kapcsolat / Űrlap', value: 'contact' },
        ]
      }
    })
  ]
})