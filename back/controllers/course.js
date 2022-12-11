import Course from "../models/course.js";

///todos los cursos get ruta  ///podria ser por id
export const getCourses = async (req, res) => {
  try {
    const course = await Course.findAll();
    res.send(course);
  } catch (err) {
    console.log(err);
  }
}
///crear curso
export const createCourse = async (req, res) => {
  try {
    await Course.create(req.body);
    res.json({
      "message": "curso creado",
    });
  } catch (err) {
    console.log(err);
  }
}

///

//actualizar curso
export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      res.status(404).send({
        message: `no hay curso con este id ${req.params.id}`
      });
      return;
    }
    await Course.update(req.body, {
      where: {
        id:req.params.id
      }
    });
    res.json({
      "message": "curso actualizado"
    });
  } catch (err) {
    console.log(err)
  }
}

//borrar curso
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      res.status(404).send({
        message: `no hay cursos con este id ${req.params.id}`
      });
      return;
    }
    await Course.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "curso eliminado"
    });
  } catch (err) {
    console.log(err);
  }
}
