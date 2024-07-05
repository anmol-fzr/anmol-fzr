import { getCollection, getEntryBySlug, getEntries } from "astro:content";
import type { Blog, BlogData } from "./content/config"

const sortBlogByDate = (blogs: Blog[]) => blogs.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

const getAllDocs = async () => {
  const allDocs = await getCollection("docs")
  return allDocs
}

const getAllPublishedBlogs = async () => {
  const allPosts = await getCollection("blog", ({ data }) => data.isPublished === true)
  return sortBlogByDate(allPosts)
}

const getBlogBySlug = async (slug: string) => {
  const blog = await getEntryBySlug("blog", slug)
  return blog
}

const getRelatedBlogs = async (related: BlogData["related"]) => {
  if (!related) return
  const relatedBlog = await getEntries(related)
  const publishedRelatedBlogs: Blog[] = [];
  relatedBlog.map(relatedBlog => {
    if (relatedBlog.data.isPublished) {
      publishedRelatedBlogs.push(relatedBlog)
    }
  })
  return publishedRelatedBlogs
}

export { getAllPublishedBlogs, getBlogBySlug, getRelatedBlogs, getAllDocs }
