// controllers/subjectController.js
import { CourseObjective } from '../models/course_objective.js';
import { CourseOutcome } from '../models/course_outcome.js';
import { Subject } from '../models/subject.js';
import { Subject_Data } from '../models/subject_data.js';
import { createCourseObjective } from './courseObjectiveController.js';
import { createCourseOutcome } from './courseOutcomeController.js';

const createSubject = async (subject_code, subject_name) => {
    try {

        const subject = new Subject({ subject_code, subject_name, batch_id: null });
        const subject_names = [];
        subject_names.push(subject_name);
        const courseObjective = await createCourseObjective(subject._id);
        const courseOutcome = await createCourseOutcome(subject._id);
        await CourseOutcome.updateOne({ subject_id: subject._id }, { subject_name: subject.subject_name })
        await CourseObjective.updateOne({ subject_id: subject._id }, { subject_name: subject.subject_name })
        const subjectData = new Subject_Data({
            subject_id: subject._id,
            course_objective: courseObjective._id,
            course_outcome: courseOutcome._id,
            co_po_pso_map: [],
            perc_co_po_pso_map: [],
            student_details: [],
            direct_po_attain: [],
            indirect_po_attain: [],
            co_po_pso_attain: []
        });
        await subjectData.save();

        subject.subject_data = subjectData._id

        await subject.save()


        return { subject, subjectData, subject_names }; // Return both subject and subjectData
    } catch (error) {
        throw new Error(error.message); // Throw error to handle it outside this function
    }
};

export { createSubject };
