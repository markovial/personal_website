notes:
To ensure that images are properly displayed both locally and when deployed to GitHub Pages, let's make a few adjustments to how you're importing and using images in your Vue components:

For images in the assets folder, use the require function when setting the src attribute. This ensures that Webpack processes the images correctly. Here's an example:

vueCopy<template>
  <img :src="require('@/assets/images/example.jpg')" alt="Example Image">
</template>

For dynamically imported images (like in your Blog posts), you can use a method to resolve the image path:

vueCopy<script>
export default {
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/blog/${this.$route.params.slug}/${imageName}`)
    }
  }
}
</script>

<template>
  <img :src="getImageUrl('example.jpg')" alt="Example Image">
</template>

For SVG icons, make sure you're importing them with the ?inline query and using them as components:

vueCopy<script>
import IconSvg from '@/assets/icons/icon.svg?inline'

export default {
  components: {
    IconSvg
  }
}
</script>

<template>
  <IconSvg class="icon" />
</template>




yarn add d3
yarn add markdown-it markdown-it-mathjax3
yarn add -D frontmatter-markdown-loader
yarn add -D vue-template-compiler @vue/component-compiler-utils

# personal_website

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Personal Website Project Overview

## Technology Stack

- **Framework**: Vue 3.x
  - Chosen for improved performance, Composition API, and better TypeScript support
- **Routing**: Vue Router
  - Official routing solution for Vue.js, providing seamless single-page application navigation
- **State Management**: Vuex
  - Centralized state management across components
- **Package Manager**: Yarn
  - Selected for speed and reliability
- **Styling**: SCSS (planned)
  - Will provide powerful CSS authoring with variables, nesting, and mixins
- **Markdown Parsing**: markdown-it (planned)
  - For rendering blog posts
- **Syntax Highlighting**: Prism.js (planned)
  - For displaying code snippets in blog posts
- **Tooltip Library**: Tippy.js (planned)
  - For implementing the glossary feature
- **HTTP Client**: Axios (planned)
  - For potential future API requests

## Current Project Structure

```
/home/markov/git/personal_website/
├── dist/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── index.html
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── [various .svg files]
│   ├── components/
│   │   ├── TopBar.vue
│   │   └── Sidebar.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Blog.vue
│   │   ├── Projects.vue
│   │   └── About.vue
│   ├── App.vue
│   └── main.js
├── babel.config.js
├── README.md
├── vue.config.js
└── yarn.lock
```

# Personal Website Project Plan

## Completed Tasks
1. Project Setup
   - [x] Created project using Vue CLI with Vue 3.x
   - [x] Set up Yarn as the package manager
   - [x] Installed core dependencies (Vue Router, Vuex)
   - [x] Set up basic project structure
   - [x] Added SVG icons to assets folder

2. Basic Vue Application Structure
   - [x] Set up App.vue as the root component
   - [x] Configured main.js as the entry point
   - [x] Set up basic Vue Router in router/index.js
   - [x] Set up basic Vuex store in store/index.js

3. Core Components
   - [x] Implemented TopBar component
   - [x] Implemented Sidebar component

4. Routing and Navigation
   - [x] Set up routes for main pages (Home, Blog, About, Skills, Books, Research, Contact)
   - [x] Implement navigation in Sidebar using `<router-link>`

5. State Management Setup
   - [x] Implemented theme module functionality in main Vuex store
   - [x] Created content module in Vuex store
   - [x] Implemented basic actions and mutations for modules

6. Main Content Area
   - [x] Created `MainContent.vue` in `src/components/`
   - [x] Implemented basic structure with `<router-view>`
   - [x] Integrated with TopBar and Sidebar in `App.vue`

7. Blog Functionality
   - [x] Created Blog and BlogPost components
   - [x] Implemented Markdown parsing for blog posts
   - [x] Set up Vuex actions to fetch and store blog post data

## Next Steps (Prioritized)

1. Complete Individual Page Components
   - [ ] Implement About page component
   - [ ] Implement Skills page component
   - [ ] Implement Books page component
   - [ ] Implement Research page component
   - [ ] Implement Contact page component

2. Content Population
   - [ ] Create and populate JSON structures for books data
   - [ ] Create and populate JSON structures for skills data
   - [ ] Create and populate JSON structures for research papers data
   - [ ] Implement Vuex actions to fetch and store this data

3. Styling and Responsive Design
   - [ ] Define SCSS variables for theming
   - [ ] Style individual components and pages
   - [ ] Implement responsive design for mobile and tablet views

4. Navigation Enhancements
   - [ ] Add active state for current route in Sidebar
   - [ ] Implement smooth transitions between routes

5. Glossary Implementation
   - [ ] Create `glossary.json` in `src/assets/data/`
   - [ ] Implement basic glossary functionality
   - [ ] Integrate glossary with blog posts and other content

6. Terminal Functionality
   - [ ] Create `Terminal.vue` in `src/components/`
   - [ ] Implement basic command parsing in Vuex
   - [ ] Integrate terminal navigation with Vue Router

7. Testing
   - [ ] Set up Vue Test Utils
   - [ ] Write unit tests for Vuex modules
   - [ ] Write unit tests for main components
   - [ ] Implement basic integration tests

8. Performance Optimization
   - [ ] Implement lazy loading for route components
   - [ ] Optimize asset loading (images, fonts)
   - [ ] Implement code splitting

9. Error Handling and User Feedback
   - [ ] Implement global error handling
   - [ ] Add loading states for async operations
   - [ ] Implement user-friendly error messages

10. Documentation
    - [ ] Update README with project overview
    - [ ] Add setup instructions in README
    - [ ] Document component and module structures

11. Accessibility
    - [ ] Implement proper ARIA attributes
    - [ ] Ensure keyboard navigation
    - [ ] Test with screen readers

12. SEO Optimization
    - [ ] Implement meta tags for each page
    - [ ] Create a sitemap
    - [ ] Implement OpenGraph tags for social sharing

## Future Enhancements
- Implement search functionality across the site
- Add animations for page transitions and UI interactions
- Implement a tagging system for blog posts and skills
- Create an RSS feed for the blog
- Implement internationalization for multi-language support
- Add a newsletter subscription feature
- Implement a commenting system for blog posts
- Create a portfolio section with project showcases
- Integrate with a CMS for easier content management
- Implement web analytics


## Dependencies

- @babel/code-frame: ^7.24.7
- @babel/helper-module-imports: ^7.24.7
- acorn: ^8.12.1
- ajv: ^6.12.6
- ajv-keywords: ^3.5.2
- ansi-styles: ^4.3.0
- argparse: ^2.0.1
- axios: ^1.7.4
- bytes: ^3.1.2
- camelcase: ^5.3.1
- chalk: ^4.1.2
- commander: ^7.2.0
- core-js: ^3.38.0
- cross-spawn: ^7.0.3
- debug: ^4.3.6
- depd: ^2.0.0
- domhandler: ^4.3.1
- entities: ^2.2.0
- escape-string-regexp: ^1.0.5
- eslint-scope: ^5.1.1
- eslint-visitor-keys: ^2.1.0
- espree: ^7.3.1
- estraverse: ^5.3.0
- execa: ^1.0.0
- glob-parent: ^5.1.2
- globals: ^11.12.0
- has-flag: ^4.0.0
- hash-sum: ^1.0.2
- html-tags: ^2.0.0
- htmlparser2: ^6.1.0
- http-errors: ^2.0.0
- ignore: ^4.0.6
- inherits: ^2.0.4
- is-fullwidth-code-point: ^3.0.0
- is-stream: ^1.1.0
- jest-worker: ^27.5.1
- json5: ^2.2.3
- loader-utils: ^2.0.4
- lru-cache: ^4.1.5
- markdown-it: ^14.1.0
- markdown-it-katex: ^2.0.3
- markdown-it-mathjax3: ^4.3.2
- ms: ^2.1.3
- normalize-path: ^3.0.0
- npm-run-path: ^2.0.2
- onetime: ^5.1.2
- parse5: ^6.0.1
- path-key: ^2.0.1
- picocolors: ^1.0.1
- postcss: ^8.4.41
- prismjs: ^1.29.0
- readable-stream: ^3.6.2
- safe-buffer: ^5.2.1
- schema-utils: ^4.2.0
- semver: ^6.3.1
- setprototypeof: ^1.2.0
- shebang-command: ^1.2.0
- statuses: ^2.0.1
- string-width: ^4.2.3
- strip-ansi: ^6.0.1
- supports-color: ^7.2.0
- tippy.js: ^6.3.7
- uc.micro: ^1.0.6
- vue: ^3.4.38
- vue-router: ^4.4.3
- which: ^1.3.1
- yallist: ^4.0.0

## Dev Dependencies

- @babel/core: ^7.25.2
- @babel/eslint-parser: ^7.25.1
- @vue/cli-plugin-babel: ^5.0.8
- @vue/cli-plugin-eslint: ^5.0.8
- @vue/cli-service: ^5.0.8
- @vue/component-compiler-utils: ^3.3.0
- eslint: ^7.32.0
- eslint-plugin-vue: ^8.7.1
- frontmatter-markdown-loader: ^3.7.0
- vue-template-compiler: ^2.7.16
