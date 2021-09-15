# Server Side Rendering
 
Server Side Rendering is developed with Node.js, React and Next.js with an aim to implement **Navigation** and **Server-Side-Rendering** in the application, it makes an API call to fetch page content from JSON file([data.json](https://kulsumansari.github.io/webpage-data/companyData/data.json)) hosted on Github.

Live Link [Server Side Rendering](https://flamboyant-fermi-b45029.netlify.app)


## Introduction

A simple frontend application to demonstrate server-side-rendering , created with Next JS . This application also implements concept of reusable components (Navigation bar, Banner, Footer ).

## Getting Started

To set up your project locally you need node.js and git on your local machine after set-up run follow these simple steps.

### Installation

From your terminal/command line:

1. Clone the repository
   ```sh
   git clone https://github.com/kulsumansari/Server-side-rendering.git
   ```
2. Install Dependencies
   ```sh
   $ npm install
   ```
3. To start the Application
    ```sh
    $ next start
    ```
    
## Features

* Server Side Rendering

* Easy Routing

* Responsive Design


## Application View

* `/` Route

    ![](https://kulsumansari.github.io/webpage-data/companyData/ssr-ss.png)

* `/surfboard` Route

    ![](https://kulsumansari.github.io/webpage-data/companyData/surfboard-ss.png)

* `/raweng` Route

    ![](https://kulsumansari.github.io/webpage-data/companyData/raweng-ss.png)

* `/contentstack` Route

    ![](https://kulsumansari.github.io/webpage-data/companyData/cs-ss.png)
    


## Folder Structure
```
.
├── pages 
|    ├── index.js
|    ├── surfboard
|    |    └── index.js
|    ├── rawng
|    |    └── index.js
|    ├── contentstack
|    |    └── index.js
|    └── _app.js
├── components 
|    ├── Navabr
|    |    ├── NavBar.jsx
|    |    └── NavBar.module.scss
|    ├── Banner
|    |    ├── Banner.jsx
|    |    └── Banner.module.scss
|    ├── Footer
|    |    ├── Footer.jsx
|    |    └── Footer.module.scss
|    └── Logo
|         ├── Logo.jsx
|         └── Logo.module.scss
├── utils 
|    └── apiCalls.js
├── public 
|    ├── favicon.ico
|    └── vercel.svg
├── README.md
├── .gitignore
├── package-lock.json
└── package.json


```

## Resources
* [React](https://reactjs.org/docs/getting-started.html)
* [Getting Started with Next.js](https://nextjs.org/docs/getting-started)
* [Next.js Link Component](https://nextjs.org/learn/basics/navigate-between-pages/link-component)
* [Next.js Server Side rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering)

## Author

Kulsum Ansari
