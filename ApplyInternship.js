import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function ApplyInternship() {
  const [internships, setInternships] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const { username } = jwtDecode(token); 

  useEffect(() => {
    const loadInternships = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/api/v1/admin/all");
        setInternships(response.data);
        const initialValues = {};
        response.data.forEach(internship => {
          initialValues[internship.internship_id] = '';
        });
        setInputValues(initialValues);
      } catch (error) {
        console.error('Error loading internships:', error);
      }
    };
    
    loadInternships();
  }, []);

  const handleChange = (internshipId, e) => {
    setInputValues((prev) => ({ ...prev, [internshipId]: e.target.value }));
  };

  const applyForInternship = async (e) => {
    e.preventDefault();
    
    const applications = internships.map(internship => ({
      placeholder: inputValues[internship.internship_id],
      internship: {
        companyname: internship.companyname,
        companylocation: internship.companylocation,
        numberstudent: internship.numberstudent,
        department: internship.department
      },
      username: username
    }));

    try {
      await Promise.all(applications.map(data => 
        Axios.post("http://localhost:8080/api/v1/auth/applyinternship", data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      ));
      alert("Applications submitted successfully!");
      navigate('/success'); // Redirect on success
    } catch (error) {
      console.error('Error applying for internships:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Apply for Internship</h2>
      <form onSubmit={applyForInternship}>
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Company Location</th>
              <th>Company Name</th>
              <th>Department</th>
              <th>Number of Students</th>
              <th>Preference Order</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship.internship_id}>
                <td>{internship.companylocation}</td>
                <td>{internship.companyname}</td>
                <td>{internship.department}</td>
                <td>{internship.numberstudent}</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={inputValues[internship.internship_id] || ''}
                    onChange={(e) => handleChange(internship.internship_id, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" type="submit">Apply for Internship</button>
      </form>
    </div>
  );
}

export default ApplyInternship;
