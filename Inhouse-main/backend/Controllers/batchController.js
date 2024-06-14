import { isObjectIdOrHexString } from "mongoose";
import { Batch } from "../models/batch.js"
import { Subject } from "../models/subject.js"
import { Teacher } from "../models/teacher.js";
import { createSubject } from "./subjectController.js";
import { Types } from 'mongoose';

const { ObjectId } = Types;

const createBatch = async (req, res) => {
    try {
        const { batchyear, subjects } = req.body;
        let subjectIds = [];
        const subjects_names = [];
        for (let subjectData of subjects) {
            const { subject_code, subject_name } = subjectData;

            // await the result of createSubject function
            const { subject } = await createSubject(subject_code, subject_name); // Extract subject from the result
            subjectIds.push(subject._id);
        }
        for (let i = 0; i < subjects.length; i++) {
            subjects_names.push(subjects[i].subject_name)
        }
        // Create the batch with the subject IDs
        const batch = new Batch({ batchyear, subjects: subjectIds, subject_names: subjects_names });
        await batch.save();

        // Update the batch_id field in each subject
        await Subject.updateMany({ _id: { $in: subjectIds } }, { $set: { batch_id: batch._id } });

        res.status(201).json(batch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const findBatchSubjects = async (req, res) => {
//     try {
//         const batchId = req.body._id;
//         const teacherId = "6623a26002630af71ac039c1"; // Example teacher ID
//         const aggregationResult = await findMatchingSubjectsForTeacher(teacherId);
//         console.log(aggregationResult);
//         // Extract subjects from the aggregation result
//         // const teacherSubjects = result.length > 0 ? result[0].subjects : [];
//         // const teacherSubjectNames = teacherSubjects.map(subject => subject.subject_name);

//         return res.status(200).json(aggregationResult);
//     } catch (error) {
//         return res.status(404).json({ message: error.message });
//     }
// };

const findMatchingSubjectsForTeacher = async (req, res) => {
    try {
        const { name } = req.body;
        const aggregationResult = await Teacher.aggregate([
            { $match: { name: name } },
            {
                $unwind: "$subject",
            },
            {
                $lookup: {
                    from: "subjects",
                    localField: "subject.code",
                    foreignField: "subject_code",
                    as: "result",
                },
            },
        ]);

        const final = aggregationResult.map(teacher => ({
            ...teacher,
            result: teacher.result.filter(subject => subject.batch_id == "66249fbbb13731329b2c3c51")
        }));
        return res.status(200).json(final);
    } catch (error) {
        throw error;
    }
}


export { createBatch, findMatchingSubjectsForTeacher };
