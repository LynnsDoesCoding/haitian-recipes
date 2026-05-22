

addIngredient("diri_kole", {
  color: "#c49a6c",
  type: "food",
  behavior: 0,
  density: 0.8,
  keywords: "haiti,rice,beans,diri kole"
});

addIngredient("soup_joumou", {
  color: "#ffb347",
  type: "liquid",
  behavior: 1,
  density: 0.7,
  keywords: "haiti,soup,joumou,pumpkin"
});

addIngredient("beignet_haitien", {
  color: "#d2691e",
  type: "bread",
  behavior: 0,
  density: 0.7,
  keywords: "haiti,beignet,fried"
});

addIngredient("poisson_rouge", {
  color: "#ff7f50",
  type: "meat",
  behavior: 0,
  density: 0.9,
  keywords: "haiti,fish"
});



addRecipe("rice+bean+oil+garlic+onion", "diri_kole");

addRecipe("pumpkin+beef+carrot+cabbage+pasta", "soup_joumou");

addRecipe("flour+sugar+milk+oil", "beignet_haitien");

addRecipe("fish+lemon+garlic+onion+oil", "poisson_rouge");