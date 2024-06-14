// SubjectPage.js
import React  from 'react';
import {  useParams, useLocation  } from 'react-router-dom';
import Header from '../../Header/Header';
import CourseOutcome from '../../screens/Course/CourseOutcomeTable';
import CourseObjectiveTable from '../../screens/Course/CourseObjectiveTable';



const SubjectPage = () => {
    const { subject } = useParams();
    const location = useLocation();
    const { courseCoordinator = "Unknown" } = location.state || {};

    return (
        <div>
            <Header/>
            <div className='d-flex justify-content-around'>
                <div >
                    <div>Course Coordinator: <span style={{ color: '#a30c0d' }}> {courseCoordinator}</span></div>
                    <div>Class: Third year</div>
                </div> 
                 <div >
                    <div>Course Name: <span style={{ color: '#a30c0d' }}> {subject}</span></div>
                    <div>Course Code: 317521</div>
                </div>
            </div>
            <CourseOutcome/>
            <CourseObjectiveTable/>
            

        </div>
    );
};

export default SubjectPage;
