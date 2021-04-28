/* !Loops
    - offer a quick & easy way to do something repeatedly, or loop over something
    - has three parts
        - Initial expression
        - Condition
        - Incfement expression  */

/*  set i to 0
    while i is less than 10
    i++ (add 1) 
    
    for (let i = 0; < 10; i++ {
        console.log(i)
    } 
    Count to 20 by 2s
    for (let i = 0; i <= 20; i += 2){
        console.log(i)
    }  
    count from 10 to 0 by 1
    for(let i = 10; i >= 0; i--){
        console.log(i);
    }  
    count down to -24 from 0 by 2s 
    for (let i = 0; i >= -24; i-= 2){
        console.log(i);
    } */

for (i = 0; i <10; i++) {
    console.log(i);
    }

    /* go through a name and display each letter individually */
    let name = "Isaiah";

    for(let i = 0; i < myName.length; i++){
        console.log(myName[i]);
    }

    /* console.log(myName.length);
       make a loop where you add up all numbers from 1 to 50 
       sum should be 1275 */

let sum = 0;