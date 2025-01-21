# To-Do List App

A full-stack To-Do List application built using **React** for the frontend and **FastAPI** for the backend.

## Features

- Add, delete, and reorder tasks with drag-and-drop functionality.
- RESTful API with FastAPI for task management.
- Modern UI with React and React DnD for drag-and-drop interactions.
- Responsive design for mobile and desktop.

## Tech Stack

### Frontend:
- **React** (Functional Components & Hooks)
- **React DnD** (Drag-and-Drop functionality)
- **React Router** (Routing for navigation)
- **Axios** (HTTP requests)
- **CSS** (Styling)

### Backend:
- **FastAPI** (Python backend framework)
- **SQLAlchemy** (ORM for database management)
- **SQLite** (Database)
- **Pydantic** (Data validation)

## Getting Started

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [Python](https://www.python.org/) (version 3.11 or above)
- Git

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/todolist.git
cd todolist
```

#### 2. Setup the Backend

```bash
cd todo-backend
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate    # Windows

pip install -r requirements.txt
uvicorn main:app --reload
```

The FastAPI server will run on `http://127.0.0.1:8000`

#### 3. Setup the Frontend

```bash
cd ../todo-frontend
npm install
npm start
```

The React app will run on `http://localhost:3000`

---

## API Endpoints

### Base URL: `http://127.0.0.1:8000`

| Method | Endpoint       | Description            |
|--------|---------------|------------------------|
| GET    | /tasks/        | Get all tasks          |
| POST   | /tasks/        | Add a new task         |
| DELETE | /tasks/{id}/   | Delete a task by ID    |

---

## Usage

1. Open the frontend at `http://localhost:3000`
2. Add tasks using the input field.
3. Drag and drop tasks to reorder them.
4. Delete tasks using the delete button.

---

## Project Structure

```
todo-list/
│-- todo-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   ├── TaskItem.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── AboutPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│-- todo-backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── schemas.py
│   ├── crud.py
│-- README.md
│-- package.json
│-- requirements.txt
```

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-new-task`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-new-task`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries, please contact: [your.email@example.com](mailto:your.email@example.com)

