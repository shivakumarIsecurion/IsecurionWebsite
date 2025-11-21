import { getAllInsights } from '@/controllers/insightsContainer'
import type { CollectionConfig } from 'payload'

export const Insights: CollectionConfig = {
    slug: 'insights',
    admin:{
        useAsTitle: 'title'
    },

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        }, {
            name: 'description',
            type: 'textarea',
            required: true
        }, {
            name: 'imagePath',
            type: 'text',
            required: true,
        }, {
            name: 'date',
            type: 'date',
        }, {
            name: 'path',
            type: 'text'
        }
    ],

    endpoints: [
        {
            path: '/get-all',
            method: 'get',
            handler: getAllInsights
        }
    ]
}