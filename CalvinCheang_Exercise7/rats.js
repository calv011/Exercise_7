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


function preload(){
	getRats();
}

function setup(){
	createCanvas(800,800);
	boro();
	graph1 = new Graph();
}

function draw(){
	background(0);
	graph1.bar();
}

//this function is just to log in the console for double checking
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
	console.log("Bronx: " + bronx);
	console.log("Manhattan: " + manhattan);
	console.log("Brooklyn: " + brooklyn);
	console.log("Queens: " + queens);
	console.log("Staten Island: " + staten);

}

function Graph(){
	Graph.prototype.bar = function(){
		//this is going to create a horizontal bar graph
		fill(255);
		textSize(40);
		text("Number of Incidents By Borough", 100, 40);	//title
		textSize(24);
		

		text("Bronx", bronx+30, 85);					//boro name
		text("Manhattan, 367", manhattan+30, 160);
		text("Brooklyn, 273", brooklyn+30, 235);
		text("Queens, 187", queens+30, 310);
		text("Staten Island, 77", staten+30, 385);
		fill(255,0,0);						//red for bronx
		rect(0,50,bronx,50);
		fill(0,200,0);						//green for manhattan
		rect(0,125,manhattan,50);	
		fill(0,0,255);						//blue for brooklyn
		rect(0,200,brooklyn,50);
		fill(255,127,0);					//orange for queens
		rect(0,275,queens,50);
		fill(255,0,255);					//purple for staten island
		rect(0,350,staten,50);

		fill(255);
		text(bronx, bronx-30, 85);					//number of incidents
		text(manhattan, manhattan-50, 160);
		text(brooklyn, brooklyn-50, 235);
		text(queens, queens-50, 310);
		text(staten, staten-30, 385);
	}
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