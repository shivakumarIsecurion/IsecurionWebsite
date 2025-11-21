import { getAllJobs } from '@/controllers/jobControllers'
import type { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
    slug: 'jobs',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'location', 'department', 'experienceLevel', 'status'],
    },

    fields: [

        // ---- Basic Info ----
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        // {
        //     name: 'department',
        //     type: 'select',
        //     required: true,
        //     options: [
        //         'SOC',
        //         'GRC',
        //         'Consulting',
        //         'DevSecOps',
        //         'Threat Intel',
        //         'IT',
        //         'HR',
        //         'Other'
        //     ]
        // },
        {
           name: 'location',
            type: 'select',
            required: true,
            options: [
                'Bengaluru, India',
                'Chennai, India',
                'Hyderabad, India',
                'Pune, India',
                'Mumbai, India',
                'Delhi, India',
                'Gurugram, India',
                'Noida, India',
                'Kolkata, India',
                'Ahmedabad, India',
                'Coimbatore, India',
                'Nagpur, India',
                'Visakhapatnam, India',
                'Jaipur, India',
                'Kochi, India',
                'Indore, India',
                'Surat, India',
                'Chandigarh, India',

                'Remote, India',
                'Hybrid, India',
                'Work From Home, India'
            ]
        },
        {
            name: 'employmentType',
            type: 'select',
            required: true,
            options: [
                'Full-Time',
                'Part-Time',
                'Internship',
                'Contract'
            ]
        },

        // ---- Experience ----
        {
            name: 'experienceLevel',
            type: 'select',
            required: true,
            options: [
                'Fresher',
                '0-1 Years',
                '1-3 Years',
                '3-5 Years',
                '5+ Years'
            ]
        },

        // ---- Job Content ----
        {
            name: 'skills',
            type: 'array',
            label: 'Required Skills',
            required: true,
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'jobDescription',
            type: 'textarea',
            required: true,
            label: 'Job Overview'
        },
        {
            name: 'responsibilities',
            type: 'array',
            label: 'Responsibilities',
            fields: [
                {
                    name: 'item',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'requirements',
            type: 'array',
            label: 'Requirements',
            fields: [
                {
                    name: 'item',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'preferredCertifications',
            type: 'array',
            label: 'Preferred Certifications',
            fields: [
                {
                    name: 'certificate',
                    type: 'text'
                }
            ]
        },

        // ---- Optional & Application ----
        {
            name: 'educationRequired',
            type: 'text',
        },
        {
            name: 'applyLink',
            type: 'text',
            label: 'Apply URL',
        },

        // ---- Status & Dates ----
        {
            name: 'applicationDeadline',
            type: 'date',
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'Active',
            options: ['Active', 'Closed', 'Draft']
        },
    ],
    endpoints: [
        {
            path: '/get-all',
            method: 'get',
            handler: getAllJobs
        }
    ]
}
