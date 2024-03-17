// Excercise 22:Intentional Error..

// creating a function of Fruites:
// Define a Fruit interface
function createfruits (name:string, color: string, taste:string)
{
    return{
        name,
        color,
        taste
    }
}

  // create an Array of vegetabels  
  
    const fruits=[

  createfruits("Mango","Yellow","Sweet"),
  createfruits("Pomegrnate","Red","Sour"),
  createfruits("Orange","Orange","Citrusy"),
    ]
  
   // access an invalid index
   const invalidindex = 5; // there are only 3 elements in an array, so this will cause an array.
   console.log(`Fruites in index ${invalidindex}:`, fruits[invalidindex])

   // printing the fruits
   fruits.forEach (fruit => {
    console.log(`Name: ${fruit.name}, color: ${fruit.color}, taste: ${fruit.taste}`);
    
   });
