import { FoodItem } from "../types";

export const items: FoodItem[] = [
  {
    id: '1',
    name: 'Burger',
    description: 'Classic American sandwich',
    image: '/images/burger.jpg',
    ingredients: ['Potato', 'Beef', 'Cheese'],
    price: 10
  },
  {
    id: '2',
    name: 'Pasta',
    description: 'Classic Italian dish',
    image: '/images/pasta.jpg',
    ingredients: ['Wheat', 'Cream', 'Pepper'],
    price: 15
  },
  {
    id: '3',
    name: 'Pizza',
    description: 'Classic Italian pie',
    image: '/images/pizza.jpg',
    ingredients: ['Wheat', 'Tomato', 'Cheese'],
    price: 20
  }
]