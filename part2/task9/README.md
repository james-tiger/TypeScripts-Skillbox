# React Application with Dynamic Imports

This project demonstrates the use of dynamic imports in a React application to optimize page loading.

## Features

- Multiple pages with different content
- Dynamic imports using React.lazy and Suspense
- Each page is loaded as a separate chunk
- Loading indicator while chunks are being loaded

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Production Build

To create a production build and view the optimized performance:

```bash
npm run build
npm run preview
```

## Performance Measurement

The application has been optimized using dynamic imports, which provides several benefits:

1. Initial load time is reduced as only the necessary code is loaded
2. Each page is loaded on-demand when navigating to it
3. The main bundle size is significantly smaller

To measure the performance improvements:

1. Build the application for production
2. Use the browser's DevTools Network tab to observe the loading behavior
3. Note how each page is loaded as a separate chunk when navigating to it 