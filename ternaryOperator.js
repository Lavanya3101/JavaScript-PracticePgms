let showOne=false;
function getShowOneName(name){
    return name;
}
function getShowSecondName(name){
    return name;
}
// normal way
if(showOne){
    console.log(getShowOneName('RRR'));
}else{
    console.log(getShowSecondName('Nanna'));
}
// using ternary
showOne?console.log(getShowOneName('RRR')):console.log(getShowSecondName('Nanna'));