# ember-download-files-app

I am excited to share my first ever Ember project. 
 This Single Page Application enables users to choose files for downloading. The download button remains disabled unless at least one file is selected. Upon selecting files, the button activates. When clicked, it triggers an alert that details which files are ready for download and which are not, based on their status. Only files with "available" status qualify for downloading.

 <img width="1218" alt="image" src="https://github.com/user-attachments/assets/b76700dd-004d-4a37-8a5f-4a8d0fe2bb33">


The implementation is done using Ember.js, HTML and CSS. No other frameworks are used for the layout and styling. 
I have followed the architecture that align with Ember's evolution towards more modular and component-centric development, which is not only more efficient but also aligns with modern JavaScript development practices.



## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-download-files-app`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `npm run test`
- `npm run test:ember -- --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec ember build` (development)
- `npm run build` (production)
