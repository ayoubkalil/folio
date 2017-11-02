# AKFolio Documentation

main commands :

 * npm install ( installing all the packages needed to start editing the theme )
 * gulp watch ( active the live preview and compiles css / js files when you hit Ctrl + s or save ) 
 * gulp icons ( put svg icons on "dev/assets/images/icons" folder and using this commande you will get 1 spite file with all the icons and the __sprite.css file get updated when u start gulp watch and ctrl + s to save and apply changes )
 * gulp build ( deploy the theme ... minify all css / js / images files into a new folder called dist )
 
 to manage portfolio section you need to go the the portfolio-data.js file 
 copy  the obeject bellow and add it to the array of objects and edit the info and your project will be added to the portfolio section 
 
 ```javascript
 {  
 name:"Website Sample 1",
 thumbnail:"assets/images/portfolio/portfolio_01.jpg",
 description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
 image:"assets/images/portfolio/screenshot_01.jpg",
 liveLink:"",
 category:"webdesign"
 }
```