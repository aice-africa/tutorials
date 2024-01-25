# Creating a personal blog

The aim is to create a website where you can share about your profile (image, description, and you blog). 
The **main** page of the blog should have an (image and a description of your work and interests). 
When each blog is clicked it should be able to link to the readable content. 

You can follow this tutorial [here](https://nextjs.org/learn-pages-router/basics/data-fetching/blog-data)

```markdown
---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

This blog is my first
``` 
![Screenshot 2024-01-25 at 13 56 13](https://github.com/aice-africa/tutorials/assets/25654848/da58aae2-e758-45d5-8b85-c30b516e01b5)


```bash 
npm install gray-matter```

Inside `lib/posts.js` paste the following code:

```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
```
