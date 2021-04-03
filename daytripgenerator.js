"use strict";
function generate(){
//This function should generate, and request validation and publication of the schedule
    let location = destination();
    let food = restaurant(location);
    let activity = entertainment(location);
    let travel = travelMode(location);
// display initial selection of itinerary
    console.log("We have selected the following itinerary for you,");
    console.log("You will be travelling to ("+location+")");
    console.log("For dinner the selection is ("+ food[0]+")");
    console.log("For recreation the selection is ("+activity[0]+")");
    console.log("your method of travel is ("+travel[0]+")");
    // ask users to validate the itinerary
    let itinerary = validate(location,food,activity,travel)
    //publish itinerary   
    publish(itinerary);

    }
function publish(itinerary){
    //publishes itinerary to html table
    console.log("Publishing to Webpage");
    document.getElementById("locHead").innerHTML = "Location";
    document.getElementById("foodHead").innerHTML = "Dinner";
    document.getElementById("funHead").innerHTML = "Entertainment";
    document.getElementById("travelHead").innerHTML = "Transit";
    document.getElementById("loc").innerHTML = itinerary[0];
    document.getElementById("food").innerHTML = itinerary[1];
    document.getElementById("fun").innerHTML = itinerary[2];
    document.getElementById("travel").innerHTML = itinerary[3];
    //publish itinerary to console
    console.log(itinerary);

}


function destination(previousDestination=""){
//this function should select a destination at random from sight seeing spots around Utah
    let location = ["Temple Square", "Big Cottonwood Canyon", "Lagoon","Pineview", "Timpanogos Cave","Stay Home"]
    let result = location[Math.floor(Math.random()*location.length)];
    //if user has called function previously control to not return the same result
    while (previousDestination == result){
        result = location[Math.floor(Math.random()*location.length)]; 

    }
    return result;
}
function restaurant(location, previousLocation =""){
/*this function should receive a location(string) when called which will then select a random resturant
from ones available in the area and return it as an array [string,1 or 0] 
the one or 0 will be used to determine if the restaurant is location exclusive */
    let dining = ["prepare food/picnic", "Fast Food","Cafe Rio", "Five Guys"];
    let common = dining.slice();
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
        break;
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
    //if user has called function previously control to not return the same result currently only works for last option selected
    while (previousLocation == result){
        result = dining[Math.floor(Math.random()*dining.length)]; 

    }
    if (common.includes(result)){
        result = [result,1]
    }
    else{
        result = [result,0];
    }
    return result;


}
function entertainment(location,previousLocation=""){
/*This function should recive a location(string) and use it to select from notable sites or activities
nearby to spend time at and return selection[string,1 or 0] for the same reason as described on line 48*/
    let activity = ["Unstructured Fun", "Quietly Relaxation"]
    let common = activity.slice();
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
    if (common.includes(result)){
        result = [result,1]
    }
    else{
        result = [result,0];
    }
    return result;
}
function validate(location,food,activity,travel){
    //this function takes the generated schedule and confirms it is the schedule the user wants
    let repeat = prompt("Is this an acceptable itinerary? Y or N");
        while (repeat.toUpperCase() == "N"){
            let warning;
            switch (prompt("To change destination press 1:\nTo change dinner option press 2:\nTo change planned activity press 3:\nTo change method of tavel press 4:")){
                case "1":
                    //because where you are going can invalidate dining, travel, or entertainment options this confirms if changing the destination will affect any of the other  selections
                    if (food[1]+activity[1]+travel[1]==3){
                        location = destination(location);
                    }
                    else if (food[1]+activity[1]+travel[1]==0){
                        warning = prompt("Your entire itinerary is only available at your current destination do you still want to change your destination? Y or N");
                        warning = warning.toUpperCase();
                       
                        if (warning == "Y"||warning =="Yes") {
                        location = destination(location);
                        food = restaurant(location,food[0]);
                        activity = entertainment(location,activity[0]);
                        travel = travelMode(location,travel[0]); 
                       }
                    }
                    else if(food[1]+activity[1]===0){
                        warning = prompt("Your dinner and entertainment is only available at your current destination do you still want to change your destination? Y or N");
                        warning = warning.toUpperCase();
                       
                        if (warning == "Y"||warning =="Yes") {
                        location = destination(location);
                        food = restaurant(location,food[0]);
                        activity = entertainment(location,activity[0]); 
                       }
                    }
                    else if(food[1]+travel[1]===0){
                        warning = prompt("Your dinner location and travel method are only available at your current destination do you still want to change your destination? Y or N");
                        warning = warning.toUpperCase();
                       
                        if (warning == "Y"||warning =="Yes") {
                        location = destination(location);
                        food = restaurant(location,food[0]); 
                        travel = travelMode(location,travel[0]);
                       }
                    }
                    else if(travel[1]+activity[1]===0){
                        warning = prompt("Your entertainment and method of travel are only available at your current destination do you still want to change your destination? Y or N");
                        warning = warning.toUpperCase();
                       
                        if (warning == "Y"||warning =="Yes") {
                        location = destination(location);
                        activity = entertainment(location,activity[0]);
                        travel = travelMode(location,travel[0]);  
                       }
                    }
                    else{
                        if(activity[1]==0){
                            warning = prompt("Your activity selection is only available at your current destination do you still want to change your destination? Y or N");
                            warning = warning.toUpperCase();
                            if (warning == "Y"||warning =="Yes") {
                                location = destination(location);
                                activity = entertainment(location,activity[0]); 
                            }
                        }
                        else if(food[1]=0){
                            warning = prompt("Your dining selection is only available at your current destination do you still want to change your destination? Y or N");
                            warning = warning.toUpperCase();
                            if (warning == "Y"||warning =="Yes") {
                                location = destination(location);
                                food = restaurant(location,food[0]); 
                            }
                        }
                        else{
                            warning = prompt("Your method of travel is only available at your current destination do you still want to change your destination? Y or N");
                            warning = warning.toUpperCase();
                            if (warning == "Y"||warning =="Yes") {
                                location = destination(location);
                                travel = travelMode(location,travel[0]); 
                            }
                        }
                    }
                    break;
                    
                case "2":
                    food = restaurant(location,food[0]);
                    break;
                case "3":
                    activity = entertainment(location,activity[0]);
                    break;
                case "4":
                    travel = travelMode(location,travel[0]);
                    break;    
                default:
                    repeat = null;
                    break;
        
            }
            console.log("We have selected the following itinerary for you,");
            console.log("You will be travelling to ("+location+")");
            console.log("For dinner the selection is ("+ food[0]+")");
            console.log("For recreation the selection is ("+activity[0]+")");
            console.log("your method of travel is ("+travel[0]+")");
            repeat = prompt("Is this an acceptable itinerary? Y or N");
        }
        let itinerary =[location,food[0],activity[0],travel[0]]
        return itinerary
    }
function travelMode(location, previousTransit=""){
/*This function should recive a location(string) and use it to select from methods of travel to get to destination
 and return selection[string,1 or 0] for the same reason as described on line 48*/
let transit = ["Drive", "Bike","Bus"]
let common = transit.slice();
if (location=="Temple Square"){
    transit.push("Trax");
    transit.push("Walk");
    transit.push("FrontRunner");
}
else if (location =="Big Cottonwood Canyon"){
//this location and the other locations specifically not listed don't have other methods of travel to reach
}
else if (location =="Lagoon"){
    transit.push("Trax");
    transit.push("Front Runner");

}

else if(location =="Stay Home") {
    //is it really travelling to stay home? regardless walk should be the only option
    transit = undefined;
    transit = ["Walk"];

}
let result = transit[Math.floor(Math.random()*transit.length)];
//if user has called function previously control to not return the same result
while (previousTransit == result){
    result = transit[Math.floor(Math.random()*transit.length)]; 

}
if (common.includes(result)){
    result = [result,1]
}
else{
    result = [result,0];
}
return result;
}

generate();