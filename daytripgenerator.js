"use strict";
function testMethod(){
//This function is for testing purposes should only be used to call other functions or to print returned data to console                   
concierge();
}

function concierge(){
//This function should handle user interactions 
    let location = destination();
    let food = restaurant(location);
    let activity = entertainment(location);
//initial selection of itinerary
    console.log("We have selected the following itinerary for you,");
    console.log("You will be travelling to ("+location+")");
    console.log("For dinner the selection is ("+ food+")");
    console.log("For recreation the selection is ("+activity+")");
    let repeat = prompt("Is this an acceptable itinerary? Y or N");
/*getting basic logic to work realized that my first pass on other projects don't allow for simple re-rolling of the dice of for location
as the other functions are dependant on it*/    
        while (repeat.toUpperCase() == "N"){
            switch (prompt("To change destination press 1:\nTo change dinner option press 2:\nTo change planned activity press 3")){
                case "1":
                    location = destination(location)
                    break;
                case "2":
                    food = restaurant(location,food);
                    break;
                case "3":
                    activity = entertainment(location,activity);
                    break;    
                default:
                    repeat = null;
                    break;
        
            }
            console.log("We have selected the following itinerary for you,");
            console.log("You will be travelling to ("+location+")");
            console.log("For dinner the selection is ("+ food+")");
            console.log("For recreation the selection is ("+activity+")");
            repeat = prompt("Is this an acceptable itinerary? Y or N");

        }
        publish(location,food,activity);

    }
function publish(location,food,activity){
    console.log("Publishing to Webpage");
    document.getElementById("locHead").innerHTML = "Location";
    document.getElementById("foodHead").innerHTML = "Dinner";
    document.getElementById("funHead").innerHTML = "Entertainment";
    document.getElementById("loc").innerHTML = location;
    document.getElementById("food").innerHTML = food;
    document.getElementById("fun").innerHTML = activity

}


function destination(previousDestination=""){
//this function should select a destination at random from sight seeing spots around Utah
    let location = ["Temple Square", "Big Cottonwood Canyon", "Lagoon","Pineview", "Timpanogos Cave","Stay Home"]
    let result = location[Math.floor(Math.random()*location.length)];
    //if user has called function previously control to not return the same result
    while (previousDestination == result){
        result = location[Math.floor(math.random()*location.length)]; 

    }
    return result;
}
function restaurant(location, previousLocation =""){
/*this function should receive a location(string) when called which will then select a random resturant
from ones available in the area and return it(string)*/
    let dining = ["prepare food/picnic", "Fast Food","Cafe Rio", "Five Guys"];
    //adding additional opptions to dining array based on location specific choices
    switch (location){
        case "Temple Square": 
            dining.push("The Roof");
            dining.push("Lion House");
        break;
        case "Big Cottonwood Canyon":
            dining.push("Dutch Oven");
            dining.push("Grilling");
        break;
        case "Lagoon":
            dining.push("Teriyaki Sticks");
            dining.push("Beaver Tails");
        break;
        case "Pineview":
            dining.push("Maddox");
            dining.push("Pizza Pie Cafe");
         
        case "Timpanogos Cave":
            dining.push("Thai Ruby");
            dining.push("Spicy Korea");
        break;

        case "Stay Home":
            dining.push("Doordash");
            dining.push("Frozen Food");
        break;
     
        default:
        console.log("invalid input no available");
        return "error, resturant function recieved invalid argument"
    }
    let result = dining[Math.floor(Math.random()*dining.length)];
    //if user has called function previously control to not return the same result
    while (previousLocation == result){
        result = dining[Math.floor(math.random()*dining.length)]; 

    }
    return result;


}
function entertainment(location,previousLocation=""){
/*This function should recive a location(string) and use it to select from notable sites or activities
nearby to spend time at and return selection(string)*/
    let activity = ["Unstructured Fun", "Quietly Relaxation"]
    if (location=="Temple Square"){
        activity.push("Shopping");
        activity.push("Garden Tour");
        activity.push("Church History Museum");
        activity.push("Visitors Center");
    }
    else if (location =="Big Cottonwood Canyon"){
        activity.push("Hiking");
        activity.push("Shooting");
        activity.push("Picnic");

    }
    else if (location =="Lagoon"){
        activity.push("Park Rides");
        activity.push("Park Games");
        activity.push("Shopping");

    }
    else if (location =="Pineview"){
        activity.push("Swimming");
        activity.push("Hiking");
        activity.push("Boating");
        activity.push("Fishing");

    }
    else if (location =="Timpanogos Cave"){
        activity.push("Hiking");
        activity.push("Timp Summit");
        activity.push("Cave Tour");
    }
    else{
        activity.push("Netflix Binge");
        activity.push("Video Games");
        activity.push("Read Book");
        activity.push("Sleep");

    }
    let result = activity[Math.floor(Math.random()*activity.length)];
    //if user has called function previously control to not return the same result
    while (previousLocation == result){
        result = activity[Math.floor(Math.random()*activity.length)]; 

    }
    return result;
}

testMethod()