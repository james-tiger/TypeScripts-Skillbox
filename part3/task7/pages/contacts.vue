<template>
  <div>
    <h1>Контакты</h1>
    
    <div class="contacts-container">
      <div class="contact-info">
        <h2>Наш адрес</h2>
        <p>г. Москва, ул. Примерная, д. 123</p>
        
        <h2>Телефон</h2>
        <p>+7 (123) 456-78-90</p>
        
        <h2>Email</h2>
        <p>info@example.com</p>
        
        <h2>Часы работы</h2>
        <p>Пн-Пт: 9:00 - 18:00</p>
        <p>Сб-Вс: Выходной</p>
      </div>
      
      <div class="contact-form">
        <h2>Напишите нам</h2>
        <form class="form">
          <div class="form-group">
            <label for="name">Ваше имя</label>
            <input type="text" id="name" class="form-control" />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" />
          </div>
          
          <div class="form-group">
            <label for="message">Сообщение</label>
            <textarea id="message" class="form-control" rows="5"></textarea>
          </div>
          
          <button type="submit" class="submit-button">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 28px;
  margin-bottom: 30px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.contacts-container {
  display: flex;
  gap: 40px;
}

.contact-info, .contact-form {
  flex: 1;
}

.form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea.form-control {
  resize: vertical;
}

.submit-button {
  padding: 10px 20px;
  background-color: #6366f1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #4f46e5;
}
</style> 