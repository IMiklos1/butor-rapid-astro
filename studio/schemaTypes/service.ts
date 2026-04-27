// studio/schemaTypes/service.ts
import { defineType, defineField } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Szolgáltatások',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Cím', type: 'string' }),
    defineField({ name: 'description', title: 'Leírás', type: 'text' }),
    defineField({ name: 'iconName', title: 'Lucide Ikon neve', type: 'string', description: 'Pl: sofa, truck, wrench. Kereshető itt: lucide.dev' }),
    defineField({ name: 'order', title: 'Sorrend', type: 'number' }),
  ],
})