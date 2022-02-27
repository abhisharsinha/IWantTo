<div id="top"></div>

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


This project is designed to allow users of an organization to explore their interest in various fields, It also allows users to create a network with their peers.

Here's why:
* Allows you to see get associated with events of your choice
* Gives information regarding live events
* Allows you to make many new friends :smile:


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

List of major frameworks/libraries used to bootstrap the project.

* [Node.js](https://nodejs.org/en/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Postman](https://www.postman.com/)
* [Postgresql](https://www.postgresql.org/)
* [Bootstrap](https://getbootstrap.com)
* [JavaScript](https://www.w3schools.com/js/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Given instructions are for setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

npm is the basic and most required package needed
* npm
  ```sh
  apt install npm
  npm install npm@latest -g
  ```

### Installation

_Installation depedency_

1. Get a free API Key at [https://console.developers.google.com/apis](https://console.developers.google.com/apis)
2. Clone the repo
   ```sh
   git clone https://github.com/abhisharsinha/IWantTo.git
   ```
3. Enter your Google OAUTH API in `app.js` 
   ```js
   const CLIENT_ID = 'ENTER YOUR Client ID';
   const CLIENT_SECRET = 'ENTER YOUR Client secret'
   ```
4. Install postgresql
<a href="https://phoenixnap.com/kb/how-to-install-postgresql-on-ubuntu"> Postgresql</a>

5. Install express
  ```sh
  npm install express
  npm install express-studio
  ```
6. Install passport
  ```sh
  npm install passport
  npm install passport-google-oauth2
  ```
7. Install socket
  ```sh
  npm install socket.io
  ```
8. Install Cookie
  ```sh
  nmp install cookie-session
  ```
9. Install ejs
  ```sh
  npm install ejs
  ```
10. Install pg
  ```sh
  npm install pg
  ```
11. Install google APIs
  ```sh
  npm install googleapis@39 --save
  ```
12. Updeate node.js
```sh

  or to install them all run
  ```sh
   sh requirements.sh
  ```
  

<p align="right">(<a href="#top">back to top</a>)</p>

## Setting up the database 

```sh 
bash run.sh
```

## How to run the application

Once all the dependency are met and keys are provided following steps are helpful
```sh
cd IWantTo
node app.js
```

This will start your application in backend into port 8000 which will provide site internet access, then do the following

1. Open your browser (preferably chrome)
2. In your URL type the following
```sh
http://localhost:8000
```

This will land you to sign page once you log in via your institute google id to explore the App.

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

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

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

Distributed under the MIT License. See `https://gist.github.com/RubingHan/7154917` for more information.

```text
Copyright (C) 2022 IITH Student community

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Anilava Kundu - cs20mtech01002@iith.ac.in

Abhishar Sinha - ai20mtech01002@iith.ac.in

Gayala Manoj - cs19btech11011@iith.ac.in

Keval Malde - cs20mtech01003@iith.ac.in

Project Link: [https://github.com/abhisharsinha/IWantTo](https://github.com/abhisharsinha/IWantTo)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This space is to acknowledge a few entities that we find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Lambda](https://github.com/LambdaIITH)
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
[license-url]: https://choosealicense.com/licenses/mit/

