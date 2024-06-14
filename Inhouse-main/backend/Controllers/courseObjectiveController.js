import { CourseObjective } from '../models/course_objective.js';

const createCourseObjective = async (subject_id) => {
    try {
        const courseObjective = new CourseObjective({ subject_id });
        await courseObjective.save();
        return courseObjective;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateCourseObjective = async (req,res) => {
    try {
        const {subject_data_id} = req.params;
        const {objectives} = req.body;
        const CO = await CourseObjective.updateOne({subject_data_id: subject_data_id},{objectives: objectives })
        
        return res.status(200).json(["Course Objective Updated Succesfully!",CO])
    } catch (error) {
        return res.status(400).json(["Course Objective Update UnSuccesfull!", error.message])
        
    }
}

export { createCourseObjective , updateCourseObjective};