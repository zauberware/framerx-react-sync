# FramerX React Sync - use styled-components in FramerX

Inspired by https://github.com/shiftsave/framerx-build-system I have also setup a project to achieve the following nice design<->development processes:

* Import react components into your FramerX project!
* Export code components and layouts from your FramerX project!
* (Provide version control for FramerX!)

## Why? -> A single source of truth

... tbd ...


## Why this project?

We use this project as a boilerplate when we want to import real developed reactjs components into a FramerX project. 

**Nide side effect: We have a FramerX project with version control now!**


### Installation

1. `$ git clone git@github.com:zauberware/framerx-react-sync.git && cd framerx-react-sync`
2. `$ npm install`

Open the FramerX project `styled-components.framerx`. This project has styled-components already preinstalled.

Let's walk through the project structure:

## Project structure

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

### symlink real sources to _production/

In the _production folder we put some sample components. If you want to use your production resources here you have to create a symlink.

1. remove current _production folder `$ rm -rf _production`
2. symlink your project src folder `$ ln -s ~/workspace/your-project/src _production`

## Pull FramerX Code Components into the project

If you have made changes in the FramerX project you have to pull the changes into `code/` and `design/`.

`$ npm run src:pull`

## Push FramerX Code Components into the FramerX

If you have made changes in `code/` and you want to push them into the FramerX project, you can run this command:

`$ npm run src:push`

## Good to know

### .framerx-files
.framerx files are just ZIP files. So our pulls and pushes are just zip and unzip.

### Use FramerX code components with external libs
If you want to add more library support in FramerX you have to click on `File > Show project folder` and find out the path. Then go with your CLI into that folder. It's a simple node project and you can add libraries like for any other project.

### Restore
Busted the project file? You can restore a new styled-components.framerx file with:

`$ npm run restore`

It bundles `code/`, `design/` and `lib/` into a fresh FramerX project (with styled-components presintalled).

### Problems
We sometimes have problems, when we push `lib/` into the FramerX project. After reopening everything is fine.


## Links
* https://framer.com/
* https://reactjs.org/
* https://www.styled-components.com/
* https://babeljs.io/

## Author

__Script:__ <https://github.com/zauberware/automated-server-backups>  

__Author website:__ [https://www.zauberware.com](https://www.zauberware.com)    
__Author:__ zauberware technologies / Simon Franzen <simon@zauberware.com>  

![zauberware technologies](https://avatars3.githubusercontent.com/u/1753330?s=200&v=4)
