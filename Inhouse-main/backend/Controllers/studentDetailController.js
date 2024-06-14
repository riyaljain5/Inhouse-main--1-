import { StudentDetail } from "../models/student_detail.js";
import { createIE_CW } from "./coAttainIE_CWController.js"
import { createUE } from "./coAttainUEController.js"

const CreateStudentDetail = async (req, res) => {
    try {
        const students = req.body;

        const createdStudents = await Promise.all(students.map(async student => {
            const { co1, co2, co3, co4, co5, co6 } = student;

            const { roll } = student;
            console.log(roll);

            const findstudent = await StudentDetail.findOne({ roll_no: roll })
            console.log(findstudent);

            if (findstudent) {
                return res.status(409).json({ message: "Student Already Exists" });
            }

            const { cos } = await createIE_CW({ co1, co2, co3, co4, co5, co6 });


            const { UE } = await createUE(student.ese, student.midsem, student.pr_or, student.termwork, student.total);


            const newStudent = new StudentDetail({
                roll_no: student.roll,
                name: student.name,
                prn: student.prn,
                co_attain_UE: UE._id,
                co_attain_IE_CW: cos._id
            });

            await newStudent.save();
            return newStudent;
        }));

        return res.status(200).json({ message: "Students created successfully", students: createdStudents });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error creating Students" });
    }
}

export { CreateStudentDetail };

