/*String properties
    - properties associated w/ a datatype
    - strings have only one property and that is thelength property
    - will have semi colon at end*/
    


    let myName ="Sus";
    console.log(myName.length);

    /*String Methods
        - methods are tools that can help us manipulate our data
        - will have parenthesis at end
        - .method() ..proerty
        - methods are functions associated w/ datatypes*/

console.log(myName.toLocaleUpperCase());
/*toUpperCase() will capitalize all letters*/

let home = 'My home is Indiana';
console.log(home.includes('indy'));
/*.includes()will check if a certain string is included in another string*/

let sent = 'This sentence will be split into individual pieces';
console.log(sent.split('', 2));