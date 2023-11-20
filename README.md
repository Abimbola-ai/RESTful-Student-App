# RESTful-Student-App

# Student Information Management System

This project is a web application developed using Node.js, Express, and MongoDB to manage student information. It provides RESTful APIs for performing CRUD operations on student records and associated courses.

## Features

- Add a student to the database
- Remove a student from the database
- Modify student information in the database
- Modify course information in the database

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/RESTful-Student-App.git
   cd RESTful-Student-App
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## Usage

1. Access the web application through your browser at `http://localhost:3000`.
2. Use the provided UI to add, remove, and modify student information.

## API Endpoints

- `POST /addStudent`: Add a new student
- `DELETE /removeStudent/:id`: Remove a student by ID
- `PUT /modifyStudent/:id`: Modify student information by ID
- `PUT /modifyCourse/:courseId`: Modify course information by course ID

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/) for making this project possible.

Feel free to update and customize this README based on your project's specific features and requirements.
