## server components

a React component that is rendered on the server (returns HTML for the server component)
in NextJS 13, server components are the default
components that are non-interactive

NextJS recommends using server components until you need to use client components:
useState(), useEffect(), useContext(), are only available on the client side.

The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

```
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

Catch-all Segments
Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName].
For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

Optional Catch-all Segments
Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].
For example, app/shop/[[...slug]]/page.js will also match /shop
