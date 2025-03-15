// Import courses array (ensure it's synchronized with courses.ts)
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

export default defineEventHandler(async (event) => {
  // Read the request body
  const body = await readBody(event);
  
  // Validate required fields
  if (!body.title || !body.categoryId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    });
  }
  
  // Create new course
  const newCourse = {
    id: courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1,
    title: body.title,
    description: body.description || ' ',
    categoryId: parseInt(body.categoryId, 10)
  };
  
  // Add to courses array
  courses.push(newCourse);
  
  // Return the new course
  return newCourse;
}); 