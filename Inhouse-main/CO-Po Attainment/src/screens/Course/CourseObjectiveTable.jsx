import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CourseObjectiveTable() {
    const [data, setData] = useState([
        "To understand the Basics concepts of networking standards, protocols and technologies.",
        "To learn the different signal transmission, multiplexing techniques.",
        "To learn the role of protocols at various layers in the protocol stacks",
        "To learn the different IEEE standards.",
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [editedData, setEditedData] = useState([...data]);

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData([...data]); // Reset edited data
    };

    const handleInputChange = (event, index) => {
        const newData = [...editedData];
        newData[index] = event.target.value;
        setEditedData(newData);
    };

    const handleSave = (index) => {
        setEditIndex(null);
        setData([...editedData]); // Save edited data
    };

    return (
        <div className="container py-4 w-100 h-50">
            <table className="table table-bordered">
                <thead className="bg-danger text-white text-center">
                    <tr>
                        <th scope="col" className="col-2">Sr.No</th>
                        <th scope="col" className="col-10">Course Objectives</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="align-middle text-center">
                                <span className='fs-5'>{index + 1}</span>
                                <button
                                    className={`btn btn-sm ${editIndex === index ? 'btn-success' : 'btn-light border border-3'} ms-2`}
                                    onClick={() => editIndex === index ? handleSave(index) : handleEdit(index)}
                                >
                                    {editIndex === index ? 'Save' : 'Edit'}
                                </button>
                            </td>
                            <td className="align-middle">
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        className="form-control fs-5"
                                        value={editedData[index]}
                                        onChange={(event) => handleInputChange(event, index)}
                                    />
                                ) : (
                                    <span className='fs-5'>{item}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseObjectiveTable;