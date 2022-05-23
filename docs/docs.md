## Technical Stacks:

Here are the primary technologies suggested:

### Develop

React: For the UI
Remix: Framework for the Client/Server/Routing
TypeScript: Type checking the project for type errors
Express: Node server 

Tailwind CSS: Utility classes for consistent/maintainable styling
Postcss: CSS processor (pretty much just use it for autoprefixer and tailwind)
remix-i18next: Localization - easy to setup

Prettier: (Code formatter)
ESLint: Linting the project for simple mistakes

### Test

Cypress: Running end-to-end tests
Jest: Unit/Component testing 
Testing Library: Simple utilities for testing DOM-based user interfaces

### showcase
StoryBook: UI component explorer


### Bundle
ESBuild: JavaScript bundler (used by Remix and mdx-bundler).

### project structure

```
├── app
│   ├── components
│   ├── routes
│   ├── utils
│   ├── styles
│   ├── entry.server.tsx
│   ├── entry.client.tsx
│   └── root.jsx
├── build
│   ├── assets.json
│   └── index.js
├── package-lock.json
├── package.json
├── public
│   └── build
│       ├── _shared
│       │   └── chunk-DH6LPQ4Z.js
│       ├── entry.client-CY7AAJ4Q.js
│       ├── manifest-12E650A9.js
│       └── root-JHXSOSD4.js
└── remix.config.js
```

colocated files/ grouping by features or routes / ducks approach
Grouping componnets, unit tests, css, container and its sub features is much more maintanable them in different seperate folders/places. so that we can easily understand what a module and feature consists of..



## Why Remix?
Remix is a server side framework built on top of the Web Fetch API and React Router, each route in remix have three primary exports a `loader`, an `action` and a `default component export`. 

`loader` - The loader function will be called on the server before rendering to provide data to the route.

`action` - The action function is responsible for data mutation

`default export` - The default export is the component that will be rendered on that route.

## UI

Follow a file-based routing system and support nested routing and dynamic route segments.

Website works with JavaScript disabled 

Nested routes allow building complex UI applications that are also SSR capable 

Data fetching for client and server uses the same loader code 

Most apps can be built leveraging web fundamentals (form/anchor tag)

Minimalistic client-side UI rendering 

Pre-fetch page assets 

JS Code splitting (Remix)

no more skeleton UI, loading spinners, Loading state spinners not required by default (Remix)

Route based error handling with ErrorBoundary.  Along with exporting a traditional React functional component from a Route, developers can also export two other functional components: ErrorBoundary and CatchBoundary. These components are automatically get rendered in place of your main component if the loader or action functions return response statuses with 500 or 404 respectively.



## Server

Server Side rendering (Remix)

Server can build a single JS file for optimized deployments (Remix)

Deployable on FaaS (Functions as a Service), edge workers or on your own NodeJS server (Remix)

Asset bundler (ESBuild via Remix)

## SEO Friendly
Each route can also export a meta function responsible for setting meta tags for your Html document, this way you can set a title and a description for every route and add other meta tags you want.

```
export const meta = () => {
  const title = 'Racing App';
  const description = '';

  return {
    charset: 'utf-8',
    title,
    description,
    keywords: 'abc',
  };
};
```


## Cons & Learning Curve

Remix is powerful and got 17k stars and should gain further popularity in the coming years.
But it is just newly open-sourced and not having huge community. 
Team members might take some time to learn new framework and its concepts, even though it follows the syntax similar to react.
  
