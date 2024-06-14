import { CourseOutcome } from "../models/course_outcome.js"

const createCourseOutcome = async (subject_id) => {
    try {
        const courseOutcome = new CourseOutcome({ subject_id });
        await courseOutcome.save();
        return courseOutcome;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateCourseOutcome = async (req,res) => {
    try {
        const {subject_data_id} = req.params;
        const {co,outcome} = req.body;
        const CO = await CourseOutcome.updateOne({subject_data_id: subject_data_id},{co: co, outcome: outcome})
        
        return res.status(200).json(["Course Outcome Updated Succesfully!",CO])
    } catch (error) {
        return res.status(400).json(["Course Outcome Update UnSuccesfull!", error.message])
        
    }
}
export { createCourseOutcome, updateCourseOutcome };