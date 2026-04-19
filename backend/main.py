import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from sqlalchemy import create_engine, Column, String
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import sessionmaker, declarative_base
from sqlalchemy.sql.expression import func

# 1. โหลดค่าจากไฟล์ .env
load_dotenv()
DATABASE_URL = os.getenv("SUPABASE_URL")

# 2. ตั้งค่าการเชื่อมต่อ Database (Supabase)
# เราใช้ SQLAlchemy เป็นตัวกลางในการคุยกับ PostgreSQL
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 3. กำหนดโครงสร้างตาราง (Model) ให้ตรงกับที่เราสร้างใน Supabase
class Problem(Base):
    __tablename__ = "problems"
    id = Column(String, primary_key=True)
    method = Column(String, nullable=False)   # 'bisection' หรือ 'newton'
    equation = Column(String, nullable=False) # 'x^2 - 4'
    bounds = Column(JSONB)                    # เก็บ {'xl': 1, 'xr': 2} หรือ {'x0': 2}

# 4. สร้างแอป FastAPI
app = FastAPI(title="Numerical Methods API")

# 5. ตั้งค่า CORS เพื่อให้ React (Vite) เรียกใช้งาน API ได้โดยไม่ติด Block
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Routes (เส้นทาง API) ---

@app.get("/")
def read_root():
    return {"message": "API ระบบ Numerical Methods เชื่อมต่อกับ Supabase เรียบร้อยแล้ว"}

# 🌟 เส้น API สำหรับสุ่มโจทย์ 1 ข้อ (ใช้ทดสอบ หรือใช้กับหน้าเว็บเดิม)
@app.get("/example")
def get_random_example():
    db = SessionLocal()
    try:
        # สุ่มดึงมา 1 แถว
        problem = db.query(Problem).order_by(func.random()).first()
        if not problem:
            return {"error": "ไม่พบข้อมูลโจทย์ใน Database"}
        
        # จัดรูปแบบให้หน้าบ้านใช้งานง่าย
        return {
            "example": {
                "id": str(problem.id),
                "method": problem.method,
                "equation": problem.equation,
                "xl": problem.bounds.get("xl") if problem.bounds else None,
                "xr": problem.bounds.get("xr") if problem.bounds else None,
                "x0": problem.bounds.get("x0") if problem.bounds else None
            }
        }
    except Exception as e:
        return {"error": f"เกิดข้อผิดพลาด: {str(e)}"}
    finally:
        db.close()

# 🌟 เส้น API สำหรับดึงโจทย์แยกตามวิธี (เช่น /api/problems/bisection)
@app.get("/api/problems/{method_name}")
def get_problems_by_method(method_name: str):
    db = SessionLocal()
    try:
        problems = db.query(Problem).filter(Problem.method == method_name.lower()).all()
        return {"status": "success", "data": problems}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()