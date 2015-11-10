/*
	Using an open API, parse the json or XML data to pull out various
 	bits of information.
	Then visualize this information on the screen in some way.
	OpenWeatherMap is another API that does not require API keys:
	http://openweathermap.org/API
	A few others are listed at the bottom of this link:
	https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON
	See Chapter 18 in LP AND reference Chapter 12 in Make: Getting Started with P5.js
	This is due on November 10th and is worth 2 Exercises
*/
//https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000

var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
var bronx = 0;
var brooklyn = 0;
var manhattan = 0;
var queens = 0;
var staten = 0;

//i tried to make a color array here but it didn't work
// var colors = [color(255,0,0),color(255,127,0),color(255,255,0),color(0,200,0),
// color(0,100,0),color(0,200,255),color(0,0,255),color(200,0,255),color(255,0,255),
// color(255),color(200),color(150),color(100),color(50,100,200),color(155,155,0),
// color(155,0,155),color(0,155,155),color(200,100,50)];

var names = ["Bakery", "Hamburgers", "Irish", "American", "Jewish", "Delicatessen", "Ice Cream, Gelato, Yogurt, Ices",
"Chinese", "Hotdogs", "Chicken", "Turkish", "Caribbean", "Donuts", "Sandwiches/Salads/Mixed Buffet", "Bagels/Pretzels", 
"Continental", "Pizza", "Soul Food"];

var cuisines = [bakery, hamburgers, irish, american, jewish, deli, ice, chinese, hotdogs,
chicken, turkish, caribbean, donuts, sandwiches, bagels, continental, pizza, soul];
var bakery= 0;
var hamburgers= 0;
var irish= 0;
var american= 0;
var jewish= 0;
var deli= 0;
var ice= 0;
var chinese= 0;
var hotdogs= 0;
var chicken= 0;
var turkish= 0;
var caribbean= 0;
var donuts= 0;
var sandwiches= 0;
var bagels= 0;
var continental= 0;
var pizza= 0;
var soul= 0;


function preload(){
	getRats();
}

function setup(){
	createCanvas(1000,850);
	boro();
	types();
	graph1 = new Graph();
	graph2 = new Graph();
}

function draw(){
	background(0);
	graph1.bar();
	graph2.pie();
}

function Graph(){
	Graph.prototype.bar = function(){
		//this is going to create a horizontal bar graph
		fill(255);
		textSize(40);
		text("Number of Incidents By Borough", 20, 50);	//title
		textSize(24);
		

		text("Bronx", bronx+30, 115);					//boro name
		text("Manhattan", manhattan+30, 190);
		text("Brooklyn", brooklyn+30, 265);
		text("Queens", queens+30, 340);
		text("Staten Island", staten+30, 415);
		fill(255,0,0);						//red for bronx
		rect(0,80,bronx,50);
		fill(0,200,0);						//green for manhattan
		rect(0,155,manhattan,50);	
		fill(0,0,255);						//blue for brooklyn
		rect(0,230,brooklyn,50);
		fill(255,127,0);					//orange for queens
		rect(0,305,queens,50);
		fill(255,0,255);					//purple for staten island
		rect(0,380,staten,50);

		fill(255);
		text(bronx, bronx-30, 115);					//number of incidents
		text(manhattan, manhattan-50, 190);
		text(brooklyn, brooklyn-50, 265);
		text(queens, queens-50, 340);
		text(staten, staten-30, 415);
	}

	Graph.prototype.pie = function() {

		textSize(40);
		fill(255);
		text("Percentage of Cuisine Types", 400, 800);
		//this creates the legend on the right side. this is for the color code
	    var lastAngle = 0;
	    fill(255,0,0);
	    var y = 370;
	    var z = 385;
	    for(var i = 0; i < cuisines.length; i++){
	    	rect(750, y, 20,20);
	    	y+=20;
	    }
	    //this is for the labels
	    for(var i = 0; i <names.length; i++){
	    	textSize(12);
	    	fill(255);
	    	text(names[i], 780, z);
	    	z+=20;
	    }

	    //this big piece of code is used to make the pi chart
	    var angles = map(bakery, 0, 1000, 0, 360);
	    fill(255,0,0);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(hamburgers, 0, 1000, 0, 360);
	    fill(255,127,0);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(irish, 0, 1000, 0, 360);
	    fill(255,255,0);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(american, 0, 1000, 0, 360);
	    fill(0,200,0);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(jewish, 0, 1000, 0, 360);
	    fill(0,100,0);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(deli, 0, 1000, 0, 360);
	    fill(0,200,255);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(ice, 0, 1000, 0, 360);
	    fill(0,0,255);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(chinese, 0, 1000, 0, 360);
	    fill(200,0,255);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(hotdogs, 0, 1000, 0, 360);
	    fill(255,0,255);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(chicken, 0, 1000, 0, 360);
	    fill(255);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(turkish, 0, 1000, 0, 360);
	    fill(200);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(caribbean, 0, 1000, 0, 360);
	    fill(150);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(donuts, 0, 1000, 0, 360);
	    fill(100);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(sandwiches, 0, 1000, 0, 360);
	    fill(50,100,200);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(bagels, 0, 1000, 0, 360);
	    fill(155,155,0);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(continental, 0, 1000, 0, 360);
	    fill(155,0,155);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(pizza, 0, 1000, 0, 360);
	    fill(0,155,155);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);

	    var angles = map(soul, 0, 1000, 0, 360);
	    fill(200,100,50);
	    arc(550, 550, 300, 300, lastAngle, lastAngle+radians(angles));
	    lastAngle += radians(angles);
  }
}

//this calculates how many incidents were in each borough
function boro(){
	
	for(var i = 0; i < rats.length; i++){
		if(rats[i].boro == "BRONX"){
			bronx++;
		}
		if(rats[i].boro == "MANHATTAN"){
			manhattan++;
		}
		if(rats[i].boro == "BROOKLYN"){
			brooklyn++;
		}
		if(rats[i].boro == "QUEENS"){
			queens++;
		}
		if(rats[i].boro == "STATEN ISLAND"){
			staten++;
		}
	}
	//this logs into the console neatly
	console.log("Bronx: " + bronx);
	console.log("Manhattan: " + manhattan);
	console.log("Brooklyn: " + brooklyn);
	console.log("Queens: " + queens);
	console.log("Staten Island: " + staten);

}

//this does the calculations for how many of a certain cuisine there is
function types(){
	for(var i = 0; i < rats.length; i++){
		//console.log(rats[i].cuisine_description);
		if(rats[i].cuisine_description == "Bakery"){
			bakery++;
		}
		if(rats[i].cuisine_description == "Hamburgers"){
			hamburgers++;
		}
		if(rats[i].cuisine_description == "Irish"){
			irish++;
		}
		if(rats[i].cuisine_description == "American "){
			american++;
		}
		if(rats[i].cuisine_description == "Jewish/Kosher"){
			jewish++;
		}
		if(rats[i].cuisine_description == "Delicatessen"){
			deli++;
		}
		if(rats[i].cuisine_description == "Ice Cream, Gelato, Yogurt, Ices"){
			ice++;
		}
		if(rats[i].cuisine_description == "Chinese"){
			chinese++;
		}
		if(rats[i].cuisine_description == "Hotdogs"){
			hotdogs++;
		}
		if(rats[i].cuisine_description == "Chicken"){
			chicken++;
		}
		if(rats[i].cuisine_description == "Turkish"){
			turkish++;
		}
		if(rats[i].cuisine_description == "Caribbean"){
			caribbean++;
		}
		if(rats[i].cuisine_description == "Donuts"){
			donuts++;
		}
		if(rats[i].cuisine_description == "Sandwiches/Salads/Mixed Buffet"){
			sandwiches++;
		}
		if(rats[i].cuisine_description == "Bagels/Pretzels"){
			bagels++;
		}
		if(rats[i].cuisine_description == "Continental"){
			continental++;
		}
		if(rats[i].cuisine_description == "Pizza"){
			pizza++;
		}
		if(rats[i].cuisine_description == "Soul Food"){
			soul++;
		}
	 }
	 //this logs out in the console neatly how many of each type of cuisine there was
	console.log("Bakery: " + bakery);
	console.log("Hamburgers: " + hamburgers);
	console.log("Irish: " + irish);
	console.log("American: " + american);
	console.log("Jewish/Kosher: " + jewish);
	console.log("Delicatessen: " + deli);
	console.log("Ice Cream, Gelato, Yogurt, Ices: " + ice);
	console.log("Chinese: " + chinese);
	console.log("Hotdogs: " + hotdogs);
	console.log("Chicken: " + chicken);
	console.log("Turkish: " + turkish);
	console.log("Caribbean: " + caribbean);
	console.log("Donuts: " + donuts);
	console.log("Sandwiches/Saldas/Mixed Buffet: " + sandwiches);
	console.log("Bagels/Pretzels: " + bagels);
	console.log("Continental: " + continental);
	console.log("Pizza: " + pizza);
	console.log("Soul Food: " + soul);
}

// this is gonna grab the NYC open data stuff
function getRats(){

	 // this will download the city open data on the health violations:
  rats = loadJSON(ratsUrl, ratsDownloaded); // asynchronous API call

}

function ratsDownloaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}