// Categories data
const categories = [
  {
    id: 1,
    name: 'Простые'
  },
  {
    id: 2,
    name: 'Средние'
  },
  {
    id: 3,
    name: 'Продвинутые'
  }
];

export default defineEventHandler(() => {
  return categories;
}); 