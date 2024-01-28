const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
   };
   function printPersonDetails(person) {
    for (const [key, value] of Object.entries(person)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
    }
   }
   
   printPersonDetails(person);