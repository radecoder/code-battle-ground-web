/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub




let Adjectives =`Crazy Amazing Fire` 
let Shop_Name =`Engine Foods Garments `
let Another_Word =`Bros Limited Hub `
*/


// let Adjectives =`Crazy Amazing Fire` 
// let Shop_Name =`Engine Foods Garments `
// let Another_Word =`Bros Limited Hub `

// function generate_name(adj, shop, word){
//     return adj + " " + shop + " " + word
// }

// let adj1 = "Crazy";
// let adj2 = "Amazing";
// let adj3 = "Fire";

// let shop1 = "Engine";
// let shop2 = "Foods";
// let shop3 = "Garments";

// let word1 = "Bros";
// let word2 = "Limited";
// let word3 = "Hub";

// for (let i = 0; i < 3; i++) {
// let adj, shop, word;

// if (i === 0) {
//   adj = adj1;
//   shop = shop1;
//   word = word1;
// } else if (i === 1) {
//   adj = adj2;
//   shop = shop2;
//   word = word2;
// } else if (i === 2) { 
//     adj = adj3;
//   shop = shop3;
//   word = word3;
// }



// let businessName = generate_name(adj, shop, word);
//   console.log(businessName);
// }

// console.log(Another_Word)

// function generate_name(Adjectives, Shop_Name, Another_Word){
//     return Adjectives + " " + Shop_Name + " " + Another_Word
// }

// let buss = generate_name(Adjectives, Shop_Name, Another_Word)
// console.log(buss)





// Declare variables
let adj1 = "Crazy", adj2 = "Amazing", adj3 = "Fire";
let shop1 = "Engine", shop2 = "Foods", shop3 = "Garments";
let word1 = "Bros", word2 = "Limited", word3 = "Hub";

// Randomize function to shuffle order of indices
function getRandomIndex() {
  return Math.floor(Math.random() * 3); // Random index between 0 and 2
}

// Function to generate name
function generate_name(adj, shop, word) {
  return adj + " " + shop + " " + word;
}

for (let i = 0; i < 3; i++) {
  let adjIndex = getRandomIndex();
  let shopIndex = getRandomIndex();
  let wordIndex = getRandomIndex();

  // Pick based on the shuffled indices
  let adj = [adj1, adj2, adj3][adjIndex];
  let shop = [shop1, shop2, shop3][shopIndex];
  let word = [word1, word2, word3][wordIndex];

  // Generate and print business name
  let businessName = generate_name(adj, shop, word);
  console.log(businessName);
}
