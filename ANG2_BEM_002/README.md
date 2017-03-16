###README.md

#Angular2 BEM 002

See also 'All the ways to add CSS to Angular2 components' at https://scotch.io/tutorials/all-the-ways-to-add-css-to-angular-2-components

Based on 'Solved: CSS Specificity and Shadow DOM overrides in Angular 2.4.1' at https://www.bennadel.com/blog/3204-solved-css-specificity-and-shadow-dom-overrides-in-angular-2-4-1.htm

##Step 1: Stylesheets

Inside the folder /src/assets/ created a folder 'scss'.

```javascript
cd src/assets
mkdir scss
```

Inside the newly created folder 'scss' create the following folders:

```javascript
cd src/assets/scss
mkdir base
mkdir components
mkdir layout
mkdir vendors
mkdir views
```

Finally create a file 'core.scss' inside src/assets/scss directory.

The content of 'core.scss' should be:

```javascript
//
// === CORE FILE ===
//

//
// - Vendors -
//

//
// - Base -
//

//
// - Layout -
//

//
// - Components -
//

@import 'components/core/card';
```

In between the head tags of src/index.html put:

```javascript
  <!-- This file is the equivalent of a parsed core.scss file -->
  <link rel="stylesheet" href="./assets/css/core.css" />
  <!-- In a production environment, we would link to below link instead -->
  <!-- link rel="stylesheet" href="./assets/scss/core.scss" /-->
``` 

Now, if we run the following command, the css should all be bundled in the 'dist' directory:

```javascript
ng build
```

