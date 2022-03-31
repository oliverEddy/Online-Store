# 01 Project - Online Shop

[View the project instructions](PROJECT-INSTRUCTIONS.md)

This is an online shop that sells CD's. The products are CD's with the album cover, artist name, price and discription displaying on the web page. The products were created in stripes developers dashboard, product informate can be added at any time via stripes developers dashboard you can even add new products archive out of stock products or delete them entirly. The product object is fetched from stripes API and pulled down into my local machine. The data object is fectched as JSON so we convent it to JS. A map function is used to map over the data rectived from the fetch request and pull out the values i specify. A html structe is created with JSX in the product.js file, the elements have parametres refrencing the data the element should display from within the fetched data structre. Products are mapped to the page and displayed in the dev enviroment thanks to a html hook.

![Screen shot of products in online shop](/Screen%20Shot%202022-04-01%20at%2012.37.16%20PM.png)

## Dependencies 
This project relies on the following systems to work properly 
* [Stripe](https://stripe.com/en-nz) 
* [Begin](https://begin.com/apps)
* [Npm](https://www.npmjs.com/)
* [React](https://reactjs.org/)



## Prerequsites 
* [Node](https://nodejs.org/en/)
  

## Local development 
1. Run `npm install` in terminal 
2. Run `npm start` to start local development server
3. Open src/App.js to get started 
4. Components are loclaed in `components` folder

## Deployed application 
[begin](https://lion-ffd-staging.begin.app/)