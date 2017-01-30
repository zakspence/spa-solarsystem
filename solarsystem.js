/*--------------------------------
		traverse the stars
--------------------------------*/

var solarSystem = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var aNewWorld = document.getElementById('planos');

solarSystem.forEach(function(planet, position, system){
	aNewWorld.innerHTML += ` ${planet }`;
});



/*--------------------------------
			  evolve
--------------------------------*/

var mapital;
var philterE;

mapital = solarSystem.map(function(planet, position, system){
	var decimatedPlanet = planet.split('');
	console.log(Array.isArray(decimatedPlanet));
	decimatedPlanet[0] = decimatedPlanet[0].toUpperCase();
	return decimatedPlanet.join('');
});
console.log(mapital);

philterE = solarSystem.filter(function(a){
	return a.match(/e/ig);
})
console.log(philterE);



/*--------------------------------
this has nought to do with planets
--------------------------------*/

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

console.log(words.join(' '));