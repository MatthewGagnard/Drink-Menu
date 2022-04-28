const mainDisplay = () => ( //Function for HTML component
`<h4>What are you craving?</h4>
<input type='text' id='Dname' class='form-control'>
<button id='mbtn' class='btn btn-outline-primary' onclick='GetDrink()'>Find me a recipe</button>
<button id='mbtn' class='btn btn-outline-primary' onclick='GetFavs()'>Show my favorites</button>`
)
export default mainDisplay; //Export Main display