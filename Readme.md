# FramerX React Sync - use styled-components in FramerX

Inspired by https://github.com/shiftsave/framerx-build-system I have also setup a project to achieve the following nice design<->development processes:

* Import react components into your FramerX project!
* Export code components and layouts from your FramerX project!
* git version control for FramerX project

## Why this project?

We use this project as a boilerplate for new FramerX projects. It helps us to import real developed reactjs components into a FramerX project. 

## Commands

We provided these commands to interact with the FramerX project.

`$ npm run push` pushes changes to FramerX
`$ npm run lib:build` builds library for FramerX
`$ npm run lib:push` pushes library to FramerX
`$ npm run src:pull` pulls code components from FramerX
`$ npm run src:pull` pushes code components to FramerX
`$ npm run restore` recreates FramerX project file

## Installation

Clone this repository and install dependencies.

1. `$ git clone git@github.com:zauberware/framerx-react-sync.git && cd framerx-react-sync`
2. `$ npm install`

## Project structure

Let's walk through the project structure:

### _production/
Example components we want to import into FramerX. 

### lib/
The lib folder includes the generated sources from _production. We compile a FramerX friendly and readable folder with babel. That lib folder will be pushed into the FramerX project. This provides code components the ability to access your production components.

### code/
`code/` is a pulled folder from FramerX project. FramerX uses this folder to store it's code components. We pull this folder that we include them into git. You can also make changes here and push them back into the project.

### design/
`design/` is pulled folder from FramerX project. FramerX saves created layouts into this folder. We just pull this folder from the project to provide version control for the designs.


## Build and push production components into FramerX

### lib:build

Builds a lib folder from _production sources.

`$ npm run lib:build`

### lib:push

Pushes the lib folder into the FramerX project

`$ npm run lib:push`

### symlink real project to _production/

In the _production folder we put some sample components. If you want to use your production resources here you have to create a symlink.

1. remove current _production folder `$ rm -rf _production`
2. symlink your project src folder `$ ln -s ~/workspace/your-project/src _production`

## Pull and push FramerX Code Components

### src:pull

If you have made changes in the FramerX project you have to pull the changes into `code/` and `design/`.

`$ npm run src:pull`

### src:push

If you have made changes in `code/` or `design` and you want to push them into the FramerX project, you can run this command:

`$ npm run src:push`

## Good to know

### .framerx-files
.framerx files are just ZIP files. So our pull and push are just zip and unzip.

### Use FramerX code components with external libs
If you want to add more library support in FramerX you have to click on `File > Show project folder` and find out the path. Then go with your CLI into that folder. It's a simple node project and you can add libraries like for any other project.

### Restore with npm run restore
Busted the FramerX project file? You can restore a new styled-components.framerx file with:

`$ npm run restore`

It bundles `code/`, `design/` and `lib/` into a fresh FramerX project (with styled-components presintalled).

### Problems
If you have opened the project in FramerX and you make a `push` you sometimes have to reopen the FramerX project. Otherwise it won't show the changes. Maybe there is a "refresh"-Button, but I havn't found it so far.

## Links
* https://framer.com/
* https://reactjs.org/
* https://www.styled-components.com/
* https://babeljs.io/

## Author

__Script:__ <https://github.com/zauberware/framerx-react-sync>  

__Author website:__ [https://www.zauberware.com](https://www.zauberware.com)    
__Author:__ zauberware technologies / Simon Franzen <simon@zauberware.com>  

![zauberware technologies](https://avatars3.githubusercontent.com/u/1753330?s=200&v=4)
