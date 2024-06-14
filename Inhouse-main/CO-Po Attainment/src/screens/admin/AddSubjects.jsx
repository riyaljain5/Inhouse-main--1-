import React, { useState } from 'react';
import axios from 'axios';

function AddSubjects() {
  const [semNumber, setSemNumber] = useState('');
  const [rows, setRows] = useState([{ subject_code: '', subject_name: '' }]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSemChange = (e) => {
    setSemNumber(e.target.value);
  };

  const handleAddRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index + 1, 0, { subject_code: '', subject_name: '' });
    setRows(newRows);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);

    if (field === 'subject_code' && value !== '' && index === rows.length - 1) {
      handleAddRow(index);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredRows = rows.filter(row => row.subject_code !== '' && row.subject_name !== '');
    const data = {
      Sem_number: semNumber,
      subjects: filteredRows
    };
  
    try {
      const response = await axios.post('http://localhost:8000/addSubjects', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setSubmittedData(data);
    } catch (error) {
      console.error('There was a problem with your Axios request:', error);
    }
  
    console.log('Submitted Data:', data);
  };
  

  

  return (
    <div className='ms-5'>
      <div className='fs-2 mt-5 text-primary'>
        Enter The Subjects To ADD:
      </div>
      <div className='fs-3 mt-5 border p-3 border-primary-subtle w-25 d-flex justify-content-between'>
        Enter Sem :
        <input type='number' min={1} max={8} value={semNumber} onChange={handleSemChange} />
      </div>
      <div className='fs-3 mt-5'>
        ADD Subjects:
      </div>
      <form onSubmit={handleSubmit}>
        <table className='table table-hover table-light table-bordered w-50 mt-5'>
          <thead>
            <tr className='ms-2 text-center table-primary sticky-top'>
              <th>Subject Code</th>
              <th>Subject Name</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="number"
                    name="subject_code"
                    className='w-50 border-0'
                    value={row.subject_code}
                    onChange={(e) => handleInputChange(index, 'subject_code', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="subject_name"
                    value={row.subject_name}
                    onChange={(e) => handleInputChange(index, 'subject_name', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
      {submittedData && (
        <div className='mt-5'>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AddSubjects;
