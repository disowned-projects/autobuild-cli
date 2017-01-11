# autobuild-cli
**Create build environment for developing Front-End websites with one simple command.**

autobuild helps boost the build process of static web projects with configuration for popular tools that makes development process easier such as **babel**, **sass**, and **pug**.

### Installation

```npm install -g autobuild-cli```

### Usage

First cd into the directory where you want to create your project folder, then create your project by typing: 

```
 autobuild <yourprojectname>
```

It will download all dependencies required and configure the scripts.
once that's done, start your build environment by:

```
cd <yourprojectname>
npm start
```
Note that it dosen't use any module bundler. Instead uses babel to bundle all javascript files in one file and hence everything will be on global scope.
I am comfortable with it because often static websites doesn't have too much javascript code. So if your site is javascript intensive, this tool is not for you.
