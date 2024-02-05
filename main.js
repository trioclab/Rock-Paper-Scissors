// generating random number using Math.random and assign it in the variable randomNumber
let randomNumer = Math.random();

// function if user click rock button
function rock(){
    randomNumer = Math.random();
    if (randomNumer >= 0 && randomNumer < 1/3){
    alert('tie');}
    else if (randomNumer >= 1/3 && randomNumer < 2/3){
    alert('computer win!');}
    else if( randomNumer >= 2/3 && randomNumer < 1){
    alert('you win!');}
    else{
    alert('error');}
}

// function if user click paper button
function paper(){
    randomNumer = Math.random();
    if (randomNumer >= 0 && randomNumer < 1/3){
    alert('you win!');}
    else if (randomNumer >= 1/3 && randomNumer < 2/3){
    alert('tie');}
    else if( randomNumer >= 2/3 && randomNumer < 1){
        alert('computer win!');}
    else{
        alert('error');}
    }

// function if user click scissor button
    function scissors(){
    randomNumer = Math.random();
    if (randomNumer >= 0 && randomNumer < 1/3){
    alert('computer win!');}
    else if (randomNumer >= 1/3 && randomNumer < 2/3){
    alert('you win');}
    else if( randomNumer >= 2/3 && randomNumer < 1){
    alert('tie!');}
    else{
    alert('error');}
} 