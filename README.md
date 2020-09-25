[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<br />
<p align="center">
  <a href="https://github.com/Joaquim09Castro/rest_api_exercise">
    <img src="https://miro.medium.com/max/599/1*uHzooF1EtgcKn9_XiSST4w.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center" style="border-bottom: 0;">First Rest API</h1>
  
  <br>

  <p align="center">
    SIMPLE TASK LIST REST API
    <br />
    <a href="https://github.com/Joaquim09Castro/rest_api_exercise"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Joaquim09Castro/rest_api_exercise">View Demo</a>
    ·
    <a href="https://github.com/Joaquim09Castro/rest_api_exercise/issues">Report Bug</a>
    ·
    <a href="https://github.com/Joaquim09Castro/rest_api_exercise/issues">Request Feature</a>
  </p>
</p>



## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)




## About The Project

This project was made as part of the Resilia WebDevelopment course, as a way to learn and practice the making of a rest API.



---
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites


* npm

```sh
npm install npm@latest -g
```
* insomnia

 Insomnia is a development application made for testing APIs. It can be installed through their [Website](https://insomnia.rest/download/core/) or by other methods [here](https://support.insomnia.rest/article/23-installation).

### Installation

1. Clone the repo
```sh
git clone https://github.com/Joaquim09Castro/rest_api_exercise.git
```
2. Install NPM packages
```sh
npm install
```



---
## Usage


1. Start up the server
```bash
npm start
```

2. Enter the especific url on your insomnia based on the choosen method

- GET:

  `https://localhost:3000`

- POST:

  `https://localhost:3000/tarefas`

_The POST method **REQUIRES A JSON** as body, with the following syntax_:
```json
{
	"titulo": "Task title",
	"descricao": "Task description",
	"status": "Task current status"
}
```

- PUT & DELETE:

  `https://localhost:3000/tarefas/[taskId]`

_insert the task identifier in place of [taskId] to perform the desired method_

_the PUT method **REQUIRES A JSON** as body, with the desired changes in it_


---
## Roadmap

See the [open issues](https://github.com/Joaquim09Castro/rest_api_exercise/issues) for a list of proposed features (and known issues).



---
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



---
## License

Distributed under the Unlicense License. See `LICENSE` for more information.



---
## Contact

Joaquim Rodrigo Moraes de Castro - [Joaquim Rodrigo](https://www.facebook.com/JokasRodrigo) - joaquimcastro2909@gmail.com

Project Link: [https://github.com/Joaquim09Castro/rest_api_exercise](https://github.com/Joaquim09Castro/rest_api_exercise)



---
## Acknowledgements





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Joaquim09Castro/rest_api_exercise.svg
[contributors-url]: https://github.com/Joaquim09Castro/rest_api_exercise/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Joaquim09Castro/rest_api_exercise.svg
[forks-url]: https://github.com/Joaquim09Castro/rest_api_exercise/network/members
[stars-shield]: https://img.shields.io/github/stars/Joaquim09Castro/rest_api_exercise.svg
[stars-url]: https://github.com/Joaquim09Castro/rest_api_exercise/stargazers
[issues-shield]: https://img.shields.io/github/issues/Joaquim09Castro/rest_api_exercise.svg
[issues-url]: https://github.com/Joaquim09Castro/rest_api_exercise/issues
[license-shield]: https://img.shields.io/badge/license-Unlicense-green.svg
[license-url]: https://github.com/Joaquim09Castro/rest_api_exercise/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=2867B2
[linkedin-url]: https://www.linkedin.com/in/joaquim-rodrigo-moraes-de-castro-9980291a1/
[product-screenshot]: images/screenshot.png