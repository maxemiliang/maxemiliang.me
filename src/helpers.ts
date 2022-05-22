import { format, parseISO } from "date-fns";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "./sanityClient";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function formatBlogPostDate(date: string) {
  const dateString = parseISO(date);
  const formattedDateString = format(dateString, "MMMM do, yyyy");
  return `${formattedDateString}`;
}

export function getSanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}
