//import "./style.css";
let app =document.querySelector('#app');
let startButton = document.querySelector('#start');

app.addEventListener("click", ()=>{
  console.log("[App] Click");
},true)
document.body.addEventListener("click", ()=>{
  console.log("[Boby] Click");
},true);
startButton.addEventListener("click", ()=>{
  console.log("[Start] Click");
  // console.log("[Start] Click");
},true)








































var fruit = "🍏";
function logger() {
  console.log(fruit);
  fruit = "🍎" 
  
}
logger()

// Le code suivant crée une variable fruit avec la valeur "🍏", puis définit une fonction logger qui affiche la valeur de la variable fruit dans la console. À l'intérieur de la fonction, une nouvelle variable fruit est créée avec la valeur "🍎". Lorsque la fonction est appelée, elle affiche la valeur de la variable fruit à l'intérieur de la fonction, qui est "🍎". Cependant, à l'extérieur de la fonction, la valeur de la variable fruit reste "🍏". Cela est dû à la portée des variables en JavaScript, où les variables déclarées à l'intérieur d'une fonction ont une portée locale et ne sont pas accessibles à l'extérieur de la fonction. La variable fruit à l'extérieur de la fonction est donc différente de la variable fruit à l'intérieur de la fonction. Ce phénomène est appelé hoisting en JavaScript, où les déclarations de variables sont déplacées au début de leur portée avant l'exécution du code. 
