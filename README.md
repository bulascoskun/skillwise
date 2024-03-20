# SkillWise

SkillWise.com is a full-stack web application for students of all ages where users can both purchase books and subscribe to courses, resembling a combination of e-commerce and Udemy.

Developed using React, Tailwind CSS, Node.js, Express.js, and MongoDB.

Also used popular libraries like React Router for routing and Redux Toolkit for state management.

## Features

- Fully functioning **Login** and **Registration** pages

### Static Pages

- **Welcome Page**: The initial landing page of the site. Redirects users to the login or registration page.
- **Home Page**: Provides information about other pages within the site and allows navigation.
- **Teachers**: Introduces the lecturers.
- **Join Us**: Includes a form acting as a job submission, but it currently lacks functionality. Functionality might be implemented later.

### Shop

- Books are fetched from the backend API, with book data stored in MongoDB.
- Search books by title and author, filter by genre, and sort by date, popularity.
- View individual books and add/remove them to/from the **shopping cart**, adjust the quantity in the cart.

### Courses

- Courses are fetched from the backend API, with course data stored in MongoDB.
- Search courses by title and author, filter by genre.
- Subscribe to courses.

### My Cart

- View added books in the **shopping cart**.
- Clear the entire cart.
- Remove individual books from the cart.
- Increase/decrease the quantity of added books.
- View total price.
- **Place Order** feature.

### My Account

- **Profile**: Ability to edit personal information.
- **My Orders**: View placed orders. Features include date and total price. Clicking "See more" reveals details.
- **My Courses**: View subscribed courses and shortcuts.
- **Logout**: Log out the user.

## Installation and Setup

Clone down this repository and navigate to the project directory. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Development Server:

`npm run dev`

## Reflection

- This project was a personal endeavor aimed at showcasing and enhancing my skills while also serving as a means to potentially attract job opportunities. It started off as a simple idea to create a platform similar to Udemy, but I later decided to expand its functionality by incorporating e-commerce features, which turned out to be successful.

- The most challenging aspects of the project were implementing authentication and cart features. These required extensive research and learning, ultimately leading to significant improvements in my understanding of authentication mechanisms and state management. I encountered issues related to handling user sessions securely and managing state across different components. Overcoming these obstacles required thorough troubleshooting and experimentation. Successfully implementing these features not only enhanced the functionality of the application but also boosted my confidence in tackling complex problems.

- For the front-end, I utilized React, Vite, React-Router, Redux, and Redux Toolkit. These technologies provided a robust foundation for building a responsive and interactive user interface. On the back-end, I employed Node.js and Express.js for server-side logic, while MongoDB served as the database management system.

- I opted for the create vite@latest boilerplate over Create React App due to its faster spinning-up of the development server, improved build performance, and errorless initial start-up. Vite's streamlined development environment allowed me to focus more on implementing features rather than dealing with configuration issues, ultimately enhancing productivity.

- Similarly, I chose Redux Toolkit over vanilla Redux for its built-in utilities for common Redux patterns. Redux Toolkit significantly reduced boilerplate code and provided a more ergonomic way to manage state, resulting in cleaner and more maintainable codebase. Overall, these technology choices contributed to a more efficient development process and a smoother user experience.
