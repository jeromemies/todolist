from sqlalchemy.orm import Session
from models import Task

def get_tasks(db: Session):
    return db.query(Task).all()

def create_task(db: Session, title: str):
    task = Task(title=title)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

def delete_task(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        return None  # Handle case where task is not found
    db.delete(task)
    db.commit()
    return task


