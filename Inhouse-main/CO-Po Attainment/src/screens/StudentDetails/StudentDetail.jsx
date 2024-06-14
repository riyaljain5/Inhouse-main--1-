import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function StudentDetail() {
    const [name, setName] = useState([
        "Vardhaman Begani",
        "Vardhaman Begani",
        "Vardhaman Begani",
        "Vardhaman Begani",

    ]);

    const [roll, setRoll] = useState([
        "TEAIDA01",
        "TEAIDA02",
        "TEAIDA03",
        "TEAIDA04"
    ]);

    const [prn, setPrn] = useState([
        "72280089E",
        "72280090E",
        "72280091E",
        "72280092E",
        "72280092E",
    ]);
    const [ese, setEse] = useState([
        50, 60, 50, 56
    ]);
    const [midsem, setMidsem] = useState([
        27, 27, 17, 14
    ]); const [pr_or, setPr_or] = useState([
        10, 20, 13, 14
    ]); const [termwork, setTermwork] = useState([
        17, 24, 13, 4
    ]);
    const [total, settotal] = useState([]);
    const [totalStudents, setTotalStudents] = useState(4);

    const [CO1, setCO1] = useState(
        [[10, 12, 15, 21], [15, 26, 15, 21], [1, 2, 3, 4], [23, 123, 12]]
    );
    const [totalCO1, settotalCO1] = useState([]);

    const [CO2, setCO2] = useState(
        [[1, 2, 3, 4], [23, 123, 12, 21]]
    );
    const [totalCO2, settotalCO2] = useState([]);

    const [CO3, setCO3] = useState(
        [[16, 13, 11, 22], [11, 9, 7, 8], [1, 2, 3, 4], [23, 123, 12]]
    );
    const [totalCO3, settotalCO3] = useState([]);

    const [CO4, setCO4] = useState(
        [[1, 7, 12, 14, 22], [3, 4, 18, 12], [1, 2, 3, 4], [23, 123, 12]]
    );
    const [totalCO4, settotalCO4] = useState([]);

    const [CO5, setCO5] = useState(
        [[21, 23, 7, 4, 9]]
    );
    const [totalCO5, settotalCO5] = useState([]);

    const [CO6, setCO6] = useState(
        [[17, 16, 12, 11, 7]]
    );
    const [totalCO6, settotalCO6] = useState([]);

    useEffect(() => {
        calculateTotal();
        calculateTotalCO1();
        calculateTotalCO2();
        calculateTotalCO3();
        calculateTotalCO4();
        calculateTotalCO5();
        calculateTotalCO6();

    }, [ese, midsem, pr_or, termwork]);

    // useEffect(() => {
    //     console.log(totalCO1);
    // }, [totalCO1]);

    const calculateTotal = () => {
        const newTotal = ese.map((eseValue, index) => {
            return parseInt(eseValue) + parseInt(midsem[index]) + parseInt(pr_or[index]) + parseInt(termwork[index]);
        });
        settotal(newTotal)
    };

    const calculateTotalCO1 = () => {
        const newTotal = CO1[0].map((val, index) => {
            return parseInt(val) + parseInt(CO1[1][index]);
        });
        settotalCO1(newTotal);
    };

    const calculateTotalCO2 = () => {
        const newTotal = CO2[0].map((val, index) => {
            return parseInt(val) + parseInt(CO2[1][index]);
        });
        settotalCO2(newTotal);
    };

    const calculateTotalCO3 = () => {
        const newTotal = CO3[0].map((val, index) => {
            return parseInt(val) + parseInt(CO3[1][index]);
        });
        settotalCO3(newTotal);
    };

    const calculateTotalCO4 = () => {
        const newTotal = CO4[0].map((val, index) => {
            return parseInt(val) + parseInt(CO4[1][index]);
        });
        settotalCO4(newTotal);
    };

    const calculateTotalCO5 = () => {
        const newTotal = CO5[0].map((val, index) => {
            return parseInt(val);
        });
        settotalCO5(newTotal);
    };

    const calculateTotalCO6 = () => {
        const newTotal = CO6[0].map((val, index) => {
            return parseInt(val);
        });
        settotalCO6(newTotal);
    };


    const [editIndex, setEditIndex] = useState(null);
    const [editedName, setEditedName] = useState([...name]);
    const [editedRoll, setEditedRoll] = useState([...roll]);
    const [editedPRN, setEditedPRN] = useState([...prn]);
    const [editedEse, setEditedEse] = useState([...ese]);
    const [editedMid, setEditedMid] = useState([...midsem]);
    const [editedPror, setEditedPrOr] = useState([...pr_or]);
    const [editedTermwork, setEditedPTermWork] = useState([...termwork]);
    const [editedCO1, setEditedCO1] = useState([...CO1]);
    const [editedCO2, setEditedCO2] = useState([...CO2]);
    const [editedCO3, setEditedCO3] = useState([...CO3]);
    const [editedCO4, setEditedCO4] = useState([...CO4]);
    const [editedCO5, setEditedCO5] = useState([...CO5]);
    const [editedCO6, setEditedCO6] = useState([...CO6]);



    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedName([...name]);
        setEditedRoll([...roll]);
        setEditedPRN([...prn]);
        setEditedEse([...ese]);
        setEditedMid([...midsem]);
        setEditedPrOr([...pr_or]);
        setEditedPTermWork([...termwork]);
        setEditedCO1([...CO1]);
        setEditedCO2([...CO2]);
        setEditedCO3([...CO3]);
        setEditedCO4([...CO4]);
        setEditedCO5([...CO5]);
        setEditedCO6([...CO6]);
    };

    const handleInputChangetotal = (event) => {
        setTotalStudents(parseInt(event.target.value) || 0);
    };

    const handleInputChange = (event, index) => {
        const newName = [...editedName];
        newName[index] = event.target.value;
        setEditedName(newName);
    };

    const handleInputChange1 = (event, index) => {
        const newRolls = [...editedRoll];
        newRolls[index] = event.target.value;
        setEditedRoll(newRolls);
    };

    const handleInputChange2 = (event, index) => {
        const newPrn = [...editedPRN];
        newPrn[index] = event.target.value;
        setEditedPRN(newPrn);
    };
    const handleInputChange3 = (event, index) => {
        const newEse = [...editedEse];
        newEse[index] = event.target.value;
        setEditedEse(newEse);
    };
    const handleInputChange4 = (event, index) => {
        const newMid = [...editedMid];
        newMid[index] = event.target.value;
        setEditedMid(newMid);
    };
    const handleInputChange5 = (event, index) => {
        const newPrOr = [...editedPror];
        newPrOr[index] = event.target.value;
        setEditedPrOr(newPrOr);
    };

    const handleInputChange6 = (event, index) => {
        const newterm = [...editedTermwork];
        newterm[index] = event.target.value;
        setEditedPTermWork(newterm);
    };

    const handleInputChangeCO1UT1 = (event, index) => {
        const newCO1UT1 = [...editedCO1];
        newCO1UT1[0][index] = parseInt(event.target.value) || 0;
        setEditedCO1(newCO1UT1);
    };

    const handleInputChangeCO1CW = (event, index) => {
        const newCO1CW = [...editedCO1];
        newCO1CW[1][index] = parseInt(event.target.value) || 0;
        setEditedCO1(newCO1CW);
    };

    const handleInputChangeCO2UT1 = (event, index) => {
        const newCO2UT1 = [...editedCO2];
        newCO2UT1[0][index] = parseInt(event.target.value) || 0;
        setEditedCO2(newCO2UT1);
    };

    const handleInputChangeCO2CW = (event, index) => {
        const newCO2CW = [...editedCO2];
        newCO2CW[1][index] = parseInt(event.target.value) || 0;
        setEditedCO2(newCO2CW);
    };

    const handleInputChangeCO3UT2 = (event, index) => {
        const newCO3UT2 = [...editedCO3];
        newCO3UT2[0][index] = parseInt(event.target.value) || 0;
        setEditedCO3(newCO3UT2);
    };

    const handleInputChangeCO3CW = (event, index) => {
        const newCO3CW = [...editedCO3];
        newCO3CW[1][index] = parseInt(event.target.value) || 0;
        setEditedCO3(newCO3CW);
    };

    const handleInputChangeCO4UT2 = (event, index) => {
        const newCO4UT2 = [...editedCO4];
        newCO4UT2[0][index] = parseInt(event.target.value) || 0;
        setEditedCO4(newCO4UT2);
    };

    const handleInputChangeCO4CW = (event, index) => {
        const newCO4CW = [...editedCO4];
        newCO4CW[1][index] = parseInt(event.target.value) || 0;
        setEditedCO4(newCO4CW);
    };

    const handleInputChangeCO5CW = (event, index) => {
        const newCO5CW = [...editedCO5];
        newCO5CW[0][index] = parseInt(event.target.value) || 0;
        setEditedCO5(newCO5CW);
    };

    const handleInputChangeCO6CW = (event, index) => {
        const newCO6CW = [...editedCO6];
        newCO6CW[0][index] = parseInt(event.target.value) || 0;
        setEditedCO6(newCO6CW);
    };


    const handleSave = (index) => {
        setEditIndex(null);
        setName([...editedName]);
        setRoll([...editedRoll]); // Save edited data
        setPrn([...editedPRN]);
        setEse([...editedEse]);
        setMidsem([...editedMid]);
        setPr_or([...editedPror]);
        setTermwork([...editedTermwork]);
        setCO1([...editedCO1]);
        setCO2([...editedCO2]);
        setCO3([...editedCO3]);
        setCO4([...editedCO4]);
        setCO5([...editedCO5]);
        setCO6([...editedCO6]);

    };

    const handleAllRowsSubmit = () => {
        const StudentDetails = [];

        // Collect data for all rows
        for (let i = 0; i < totalStudents; i++) {
            const rowData = {
                name: editedName[i],
                roll: editedRoll[i],
                prn: editedPRN[i],
                ese: editedEse[i],
                midsem: editedMid[i],
                pr_or: editedPror[i],
                termwork: editedTermwork[i],
                total: total[i],
                co1: { UT1: editedCO1[0][i], CW: editedCO1[1][i], Total: totalCO1[i] },
                co2: { UT1: editedCO2[0][i], CW: editedCO2[1][i], Total: totalCO2[i] },
                co3: { UT2: editedCO3[0][i], CW: editedCO3[1][i], Total: totalCO3[i] },
                co4: { UT2: editedCO4[0][i], CW: editedCO4[1][i], Total: totalCO4[i] },
                co5: { CW: editedCO5[0][i], Total: totalCO5[i] },
                co6: { CW: editedCO6[0][i], Total: totalCO6[i] }
            };
            StudentDetails.push(rowData);
        }

        console.log("All Row data:", StudentDetails);
    };






    return (
        <div className='mt-5 ms-4 '>
            <span className='container-md mb-5' style={{ border: "2px solid red", padding: "20px" }}>
                <span className='fs-4 fw-bold'>Enter Total Number Of Students</span>
                <span>
                    <input
                        type="number"
                        className='ms-4 py-2'
                        value={totalStudents}
                        onChange={handleInputChangetotal}
                        placeholder="Enter total number of students"
                    />
                </span>
            </span>


            <div className="table-container">

                <table className="table table-hover table-light table-bordered w-100 mt-5">
                    <thead className='ms-2 sticky-top'>
                        <tr className='ms-2 text-center table-danger sticky-top'>
                            <th scope="col">Sr.no </th>
                            <th scope="col" style={{ minWidth: "150px" }}>PRN No.</th>
                            <th scope="col" style={{ minWidth: "150px" }}>Roll No.</th>
                            <th scope="col" style={{ minWidth: "250px" }}>Student Name</th>
                            <th scope="col">ESE(70)</th>
                            <th scope="col">InSem(30)</th>
                            <th scope="col">PR/OR(25)</th>
                            <th scope="col">TermWork(25)</th>
                            <th scope="col">Total(150)</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO1<br />UT-1(30)</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO1<br />CW</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO1<br />Total</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO2<br />UT1</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO2<br />CW</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO2<br />Total</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO3<br />UT2</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO3<br />CW</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO3<br />Total</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO4<br />UT2</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO4<br />CW</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO4<br />Total</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}><br />{ }</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO5<br />CW</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO5<br />Total</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}><br />{ }</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO6<br />CW</th>
                            <th className='text-center' scope='col' style={{ minWidth: "100px" }}>CO6<br />Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(totalStudents)].map((_, index) => (
                            <tr className='text-center' key={index}>
                                <th scope="row" className='text-center'><span>{index + 1}</span><span><button
                                    className="btn btn-outline-primary border border-3 btn-sm ms-2"
                                    onClick={() => {
                                        editIndex === index ? handleSave(index) : handleEdit(index);
                                    }}
                                >
                                    {editIndex === index ? "Save" : "Edit"}
                                </button></span></th>

                                {/* PRN NO */}
                                <td><span>
                                    {editIndex === index ? (
                                        <input type="text" className="form-control form-control-sm" value={editedPRN[index]} onChange={(event) => handleInputChange2(event, index)} style={{ maxWidth: "150px" }} />
                                    ) : (
                                        <span>{prn[index]}</span>
                                    )}
                                </span></td>

                                {/* ROLL NO */}
                                <td><span>
                                    {editIndex === index ? (
                                        <input type="text" className="form-control form-control-sm" value={editedRoll[index]} onChange={(event) => handleInputChange1(event, index)} style={{ maxWidth: "150px", position: "sticky" }} />
                                    ) : (
                                        <span>{roll[index]}</span>
                                    )}
                                </span></td>

                                {/* NAME */}
                                <td><span>
                                    {editIndex === index ? (
                                        <input type="text" className="form-control form-control-sm " value={editedName[index]} onChange={(event) => handleInputChange(event, index)} style={{ fontSize: "16px" }} />
                                    ) : (
                                        <span>{name[index]}</span>
                                    )}
                                </span></td>

                                {/* ESE Marks */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedEse[index]} onChange={(event) => handleInputChange3(event, index)} style={{ maxWidth: "80px" }} max={70} min={0} />
                                        ) : (
                                            <span>{ese[index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* MIDSEM */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedMid[index]} onChange={(event) => handleInputChange4(event, index)} style={{ maxWidth: "80px" }} max={30} min={0} />
                                        ) : (
                                            <span>{midsem[index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* PR_OR */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedPror[index]} onChange={(event) => handleInputChange5(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{pr_or[index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* TERMWORK */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedTermwork[index]} onChange={(event) => handleInputChange6(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{termwork[index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total */}
                                <td className='text-center'>{total[index]}</td>

                                {/* CO1 */}
                                {/* UT-1 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO1[0][index]} onChange={(event) => handleInputChangeCO1UT1(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO1[0][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* ClassWork */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO1[1][index]} onChange={(event) => handleInputChangeCO1CW(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO1[1][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total */}
                                <td className='text-center'>{totalCO1[index]}</td>

                                {/* CO2 */}
                                {/* UT-1- Co2 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO2[0][index]} onChange={(event) => handleInputChangeCO2UT1(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO2[0][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* ClassWork-co2 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO2[1][index]} onChange={(event) => handleInputChangeCO2CW(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO2[1][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total -co2*/}
                                <td className='text-center'>{totalCO2[index]}</td>

                                {/* CO3 */}
                                {/* UT-2- Co3 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO3[0][index]} onChange={(event) => handleInputChangeCO3UT2(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO3[0][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* ClassWork-co3 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO3[1][index]} onChange={(event) => handleInputChangeCO3CW(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO3[1][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total -co3*/}
                                <td className='text-center'>{totalCO3[index]}</td>

                                {/* CO4 */}
                                {/* UT-2- Co4 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO4[0][index]} onChange={(event) => handleInputChangeCO4UT2(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO4[0][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* ClassWork-co4 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO4[1][index]} onChange={(event) => handleInputChangeCO4CW(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO4[1][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total -co4*/}
                                <td className='text-center'>{totalCO4[index]}</td>

                                {/* CO5 */}
                                {/* empty col*/}
                                <td className='text-center'><span>{ }</span></td>

                                {/* ClassWork-co5 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO5[0][index]} onChange={(event) => handleInputChangeCO5CW(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO5[0][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total -co5*/}
                                <td className='text-center'>{totalCO5[index]}</td>

                                {/* CO6 */}
                                {/* empty col*/}
                                <td className='text-center'><span>{ }</span></td>

                                {/* ClassWork-co6 */}
                                <td className='text-center'>
                                    <span>
                                        {editIndex === index ? (
                                            <input type="number" className="form-control form-control-sm " value={editedCO6[0][index]} onChange={(event) => handleInputChangeCO6CW(event, index)} style={{ maxWidth: "80px" }} max={25} min={0} />
                                        ) : (
                                            <span>{CO6[0][index]}</span>
                                        )}
                                    </span>
                                </td>

                                {/* Total -co6*/}
                                <td className='text-center'>{totalCO6[index]}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='text-center mt-3'>
                    <button
                        className="btn btn-primary"
                        onClick={handleAllRowsSubmit}
                    >
                        Submit All Rows
                    </button>
                </div>
            </div>
        </div>
    );

}

export default StudentDetail;
