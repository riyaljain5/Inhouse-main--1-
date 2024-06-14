import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CourseOutcome() {
    const [data, setData] = useState([
        { co: "CO502.1", outcome: "Summarize fundamental concepts of Computer Networks, architectures, protocols and technologies" },
        { co: "CO502.2", outcome: "Analyze the working of physical layer protocols" },
        { co: "CO502.3", outcome: "Analyze the working of different routing protocols and mechanisms" },
        { co: "CO502.4", outcome: "Implement client-server applications using sockets" },
        { co: "CO502.5", outcome: "Illustrate role of application layer with its protocols, client-server architectures" },
        { co: "CO502.6", outcome: "Summarize concepts of MAC and ethernet" }
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [editedData, setEditedData] = useState([...data]);

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedData([...data]); // Reset edited data
    };

    const handleInputChange = (event, index, field) => {
        const newData = [...editedData];
        newData[index][field] = event.target.value;
        setEditedData(newData);
    };

    const handleSave = (index) => {
        setEditIndex(null);
        setData([...editedData]); // Save edited data
    };

    return (
        <div className="container py-4 w-100 fs-4 my-4">
            <table className="table table-bordered">
                <thead className="bg-success text-white text-center">
                    <tr>
                        <th scope="col-5" className="col-2">CO</th>
                        <th scope="col-7" className="col-10">Course Outcomes (CO's)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="align-middle text-center fs-5">
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        className="form-control d-inline w-50"
                                        value={editedData[index].co}
                                        onChange={(event) => handleInputChange(event, index, 'co')}
                                    />
                                ) : (
                                    <span className='fs-5'>{item.co}</span>
                                )}
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
                                        value={editedData[index].outcome}
                                        onChange={(event) => handleInputChange(event, index, 'outcome')}
                                    />
                                ) : (
                                    <span className='fs-5'>{item.outcome}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseOutcome;