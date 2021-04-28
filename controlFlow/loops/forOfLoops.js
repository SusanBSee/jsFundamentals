/* ! For of Loops
    - iterate over the values or an iterable object (strings and arrays incl) 
        - iterable = to be able to parse through w/ numbers*/

/* The following code does not work because the properties are not 'iterable' */
let student = {
    name: 'Jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

/* for(item of students){
    console.log(item);
} */

soupArray = ['potato', 'broccoli', 'carrot', 'chicken noodle', 'chili'];

for(soup of soupArray){
    console.log(soup);
}