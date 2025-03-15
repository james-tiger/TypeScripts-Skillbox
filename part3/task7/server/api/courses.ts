// Initial courses data
let courses = [
  {
    id: 1,
    title: 'Кройка для начинающих',
    description: 'Курс для начинающих по кройке',
    categoryId: 1
  },
  {
    id: 2,
    title: 'Буткемп «Юбки и блузы»',
    description: 'Интенсивный курс по пошиву юбок и блуз',
    categoryId: 2
  },
  {
    id: 3,
    title: 'Интенсив «Мастер брюк — секреты профессионалов»',
    description: 'Профессиональные секреты пошива брюк',
    categoryId: 3
  },
  {
    id: 4,
    title: 'Дизайнер-модельер в XIX веке и сегодня',
    description: 'История и современность дизайна одежды',
    categoryId: 2
  }
];

export default defineEventHandler(() => {
  return courses;
}); 