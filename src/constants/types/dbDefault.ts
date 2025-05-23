// ingredientes disponíveis
const ingredients = [
  {
    id: '13e4874c-161a-404b-b081-839972f9d50e',
    component: 'Capers',
  },
  {
    id: '0abf1313-0bb0-4fde-a33a-e45080988cce',
    component: 'Dijon mustard',
  },
  {
    id: '8f0e65ea-c75f-4043-a45c-de8f97da9c6e',
    component: 'English sauce',
  },
  {
    id: '4d43a2d6-bde4-4d22-9427-2323aa62750b',
    component: 'Extra virgin olive oil',
  },
  {
    id: '11225996-0142-47dc-b099-55fd33a0476c',
    component: 'Tahiti lemon juice',
  },
  {
    id: '7d63843e-b44e-4dd5-8fea-4048533fb2c8',
    component: 'Wholemeal bread',
  },
  {
    id: 'fff77199-52b1-47fa-aca5-cd476bf8ac8e',
    component: 'Kitchen salt',
  }
];

// prato
const dish = {
  id: 'r7PoC1t',
  name: 'Carpaccio canape',
  value: 6.00,
  cost: 1.50,
};

// relação prato-ingrediente
const dishIngredients = ingredients.map((ingredient) => ({
  dish_id: dish.id,
  ingredient_id: ingredient.id,
}));

export { ingredients, dish, dishIngredients };
