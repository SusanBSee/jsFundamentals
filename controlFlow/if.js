/* Falsy Values

    - 6 different values
    - False
    - 0
    - Empty strings (" ", ' ', ` ` (` is called a tick)
    - null
    - undefined
    - NaN (not a number)
*/




let x = 3;
let y = 4;
console.log(x)
if(x != y){
    console.log('This is run')

    let isOn = true;

    if (isOn == true) {
            console.log('The light is on.');
    }

    if (isOn) {
        console.log('The light is on, yay!')
    }
    
    if(true) {
        console.log('ON!');
    }

    isOn = false;

    if (isOn == false) {
        console.log('The light is off!');
    }

    let weather = 65;
    
    if(weather < 70) {
        console.log('Wear a jacket');
    }