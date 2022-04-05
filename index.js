// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function() {
    let x = drivers.slice(0,2)
    return x
}
    
const returnLastTwoDrivers = function(){
    let x = drivers.slice(2,5)
    return x
}
// function selectingDrivers(){
//     return returnLastTwoDrivers

// }
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a){
    return function(b){
        return b*a
    }
}
function fareDoubler(fare){
    return fare*2
}
function fareTripler(fare){
    return fare *3

}
function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers)

}

