
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "aswp9grg",
  dataset: "production",
  apiVersion: "2022-11-15",
  useCdn: true,
  token: "skQf4ZV23ZIHzx3wOZmfzOHxzZpW6WV5LssDRM7i5WgIzztlJdeWwFf7LfBFdxr15AXnxb5x2YZ7UCdnqRCHmHtC4iUjISUWAbkGsHqKxxbEPoNfzNgD7EHGwUhKxAJbFJEQmJgznxksY6EmKFKmKfmNNxQLjUXuMPCKRPReewlyeTP4ACKF",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
