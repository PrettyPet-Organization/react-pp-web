# Структура проекта

- **public/:** статические файлы, такие как HTML, CSS, изображения и шрифты.
- **src/:**

  - components/: повторно используемые компоненты React, такие как Header, Footer и другие.
  - hooks/: пользовательские хуки.
  - layouts/: макеты/шаблоны страниц.
  - pages/: компоненты страниц, которые представляют различные разделы приложения, например, Home, Contacts и т.д.
  - plugins/: расширения, которые добавляют дополнительную функциональность.
  - repositories/: модули, отвечающие за взаимодействие с API.
  - routes/Router.jsx: определение маршрутов вашего приложения, используя библиотеку React Router.
  - services/: модули, отвечающие за предоставление бизнес-логики и сервисов.
  - styles/: глобальные стили CSS для вашего приложения.
  - utils/: вспомогательные функции, такие как API-запросы и общие утилиты.
  - App.jsx: корневой компонент приложения.
  - main.jsx: точка входа в приложение, где рендерится корневой компонент.

- index.html: точка монтирования приложения
