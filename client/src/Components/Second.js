import axios from 'axios';
import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import './Second.css';

function Second(props) {
  const location = useLocation();
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  
  const employeeData = location.state;
  const navi=useNavigate();
  console.log(employeeData)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...employeeData,
      designation,
      salary
    };

    try {
      console.log(dataToSend)
      const response = await axios.post('https://employee-management-ehw7.onrender.com/postData', dataToSend)
      if(response.data==="0") alert("Invalid Salary")
      else{
    alert("Added")
    navi("/");
      console.log('Data submitted successfully:', response.data);
      }
      
    } catch (error) {
      
      console.error('Error submitting data:', error);
      alert("Not Submitted");
    }
  };

  return (
    <div className='container'>
      <h2 className='tittle'>Employee Details Form - Page 2</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label className='inputs'>
          Designation:
          <select type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} required >
          <option value="">Select Designation</option>
            <option value="TL">TL</option>
            <option value="admin">Admin</option>
            <option value="Manger">Manager</option>
            </select>
        </label>
        <label className='inputs'>
          Salary:
          <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Second;
