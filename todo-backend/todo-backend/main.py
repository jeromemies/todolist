from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from crud import get_tasks, create_task, delete_task
from pydantic import BaseModel


from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)


class TaskCreate(BaseModel):
    title: str



app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows requests from any origin (for development)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)


def get_db():
    db = SessionLocal()
    try:
        yield db  # provide the session to the endpoint
    finally:
        db.close()  # ensure session is closed after request

@app.get("/tasks/")
def read_tasks(db: Session = Depends(get_db)):
    return get_tasks(db)

@app.post("/tasks/")
def add_task(task: TaskCreate, db: Session = Depends(get_db)):
    new_task = create_task(db, task.title)
    return {
        "id": new_task.id,
        "title": new_task.title,
        "completed": False  # Assuming 'completed' is default False
    }


@app.delete("/tasks/{task_id}/")
def remove_task(task_id: int, db: Session = Depends(get_db)):
    deleted_task = delete_task(db, task_id)
    if deleted_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"message": "Task deleted successfully"}
