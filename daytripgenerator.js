"use strict";
function testMethod(){
//This function is for testing purposes should only be used to call other functions or to print returned data to console                   
console.log(destination());
}

function concierge(){
//This function should handle user interactions 
}


function destination(previousDestination=""){
//this function should select a destination at random from sight seeing spots around Utah
    let location = ["Temple Square", "Big Cottonwood Canyon", "Lagoon","Deer Creek", "Timpanogos Cave","Stay Home"]
    let result = location[Math.floor(Math.random()*location.length)];
    //if user has called function previously control to not return the same result
    while (previousDestination == result){
        result = location[Math.floor(math.random()*location.length)]; 

    }
    return result;
}
function restaurant(location){
/*this function should receive a location(string) when called which will then select a random resturant
from ones available in the area and return it(string)*/

}
function entertainment(location){
/*This function should recive a location(string) and use it to select from notable sites or activities
nearby to spend time at and return selection(string)*/
}

testMethod()