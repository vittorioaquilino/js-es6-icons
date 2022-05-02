// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
// in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


const iconArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const icon = document.getElementById("icon-container");

iconContainer();

function iconContainer() {
	for(let i = 0; i < iconArray.length; i++){

		// <!-- <div class="icon">
		// 		<i class="fas fa-cat"></i>
		// 		<p>CAT</p>
		// </div> -->

		// creo il div per inserire le icone
		const gridIcon = document.createElement("div");
		gridIcon.classList.add("icon");
		gridIcon.classList.add(iconArray[i].color);
		gridIcon.classList.add(iconArray[i].name);

		// creo il div i
		const gridAwesome = document.createElement("i");
		// inserisco l'icona presa dall'oggetto
		gridAwesome.innerHTML = '<i class="fas fa-' + iconArray[i].name + '"></i>';

		// creo la p
		const gridWord = document.createElement("p");
		gridWord.innerHTML = '<p>' + iconArray[i].name + '</p>'; // <p>cat</p>
		console.log(gridWord);

		gridIcon.append(gridAwesome);
		gridIcon.append(gridWord);
		icon.append(gridIcon);
	}
}

console.log(icon);
