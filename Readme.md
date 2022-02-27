<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">README</h3>

  <p align="center">
    A guide to this project
    <br />
    <br />
    <br />
    <a href="https://github.com/abhisharsinha/IWantTo/issues">Report Bug</a>
    ·
    <a href="https://github.com/abhisharsinha/IWantTo/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">How to run application</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This project is design to allow users of an orginization to explore their intrest in various field, It also allows user to create network with their peers.

Here's why:
* Allows you to see get associated with events of your choice
* Gives information regarding live events
* Allows you to make many new friends :smile:


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Next.js](https://nextjs.org/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Postman](https://www.postman.com/)
* [postgresql](https://www.postgresql.org/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  apt install nmp 
  npm install npm@latest -g
  ```

### Installation

_Installation depedency_

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/abhisharsinha/IWantTo.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your Google OAUTH API in `config.js`
   ```js
   const PUBLIC_KEY = 'ENTER YOUR API';
   const SECRET_KEY
   ```
5. Install postgresql
<a href="https://phoenixnap.com/kb/how-to-install-postgresql-on-ubuntu"> Postgresql</a>

6. Install express
  ```sh
  npm install express
  npm install express-studio
  ```
7. Install passport
  ```sh
  npm install passport
  npm install passport-google-oauth2
  ```
8. Install socket
  ```sh
  npm install socket.io
  ```
9. Install Cookie
  ```sh
  nmp install cookie-session
  ```
10. Install ejs
  ```sh
  npm install ejs
  ```
11. Install pg
  ```sh
  npm install pg
  ```
12. Install google APIs
  ```sh
  npm install googleapis@39 --save
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

## How to run application

Once all the depedency are met and keys are provided following steps are helpful
```sh
cd IWantTo
node app.js
```

This will start your application in backend into port 8000 which will provide site internet access, then do the following

1. Open your bowser (preferably chrome)
2. In your URL type the following
```sh
http://localhost:8000
```

This will land you to sign page once login via you institute google id explore the App.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Authorizing user via google
- [x] Creating anonymous user Id
- [x] Collecting User Intrest
- [x] Generating events based on intrest
- [ ] Live event Info
 

See the [open issues](https://github.com/abhisharsinha/IWantTo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `https://choosealicense.com/licenses/mit/` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Anilava Kundu - cs20mtech01002@iith.ac.in

Abhishar Sinha - ai20mtech01002@iith.ac.in

Gayala Manoj - cs19btech11011@iith.ac.in

Keval Malde - cs20mtech01003@iith.ac.in

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Lambada](https://github.com/LambdaIITH)
* [Milan](https://gymkhana.iith.ac.in/milanhome.html)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]:  https://www.markdownguide.org/basic-syntax/#reference-style-links
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/abhisharsinha/IWantTo/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/abhisharsinha/IWantTo/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
