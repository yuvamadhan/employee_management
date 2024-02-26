import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Data = () => {

    const [emps,setEmp]=useState([])

    useEffect(()=>{
        const fetchEmps=async()=>{
            try {
                const res=await axios.get("https://employee-management-ehw7.onrender.com/getdata");
                console.log(res.data)
                setEmp(res.data);
                
            } catch (e) {
                console.log(e)
            }
        }
        fetchEmps();
    },[])
    console.log(emps)
 return (
        <div id='finemp'>
            <h1 id='tit1'>Employee</h1>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Dept</th>
                    <th>Dob</th>
                    <th>Gender</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp=>(
                        <tr>
                            <td>{emp.employeename}</td>
                            <td>{emp.employeeidnumber}</td>
                            <td>{emp.department}</td>
                            <td>{emp.dateofbirth}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.designation}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button id='add' className='button'><Link to="/first-page">ADD</Link></button>
        </div>
)
}

export default Data