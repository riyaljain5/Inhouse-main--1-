import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddTeacherForm() {

    // const subjectsSemI = [
    //     { "107001": "Engineering Mathematics-I" },
    //     { "107002": "Engineering Physics" },
    //     { "107009": "Engineering Chemistry" },
    //     { "102003": "Systems in Mechanical Engineering" },
    //     { "103004": "Basic Electrical Engineering" },
    //     { "104010": "Basic Electronics Engineering" },
    //     { "110005": "Programming and Problem Solving" },
    //     { "101011": "Engineering Mechanics" },
    //     { "111006": "Workshop" },
    //     { "101007": "Audit Course 1" }
    // ];

    // const subjectsSemII = [
    //     { "107008": "Engineering Mathematics-II" },
    //     { "107002": "Engineering Physics" },
    //     { "107009": "Engineering Chemistry" },
    //     { "103004": "Basic Electrical Engineering" },
    //     { "104010": "Basic Electronics Engineering" },
    //     { "110005": "Programming and Problem Solving" },
    //     { "101011": "Engineering Mechanics" },
    //     { "102012": "Engineering Graphics" },
    //     { "110013": "Project Based Learning" },
    //     { "101014": "Audit Course 2" },
    //     { "107015": "Audit Course 2" }
    // ];

    const subjectsSemIII = [
        { "210241": "Discrete Mathematics" },
        { "210242": "Fundamentals of Data Structures" },
        { "210243": "Object Oriented Programming (OOP)" },
        { "210244": "Computer Graphics" },
        { "217521": "Operating Systems" },
        { "217522": "Data Structures Laboratory" },
        { "217523": "OOP and Computer Graphics Laboratory" },
        { "217524": "Operating Systems Laboratory" },
        { "217525": "Business Communication Skills" },
        { "217526": "Humanity and Social Science" },
        { "217527": "Audit Course 3" }
    ];

    const subjectsSemIV = [
        { "217528": "Statistics" },
        { "217529": "Internet of Things" },
        { "210253": "Data Structures and Algorithms" },
        { "210252": "Software Engineering" },
        { "217530": "Management Information Systems" },
        { "217531": "Internet of Things Laboratory" },
        { "217532": "Data Structures and Algorithms Laboratory" },
        { "217533": "Project Based Learning II" },
        { "210234": "Code of Conduct" },
        { "217535": "Audit Course 4" }
    ];

    const subjectsSemV = [
        { "310241": "Data Base Management Systems" },
        { "317521": "Computer Networks" },
        { "310252": "Web Technology" },
        { "310253": "Artificial Intelligence" },
        { "317523": "SoftwareLaboratory I" },
        { "317524": "CNLaboratory" },
        { "317525": "Elective I Laboratory" },
        { "317526": "Seminar and Technical Communication" },
        { "317527": "Environmental Studies" },
        { "317528": "Audit Course 5" }
    ];

    const subjectsSemVI = [
        { "317529": "Data Science" },
        { "317530": "Cyber Security" },
        { "317531": "Artificial Neural Network" },
        { "317533": "Software Laboratory II" },
        { "317534": "Software Laboratory III" },
        { "317535": "Internship" },
        { "317536": "Mini Project" },
        { "317537": "Audit Course" }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        subjects: []
    });

    const handleChangeName = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(name);
    };

    const handleChangeEmail = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(name);
    };

    const handleChangePass = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(name);
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            const [code, name] = value.split(':'); // Split the value into code and name
            setFormData(prevFormData => ({
                ...prevFormData,
                subjects: [...prevFormData.subjects, { code, name }] // Include both code and name in the object
            }));
        } else {
            const [code, name] = value.split(':'); // Split the value into code and name
            setFormData(prevFormData => ({
                ...prevFormData,
                subjects: prevFormData.subjects.filter(subject => subject.code !== code || subject.name !== name)
            }));
        }
    };
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:8000/addteacher', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                // Do something with the response data if needed
            })
            .catch(error => {
                console.error('There was a problem with your Axios request:', error);
            });
    };

    return (
        <div>
            <h1>Add Teachers</h1>
            <form className='' onSubmit={handleSubmit}>
                <div className="form-group my-2 mx-3">
                    <label htmlFor="name" className='fs-3'>Name:</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" placeholder="Enter Name" onChange={handleChangeName} />
                </div>
                <div className="form-group my-2 mx-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChangeEmail} />
                </div>
                <div className="form-group my-2 mx-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange={handleChangePass} />
                </div>
                <div className='my-5'></div>
                <div className='d-flex'>

                    {[subjectsSemIII, subjectsSemIV, subjectsSemV, subjectsSemVI].map((subjects, semesterIndex) => (
                        <div className='border border-danger w-25 mx-3 px-2' key={semesterIndex}>
                            <h2 className='ms-3'>Sem {semesterIndex + 3}</h2>
                            {subjects.map((subject, index) => (
                                <div className="form-check form-check mx-3 " key={index}>
                                    <input className="form-check-input" type="checkbox" id={`sem${semesterIndex + 1}Sub${index}`} value={`${Object.entries(subject)[0][0]}:${Object.entries(subject)[0][1]}`} onChange={handleCheckboxChange} />
                                    <label className="form-check-label" htmlFor={`sem${semesterIndex + 1}Sub${index}`}>{Object.entries(subject)[0][0]}: {Object.entries(subject)[0][1]}</label>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
                <button type="submit" className='btn btn-primary mt-3 flex justify-center align-center'>Submit</button>
            </form>
        </div>
    );
}

export default AddTeacherForm;
