// studio/schemaTypes/hero.ts
import { defineType, defineField } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Szekció',
  type: 'document',
  fields: [
    defineField({ name: 'badgeText', title: 'Felső kis címke', type: 'string', initialValue: 'Bútor összeszerelés Miskolc' }),
    defineField({ name: 'title', title: 'Főcím', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Alcím', type: 'text' }),
    defineField({ name: 'backgroundImage', title: 'Háttérkép', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaText', title: 'Fő gomb felirata', type: 'string', initialValue: 'Hívjon most!' }),
    defineField({ name: 'phoneNumber', title: 'Telefonszám', type: 'string' }),

    // ÚJ: Trust Badges (kis ikonok a szöveg alatt)
    defineField({
      name: 'trustBadges',
      title: 'Bizalmi címkék (Gomb alatti ikonok)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Lucide Ikon neve (pl: shield, zap, award)', type: 'string' },
          { name: 'text', title: 'Szöveg', type: 'string' }
        ]
      }]
    }),

    // ÚJ: Info Card lista (jobb oldali doboz)
    defineField({ name: 'cardTitle', title: 'Jobb oldali kártya címe', type: 'string', initialValue: 'Miért válasszon minket?' }),
    defineField({
      name: 'cardList',
      title: 'Kártya lista elemei (pipákkal)',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({ name: 'customerCount', title: 'Elégedett ügyfelek száma', type: 'string', initialValue: '1.600+' }),
  ],
})