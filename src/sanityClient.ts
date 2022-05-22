import sanityClient from "@sanity/client";

const config = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true,
};

export const client = sanityClient(config);

export const allPosts = `*[_type == 'post']{tags[]->{slug, title}, ...} | order(publishedAt desc)`;

export const allCategoriesWithPosts = `*[_type == 'tags']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
