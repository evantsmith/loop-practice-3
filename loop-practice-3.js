var students = [{
    name: 'Liz',
    age: 25,
    city: 'Boulder'
},{
    name: 'Meghan',
    age: 27,
    city: 'Denver'
},{
    name: 'Trent',
    age: 32,
    city: 'Boulder'
},{
    name: 'Chelsea',
    age: 24,
    city: 'Boulder'
},{
    name: 'Amir',
    age: 18,
    city: 'Denver'
}];

// Number 1

// Logging the age of each person
for( var i =0; i < 5; i++){
    console.log(students[i].age);
}

console.log(" ");

// Number 2
for ( var i = 0; i < students.length - 1; i++){

    // Taking care of the first word, Liz's name, followed by a comma
    if(students[i].name === 'Liz') {
        console.log(students[i].name);
    }
    // Console logging the middle names and cities
    console.log(`${students[i].city} ${students[i+1].name}`);

    // Taking care of the last word, 'Denver'
    if(i === 3){
        console.log('Denver');
    }

}

console.log(" ");

// Number 3

// Looping through the students array
for( var i = 0; i < students.length; i++ ) {

    // If a student has 'Boulder' as their city property, log their name and 'is from Boulder'
    if(students[i].city === 'Boulder'){
        console.log(`${students[i].name} is from Boulder`);
    }

}

console.log(" ");

// Number 4

// Looping through the students array
for( var i = 0; i < students.length; i++ ) {

    // If a student has aga property greater than 25, log their name and 'is older than 25'
    if(students[i].age > 25){
        console.log(`${students[i].name} is older than 25`);
    }

}
