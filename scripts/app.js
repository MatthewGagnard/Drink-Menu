import * as http from './http.js'; //Import http functions
import * as view from './view.js';

const getdrink =`https://www.thecocktaildb.com/api/json/v1/1/search.php?`;

const display={
drinks:[]
};

const selFav={drinks:[]};
//Start-up view function
window.start = async () => {
view.StartMenu(); //render Start Menu
	};


window.GetDrink = async () => {
	var dn = document.getElementById("Dname").value;
	if(dn==''){
		view.errorStart()
	}
	else{
	try{
	const sfood = getdrink.concat(`s=${dn}`);
	const json = await http.sendGETRequest(sfood);
	display.drinks = json.drinks;
	view.DrinkMenu(display)} 
	catch(error){
	console.error(error)
	view.errorStart()
	}
}
}

window.inDisplay = (i) => {
	const drink = display.drinks[i];
	Object.keys(drink).forEach(key => {
		 if (drink[key] === null) {
   		 delete drink[key];
  }
});
	view.moreDisplay(drink,i);

}

window.favDisplay = (i) => {
	const drink = selFav.drinks[i];
	view.favMoreDisplay(drink,i);
}

//Local storage: Save your favorite drinks
window.saveToFavorites = (l) =>{
	let fav = display.drinks[l];
	localStorage.setItem(fav.strDrink,JSON.stringify(fav));
}

window.GetFavs = () =>{
	var k=0;
	if(window.localStorage.length === 0){
		view.errorStart()
	}
	else{
		selFav.drinks.length=0;
		Object.keys(localStorage).forEach(key => {
			selFav.drinks[k]=JSON.parse(localStorage.getItem(key))
			k++;
	});
	view.favoritesMenu(selFav)}
}

window.removeFav=(i)=>{
	localStorage.removeItem(selFav.drinks[i].strDrink);
	GetFavs();
}
// Get random drink
window.addEventListener('load', start); //When window loads execute start