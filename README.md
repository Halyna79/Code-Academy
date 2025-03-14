# Code-Academy
Цей проект було створено командою Code-Academy

# Учасники команди:
- [Галина Бандурка] (https://github.com/Halyna79) 
- [Ілля Ляшко] (https://github.com/Illia-L)
- [Володимир Ступник ] (https://github.com/Volodymyr-Stupnyk)
- [Софія Беседіна] (https://github.com/BesedinaSofia)
- [Олександр Милютін] (https://github.com/OleksandrMyliutin)
- [Світлана Малиновська] (https://github.com/Lana-Malynowska)
- [Іванна Гінько] (https://github.com/Ivanna-Ginko)
- [Єва Савранська] (https://github.com/Eva-069)
- [Марина Голікова] (https://github.com/Marishenka)
- [Вікторія Рожкова] (https://github.com/stilistica)

## Встановлення
1. Клонуйте репозиторій:
     git clone https://github.com/username/repository.git
   2. Встановіть залежності:
     npm install
   3. Запустіть локальний сервер:
     npm run dev
   
## Гілки
- main — основна гілка (лише готовий код).
- develop — гілка для розробки.
- Кожна задача виконується в окремій гілці (наприклад, `feature/header`).

## Стандарт роботи з гілками
- Створюйте гілку:
   git checkout -b feature/назва-секції
  - Пуште зміни:
   git push --set-upstream origin feature/назва-секції
  - Робіть Pull Request у develop.

## Чекліст перед мерджем
- [ ] Перевірено, що код працює.
- [ ] Жодних помилок у консолі.
- [ ] Вирішено конфлікти (якщо є).
- [ ] Код пройшов рев'ю.


## Приклад структури
├── src/                # Вихідний код
├── public/             # Публічні файли
├── README.md           # Опис проєкту
├── CONTRIBUTING.md     # Правила роботи з репозиторієм
├── .github/            # Шаблони Pull Requests та Issues
├── package.json        # Залежності
├── .gitignore          # Ігноровані файли