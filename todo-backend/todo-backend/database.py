from sqlalchemy.orm import DeclarativeBase, sessionmaker
from sqlalchemy import create_engine

DATABASE_URL = "sqlite:///./todos.db"

# Create a database engine
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Correct way to define Base in SQLAlchemy 2.0+
class Base(DeclarativeBase):
    pass
