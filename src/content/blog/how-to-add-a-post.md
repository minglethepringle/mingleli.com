---
title: "How to add a new post"
description: "A quick reference for future me on how to publish to this blog."
date: 2026-07-20,
draft: true
---

A note to myself (and anyone curious how this blog works).

## The steps

1. Create a new file in `src/content/blog/`, ending in `.md`. The filename becomes the URL, so `my-cool-post.md` lives at `/blog/my-cool-post`.
2. Add the frontmatter block at the top with a `title`, `description`, and `date`.
3. Write the post in Markdown below the frontmatter.
4. Commit and push. The site rebuilds and the post appears in the list.

## Frontmatter fields

| Field | Required | Notes |
| --- | --- | --- |
| `title` | Yes | Shown as the heading and in the list. |
| `description` | Yes | The short blurb under the title. |
| `date` | Yes | Used to sort posts, newest first. |
| `draft` | No | Set to `true` to hide a post from the list. |

That's the whole system. Simple on purpose.
