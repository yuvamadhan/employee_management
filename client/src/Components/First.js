import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './First.css';

function First() {
  const [employeeData, setEmployeeData] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    dob: '',
    gender: ''
  });

  var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear()-18;
  
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
  
    var maxDate = year + '-' + month + '-' + day;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  useEffect(() => {
    console.log(employeeData);
  }, [employeeData]);

  return (
    <div className='container'>
      <h2 className='title'>Employee Details Form - Page 1</h2>
      <form className='form'>
        <label className='inputs' >
          Employee Name:
          <input type="text" name="employeeName" value={employeeData.employeeName} onChange={handleChange} required />
        </label>
        <label className='inputs'>
          Employee ID:
          <input type="text" name="employeeId" value={employeeData.employeeId} onChange={handleChange} required />
        </label>
        <label className='inputs'>
          department:
          <select name="department" value={employeeData.department} onChange={handleChange} required>
            <option value="">Select department</option>
            <option value="HR">HR</option>
            <option value="Developing">Developing</option>
            <option value="sales">sales</option>
            
          </select>
        </label>
        <label className='inputs'>
          Date of Birth:
          <input type="date" name="dob" value={employeeData.dob} onChange={handleChange} required max={maxDate} />
        </label>
        <label className='inputs'>
          Gender:
          <select name="gender" value={employeeData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <Link
          to={{
            pathname: '/second-page',
            
          } }
        state={employeeData}
        >
          Next
        </Link>
      </form>
    </div>
  );
}

export default First;
