# Node JS Learning Note

## Node Js Learning

Imperative: type in command 

Declarative: saying the final state should be 

### Node.js: javascript runtime

- for the server side for network application

- backend

### Express.js: web framework for Node.js

## Next.js

### Introduction

- React framework + additional features for building server render react application
- React problem
    - Only good for viewing (user interfaces), no enough to create a fully-featured application for production
    - But as a developer, we will need to make decision on other features such as routing, date fetching…
- Features from Next.js:
    - Routing: can use firebase routing
    - API routes: Allow you to create API
    - Rendering: support both server side and client side rendering
    - Data fetching
    - Styling
    - Optimization
    - Dev and prod build system
- They have lots opinions and convention.

### Folder structure

![Untitled](Node%20JS%20Learning%20Note%20cf7571f386b547358c166dbdc2afd6ec/Untitled.png)

- **`/app`**: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- **`/app/lib`**: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- **`/app/ui`**: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- **`/public`**: Contains all the static assets for your application, such as images.
- **`/scripts`**: Contains a seeding script that you'll use to populate your database in a later chapter.
- **Config Files**: You'll also notice config files such as `next.config.js` at the root of your application. Most of these files are created and pre-configured when you start a new project using `create-next-app`. You will not need to modify them in this course.

next create a node server for you

### Server Component

- In Next.js, all components are Server components by default
- They can read files and fetch data from database but cannot use hooks or things relates to user interactions

### Client Component

- You need to put in `use client` at the top of component file
- Cannot read files but have the ability to use hooks and user interaction

### Routing