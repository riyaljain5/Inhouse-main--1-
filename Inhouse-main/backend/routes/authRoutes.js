// routes/authRoutes.js

import express from 'express';
import cors from 'cors';

import { updateCourseObjective } from '../Controllers/courseObjectiveController.js';
import { updateCourseOutcome } from '../Controllers/courseOutcomeController.js';

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);


// router.post('/batch', createBatch)
// router.post('/addSubjects', addSubjects)

// router.post('/addstudent', CreateStudentDetail)
// router.get('/getbatchsubjects', findMatchingSubjectsForTeacher)
// router.post('/batchstudentdata',createBatchStudents)
// router.get('/getbatchstudentdata',getBatchStudentData)
// router.get('/findsubjectdata', FindSubjectData)
// router.get('/get', getstudentdetailsubejectwise)
// router.post('/copo/:subject_data_id', updateCoPo)
// router.get('/copo/:subject_data_id', getCoPO);
router.post('/courseobj/:subject_data_id', updateCourseObjective),
router.post('/courseout/:subject_data_id',updateCourseOutcome);
// router.post('/marking/:subject_data_id',updateMarkingModel)
// router.get('/getmarking', getMarkingModel)
export default router;