import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'rfm6lkpk',
    dataset: 'production',
    useCdn: true
})