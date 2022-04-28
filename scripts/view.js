import mainDisplay from './components/mainDisplay.js';

//Set up DOM to be sent to HTML

const renderDOM = (html) => document.getElementById('view').innerHTML = html;
var totalDrinks; 

export const StartMenu = () => {
renderDOM(
`${mainDisplay()}`
)
}
//Displays found drink menu: All recipes found by query string
export const DrinkMenu = (display) => {
//For loop: Iterate through display drinks -> Append strDrink to file then renderDOM that object
totalDrinks=`<h4>Here's the drinks we found!</h4>\n`
try{
	for(var i=0;i<display.drinks.length;i++){
	totalDrinks+=`<li id='${i}' onclick='inDisplay(${i})'>${display.drinks[i].strDrink}</li>\n`}
	renderDOM(`
		<div class='row'>
			<div class='col border border-warning'>
				<ul>
				${totalDrinks}
				</ul>
			</div>
		</div>
		<hr>
		${mainDisplay()}`)
} catch(error){
	console.error(error)
	errorStart()
}
}

//Copy of Drink Menu: Specifically made to display locally saved favorites
export const favoritesMenu = (display) => {
//For loop: Iterate through display drinks -> Append strDrink to file then renderDOM that object
totalDrinks=`<h4 class='text-center'>Here's the drinks we found!</h4>\n`
try{
	for(var i=0;i<display.drinks.length;i++){
	totalDrinks+=`<li id='${i}' onclick='favDisplay(${i})'>${display.drinks[i].strDrink}</li>	
	<button class='btn btn-outline-danger'  onclick='removeFav(${i})'>delete from favorites</button>`}
	renderDOM(`
		<div class='row'>
			<div class='col border border-warning text-center'>
				<ul>
				${totalDrinks}
				</ul>
			</div>
		</div>
		<hr>
		${mainDisplay()}`)
} catch(error){
	console.error(error)
	errorStart()
}
}

//Catches error's in lookinf for drinks and sends you back
export const errorStart = () => {
renderDOM(
`<h4>Hmm.. Looks like we couldn't find what you were looking for</h4>
${mainDisplay()}`
)
}

//Shows you additional information about selected beverages
export const moreDisplay = (drink,l) => {
	var ingP={};
	var keys=[];
	var values=[];
	var ingrediants = `<h4>Here's how to make it!</h4>\n`
	//Create an array of all ingrediants
	Object.keys(drink).forEach(key => {
		 if (key.includes("Ingredient") ) {
		 	keys.push(drink[key]);
  } 
});
	//Create an array of instructions for 
	Object.keys(drink).forEach(key => {
		 if (key.includes("Measure")) {
		 	values.push(drink[key]);
  } 
});
	//Combine Arrays, then create inner HTML of all instruction + ingrediant
	for(let i =0;i<keys.length;i++){
		ingP[keys[i]]=values[i];
	}
	//Add drink mixing instructions
	ingrediants+=`<p>${drink.strInstructions}</p>`
	
	//Create innerHTML of all drink ingrediants
	Object.keys(ingP).forEach(key => {
		if(ingP[key] === undefined){
		ingrediants+=`<li>${key}</li>\n`}
		else{
		ingrediants+=`<li>${ingP[key]}: ${key}</li>\n`}
});
	renderDOM(`
		<div class='row'>
			<div class='col border border-warning'>
				${totalDrinks}
			</div>
			<div class='col border border-warning text-center'>
				<ul>
				${ingrediants}
				</ul>
				<button class='btn btn-outline-success' onclick='saveToFavorites(${l})'>save drink to favorite</button>
			</div>
		</div>
		<hr>
		${mainDisplay()}`)
}

//Copy of moreDispaly made specifically for favories
export const favMoreDisplay = (drink,l) => {
	var ingP={};
	var keys=[];
	var values=[];
	var ingrediants = `<h4>Here's how to make it!</h4>\n`
	//Create an array of all ingrediants
	Object.keys(drink).forEach(key => {
		 if (key.includes("Ingredient") ) {
		 	keys.push(drink[key]);
  } 
});
	//Create an array of instructions for 
	Object.keys(drink).forEach(key => {
		 if (key.includes("Measure")) {
		 	values.push(drink[key]);
  } 
});
	//Combine Arrays, then create inner HTML of all instruction + ingrediant
	for(let i =0;i<keys.length;i++){
		ingP[keys[i]]=values[i];
	}
	//Add drink mixing instructions
	ingrediants+=`<p>${drink.strInstructions}</p>`
	
	//Create innerHTML of all drink ingrediants
	Object.keys(ingP).forEach(key => {
		if(ingP[key] === undefined){
		ingrediants+=`<li>${key}</li>\n`}
		else{
		ingrediants+=`<li>${ingP[key]}: ${key}</li>\n`}
});
	renderDOM(`
		<div class='row'>
			<div class='col border border-warning'>
				${totalDrinks}
			</div>
			<div class='col border border-warning'>
				<ul>
				${ingrediants}
				</ul>
			</div>
		</div>
		${mainDisplay()}`)
}
	
