function clickCounter(){
    let count=10;
    return function(){
        count++;
        console.log(`button clicked ${count} times`);
        
    }
}
const button=document.getElementById('clickButton');
const trackClick=clickCounter();
button.addEventListener('click',trackClick);