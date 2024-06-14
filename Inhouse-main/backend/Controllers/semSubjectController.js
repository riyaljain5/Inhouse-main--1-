import { SemSubjects } from "../models/semSubject.js";

const addSubjects = async (req, res) => {
  try {
    const { Sem_number, subjects } = req.body;

    // Find the existing document for the given Sem_number
    let semSubjectsData = await SemSubjects.findOne({ Sem_number });

    if (semSubjectsData) {
      // If the document exists, append new unique subjects
      const existingSubjectCodes = new Set(semSubjectsData.subjects.map(subject => subject.subject_code));
      const newUniqueSubjects = subjects.filter(subject => !existingSubjectCodes.has(subject.subject_code));

      if (newUniqueSubjects.length > 0) {
        semSubjectsData.subjects.push(...newUniqueSubjects);
        await semSubjectsData.save(); // Save the updated document
      }

      return res.json(semSubjectsData);
    } else {
      // If the document does not exist, create a new one
      semSubjectsData = new SemSubjects({
        Sem_number,
        subjects
      });
      await semSubjectsData.save(); // Save the new document

      return res.json(semSubjectsData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { addSubjects };
