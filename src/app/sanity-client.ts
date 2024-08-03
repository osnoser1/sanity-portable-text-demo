import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'vdr05tup',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API
});
