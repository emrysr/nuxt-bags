---
title: 'Introduction'
---

# OneBag App

> It's in the bag

This is a personal project aimed at enhancing my JavaScript deployment skills. I have no affiliation with the subreddit r/onebag.

<!--more-->

This web app was inspired by a Google Sheets spreadsheet found on the subreddit [r/onebag](https://www.reddit.com/r/onebag/). The data was extracted using the google sheets api and can be found on the data page

![first thoughts](/img/wireframe.png "Concepts of app")

The code is available on [Github](https://github.com/emrysr/onebag/) and can be deployed via CI/CD.

__Please note that I do not own this data and have not yet discussed this project with the subreddit members.__

This is a toy project and is not intended to be used as a production-ready app.

## Issues

If you wish to discuss this work or report issues, please use the [Github issue tracker](https://github.com/emrysr/onebag/issues).

I welcome pull requests that improve the app.

::accordion
---
items:
  - label: Tech Stack
    defaultOpen: true
    content:
        - "[Typescript](https://www.typescriptlang.org/) - The app is written in Typescript"
        - "[Nuxt](https://nuxt.com/) - Web framework (using Rollup, Vite, Nitro)"
        - "[Canva](https://canva.com/) - Logo and favicon editor"
        - "[Vue](https://vuejs.com/) - Component creation"
        - "[Pinia](https://pinia.vuejs.com) - State management"
        - "[Tailwind](https://tailwindcss.com/) - CSS framework"
        - "[NuxtUI](https://ui.nuxt.com) - UI Library"
        - "[VueRouter](https://router.vuejs.com/) - Component navigation"
        - "[vue-virtual-scroll-grid](https://www.npmjs.com/package/vue-virtual-scroll-grid) - A Vue component that allows large lists to render efficiently"
        - "[Lodash](https://lodash.com) - JavaScript utility library"
        - "[Bun](https://bun.sh/) - JavaScript runtime & package manager"
        - "[Icônes](https://icones.js.org) - Icons"
        - "[VSCode](https://code.visualstudio.com/) - Editor"
        - "[Railway](https://railway.app/) - Web app deployment"
        - "[Cordova](https://cordova.apache.org/) - Mobile app builder"
        - "[GitHub](https://github.com/) - Version control"
        - "[Nitro](https://nitro.unjs.io/) - node web server powering nuxt"
  - label: Roadmap
    numbered: true
    content:
        - ~~Retrieve Spreadsheet data via Google Docs API~~
        - ~~Store the data in a Pinia store~~
        - ~~Regroup and display the data as a grid of images~~
        - ~~Display fallback images~~
        - ~~Use a virtual scroller to replace existing DOM elements as the user scrolls~~
        - ~~Integrate Bulma and create Nuxt layouts~~
        - ~~Utilise Nuxt content and pages~~
        - ~~Create favicon and share links~~
        - ~~Integrate IonIcons~~
        - ~~Implement a detail page for each product~~
        - ~~Add brand dropdown~~
        - ~~Add laptop size dropdown~~
        - ~~Add toggle filtering for any applicable spreadsheet columns~~
        - ~~Add text search~~
        - Develop a Single Page Application with offline support
        - Add backend database in Firebase
        - Add Webauthn authentication
        - Add favouriting feature
        - Add commenting feature
        - Add editable content page for products
        - Model the store data with Pinia-ORM
        - Deploy using Railway
        - Improve Server Side Rendering performance
        - Create Apache Cordova mobile app
        
---
::

---

## Thanks

I'd like to thank the original creator of the spreadsheet... I'm unable to find their name - sorry!

original post [r/onebag](https://www.reddit.com/r/onebag/comments/xcgeoh/updated_onebagzill_bag_comparison_spreadsheet/).