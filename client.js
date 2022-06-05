import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '4g1muh35',
  dataset: 'production',
  apiVersion: 'v2021-10-21', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;