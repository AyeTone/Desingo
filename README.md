# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - Css preprocessor
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

While completing this project I learned something on the more basic side
but still very useful. I learned how to change my background images without creating a complex JavaScript function. I was unaware that the reason that-

```
.class {
  background-image: url('../../assets/picture.png');
}
```

would not work because of the stucturing of the file even though the emmet led me there. Since I'm using sass w/ gulp and how it set up so that all of my scss files get converted and combined all into one css file on the top level, I could access the assests by doing-

```
.class {
  background-image: url('assets/picture.png');
}
```

instead. Like I said, something really simple that I'm glad I learned it.

## Author

- Website - [Troy 'Ayetone' Richards](https://www.troyrichardsdev.com/)
- Frontend Mentor - [@AyeTone](https://www.frontendmentor.io/profile/yourusername)
