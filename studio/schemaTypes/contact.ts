// studio/schemaTypes/contact.ts
import { defineType, defineField } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Kapcsolat és Cégadatok', // Kicsit átnevezhetjük, hogy egyértelmű legyen
  type: 'document',
  fields: [
    // ── AZ EREDETI MEZŐK (A kapcsolat űrlaphoz) ──
    defineField({ name: 'title', title: 'Cím', type: 'string', initialValue: 'Kérjen ajánlatot most!' }),
    defineField({ name: 'subtitle', title: 'Alcím / Leírás', type: 'text' }),
    defineField({ name: 'phone', title: 'Telefonszám', type: 'string' }),
    defineField({ name: 'email', title: 'E-mail cím', type: 'string' }),
    defineField({ name: 'location', title: 'Helyszín', type: 'string' }),
    defineField({ name: 'hours', title: 'Nyitvatartás', type: 'string' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),

    // ── AZ ÚJ MEZŐK (A GDPR-hoz és jogi dolgokhoz) ──
    defineField({ 
      name: 'legalName', 
      title: 'Hivatalos név (pl. Kovács János E.V.)', 
      type: 'string',
      // group: 'legal' // Opcionális: a CMS-ben így jobban elkülönül
    }),
    defineField({ 
      name: 'address', 
      title: 'Hivatalos székhely', 
      type: 'string' 
    }),
    defineField({ 
      name: 'taxNumber', 
      title: 'Adószám', 
      type: 'string' 
    }),
    defineField({ 
      name: 'gdprDate', 
      title: 'Adatkezelési tájékoztató hatálybalépésének dátuma', 
      type: 'date',
      initialValue: new Date().toISOString().split('T')[0]
    }),
  ],
})