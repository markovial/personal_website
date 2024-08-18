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
