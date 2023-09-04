<!-- Banner Image -->
<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="128" src="./assets/images/banner.png">
    <h1 align="center">Expo Router v2 </h1>
    <h2 align="center">step by step tutorial </h2>
    <h3 align="center">We are building a platform for a blog using Expo Router v2: multilingual, static, optimized for Google search, with an SEO architecture similar to Apple.com.</h3>
  </a>
<h5 align="center"> <a aria-label="expo documentation" href="https://maps.menu">We are revamping this: maps.menu 📚</a></h5>
</p>

<p align="center">
  <a aria-label="" href="https://github.com/bolshiyanov/expo-router-v2-step8"><b>Go back to 8 step</b></a>
 | <a aria-label="" href="https://expo-router-v2-step9.vercel.app/"><b>Look web site for 9 step</b></a>
 |
  <a aria-label="" href="https://github.com/bolshiyanov/expo-router-v2-step10">Next 10 step 📚</a>
</p>
<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr111.png">
---

- [📚 About this step](#-documentation)
- [🗺 Stack of this step](#-Stack-of-this-step)
- [🏅 Why expo-router v2](#-Why-expo-router)
- [❓ Task](#-task)
- [💙 The Team](#-the-team)
- [License](#license)

<h2 align="center">Dynamic multilingual page routing and language switching logic: creating a single user interface in different languages and pages using expo-router v2</h2>



## 📚 About this step

In this section, I will be working on creating a multilingual foundation for a website, blog, or application.

My goal is to create a basic template that can be used for conducting international business with any number of countries.

In this section, there will be three key steps:

1) I will set up routing and establish a structure for generating static pages in multiple languages. Ultimately, my architecture will resemble that of the Apple.com website.

2) My second task is to determine the user's browser or device language. These are two different technologies, and I will implement both. I will create a language management state and also store the desired language in local storage for web users.

3) It's not uncommon for a device to have one language while the user prefers another. I will create a language toggle button. This is more relevant to web users, so at this stage, I will save the new language value in local storage. Additionally, for web users, within this step, I will create a Footer component. However, for now, it will only handle language switching.

These are the tasks I'll be working on in this section, and I'm getting started.

## 🗺  Step-by-Step Guide:<br/>

Now, let's talk about the logic of language switching and pages.

1) When a user first enters through their browser, the application detects their language, and on the main page site.com/index.html, it dynamically sets the content in the browser's language. The browser's language is stored in local storage and the application's store. At this moment, the application creates buttons for switching on all routes for this user, and everywhere there will be static pages in the current language, for example, site.com/fr/blog/london.html.

2) If the user clicks a button to change the application's language, at the moment of the click, the new language name is saved in local storage and state. The user is redirected to the main page site.com/index.html with dynamic content. At this moment, the buttons are redrawn, and all new routes will occur only between static pages in the new language, for example, site.com/en/blog/london.html.

3) When the user returns to the site, as soon as they land on the main page site.com/index.html, regardless of the current browser language, the application retrieves the saved language from local storage and creates routes to static pages in the previously saved language, such as site.com/en/blog/london.html.

4) Navigating through a direct link like site.com/fr/blog/london.html will open that static page. If the user's language is different, they will be prompted to go to the same page but in another language, for example, site.com/en/blog/london.html.

I want to emphasize that within this section, we are not working with text translations. We will address this task in the next step. So, if you are reviewing the site up to this point, you will need to use the browser console, go to the APPLICATIONS tab, and check the local storage. Also, keep an eye on changes in the address bar. You won't see changes on the page itself, but these are always different pages.

As I mentioned earlier, differences will become apparent when I add translations in the next step.

<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr222.png">

1) The routing layer in expo-router represents a page structure that closely resembles standard HTML. The only difference is the presence of an additional component above each page or group of pages. The _layout component defines how these pages should interact within a given branch.

Now, we need to create the structure of our website. To do this, we add folders for languages, as many as we will have in our project, whether it's 1, 6, or 160, it's up to you, but you'll need to do it manually.

In essence, these folders and subfolders will have the same components. Therefore, we will move all the code from the routing layer to the Components layer. The routing layer will contain folders solely for structuring, acting as labels. The only thing that distinguishes these components in the routing layer is the 'Lang' prop, through which we will pass rules to the components.

<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr4.png">

2) The main logic for detecting and saving languages will be handled by the LanguageLogicComponent, which we will place at the project's root.

Just a reminder that the project's root is located in the first _layout.tsx, not in any other index file. There's no need to override this, and it's not possible.

<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr333.png">

3) Within the components themselves, we are not making any changes at this stage. However, we are adding to each FooterComponent.

In this component, I will create a fake footer but incorporate real language switching.

<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr5.png">

4) I've placed the language settings in the config file. However, please note that these settings only affect the application's logic layer.

The routing layer is located in the app component. In the current project version, adding or modifying languages in the config does not automatically create new routes.

If you're adding or changing languages, you should go back to the app folder and create corresponding routes.

Of course, it's important to remember that there's no point in creating language settings if your data doesn't contain content in those languages.

<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr6.png">

5) The core logic for handling and switching languages is located within the LanguageLogicComponent.

I'll remind you that we're using Expo-router v2 as a wrapper for React-Native. This means I'm simultaneously creating a static website and native iOS and Android applications. Therefore, there will be different logic here.

In the first block, I use browser local storage for web users. According to my task, I should display the website in the user's browser language. However, if the user has previously selected a different language, I should show them the page in the language they chose earlier.

In the second block, I work with devices and native applications and need to set up dependencies from "Expo-localisation" to call "getLocales" to obtain the device's language. I will use this localization and dispatch it to the store.

The third block is for the edge case where the user's language isn't supported by the application. In that case, we'll show them the English version. This default value is imported from the config.

<img align="center" alt="Multilenguage routing to static pages with Expo-Router v2" height="80%" src="./assets/images/Scr7.png">

The final component I'll create is a language switcher component called ChangeLangButton. It retrieves the list of all languages from the config and renders them. However, it displays the full language name from the object's value, not the short name from the key. The retrieved value is rendered using the map method in the JSX code fragment.

When the user switches the language, the obtained value is stored in the state, and the user is redirected to the main page. When the main page is rendered, the new state is stored in the browser's local storage.

In the final version of this component, a popup window will be added for users who come through a direct link but have a browser that supports a different language. In such cases, they will be given the option to choose an alternative page in the browser's language.

## ❓ Task

Add one more language by following these steps:
- Make changes in the config.
- Create a new directory in the app.
- In the JSON files for all items, add the corresponding description.


## 🗺 Stack of this step
`new`
- [`expo-localization`](expo-localization) A library that provides an interface for native user localization information.

`earlier versions`
- [`flatlist`](flatlist) A FlatList in React Native is a component for efficiently rendering lists of data in a mobile app.
- [`reduxjs/toolkit`](reduxjs/toolkit) A Comprehensive Library for Efficient State Management and Development.
- [`local storage`](local-storage) Browser local storage is a feature that allows websites to store data locally on a user's device.
- [`scss`](scss) Supported scss for web.
- [`react-native-svg-transformer`](react-native-svg-transformer) Supported SVG images.
- [`expo-router-v2`](expo-router-v2) Supported static web generation, css , seo.
- [`expo-router`]( expo-router) There is no specific package called "expo-router." Expo uses React Navigation for routing
- [`expo`](expo) Expo is a platform simplifying React Native development through tools, libraries, and workflow enhancements.
- [`react-dom`](react-dom)React package enabling rendering of components in the web browser's DOM (Document Object Model).
- [`react native`](react-native) JavaScript framework for building cross-platform mobile applications.
- [`react`](react) JavaScript library for building user interfaces, maintained by Facebook and a community.
- [`typescript`](typescript) TypeScript is a superset of JavaScript adding static typing for enhanced code quality and tooling.
- [`gitHub`](gitHub) GitHub is a web-based platform for version control and collaboration using Git.
- [`netlify`](netlify) Netlify is a web hosting platform for deploying and managing modern web projects.

## 🏅 Why expo-router v2

 landscape of modern business, the effectiveness of customer acquisition and retention takes on profound importance. The intersection where the cost of drawing in initial customers converges with the metrics of retention and Lifetime Value establishes a pivotal nexus for real-world enterprises. It's within this context that businesses frequently navigate towards the realm of search engine optimization, leveraging its potential to tap into organic traffic from behemoths like Google.<br/>

Undoubtedly, a website serves as an inviting initial point of contact between the business and potential clientele. However, its true value shines when users willingly return, reinforcing the need for a captivating and compelling platform. This brings us to the second interaction with customers, where the objective shifts to providing a seamless, native application experience tailored for iPhones and Android devices. Hence, discerning businesses harmonize their approach by upholding a static website for search engine visibility and a dynamic mobile application for app marketplaces.<br/>

Until recently, achieving such intricate synergy was primarily the domain of expansive teams like Twitter. This involved intricate orchestration of web and native components by scores of developers. Yet, the landscape has metamorphosed with the emergence of Expo Router Version 2. This paradigm shift has overhauled the development process, empowering developers to craft code within a unified ecosystem and effortlessly export the final product as both a static website and a feature-rich app available on the Play Store.<br/>

Moreover, the realm of possibilities has expanded to encompass wearable gadgets, such as the Apple Watch, thanks to Expo Router's extended support. In mere minutes, updates can be seamlessly integrated, thereby revolutionizing the agility with which businesses can refine their offerings. This ushers in an unmatched opportunity to harness the complete potential of the internet, propelling businesses towards the attainment of their goals.<br/>

The democratization of this robust framework marks a monumental stride forward. The once imposing barriers that impeded smaller entities from realizing their digital ambitions have now dissolved. Expo Router introduces an era of accessibility, bestowing entrepreneurs and businesses alike with the means to bridge the gap between their vision and its actualization. As businesses embark on this journey, they gain the capability to enthrall audiences, nurture loyalty, and elevate their digital footprint – all while streamlining the development process in ways that were once the exclusive domain of a select few.<br/>

In a world where triumph pivots on the symbiotic interplay between innovation and execution, Expo Router stands as a testament to technology's power to democratize opportunities. It embodies the shift that has unfolded in the landscape of app and web development – transitioning from the intricate and unwieldy to the intuitive and efficient. As businesses embrace this evolution, they set out on a transformative trajectory, shedding the constraints of the past and venturing into a future where every aspiration for digital resonance and engagement can be woven into reality.<br/>

## 💙 Author

Roman Bolshiyanov < status : open for cooperation, look job >

## License

The Expo source code is made available under the [MIT license](LICENSE). Some of the dependencies are licensed differently, with the BSD license, for example.


<img alt="Star the Expo repo on GitHub to support the project" src="https://user-images.githubusercontent.com/9664363/185428788-d762fd5d-97b3-4f59-8db7-f72405be9677.gif" width="50%">
