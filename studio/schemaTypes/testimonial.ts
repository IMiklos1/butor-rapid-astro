// studio/schemaTypes/testimonial.ts
import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Vélemények',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Ügyfél neve', type: 'string' }),
        defineField({ name: 'location', title: 'Helyszín', type: 'string', initialValue: 'Miskolc' }),
        defineField({
            name: 'rating',
            title: 'Értékelés (1-5)',
            type: 'number',
            initialValue: 5,
            validation: Rule => Rule.required().min(1).max(5)
        }),
        defineField({ name: 'text', title: 'Vélemény szövege', type: 'text' }),
        defineField({ name: 'order', title: 'Sorrend', type: 'number' }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'rating',
        },
        prepare(selection) {
            const { title, subtitle } = selection
            return {
                title: title,
                subtitle: `${subtitle} csillag`
            }
        }
    }
})