import express  from "express";



import { getCourses, createCourse, updateCourse, deleteCourse } from "../controllers/course.js";

const router = express.Router();



router.get("/course", getCourses);
router.post("/course/new",  createCourse);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

export default router;