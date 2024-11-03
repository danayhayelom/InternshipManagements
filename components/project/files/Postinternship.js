import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Postinternship() {
  const [inputs, setInputs] = useState([]);
  const [inpute2, setInput2] = useState([]);
  const [inpute3, setInput3] = useState([]);

  const datass = {
    companyname1: '',
    location1: '',
    numberOfstudent: '',
    Department: ''
  };

  const [submite1, setSubmite1] = useState(datass);
  const [submite, setSubmite] = useState(datass);

  function enter(e) {
    const { name, value } = e.target;
    setSubmite({ ...submite, [name]: value });
  }

  useEffect(() => {}, []);

  function enters(e) {
    const { name, value } = e.target;
    setSubmite1({ ...submite1, [name]: value });
  }

  const handleAddInpute = () => {
    setInputs((prevInputs) => [...prevInputs, '']);
    setInput2((prevInput2) => [...prevInput2, '']);
    setInput3((prevInput3) => [...prevInput3, '']);
  };

  const handleOpp = () => {
    const data1 = {
      companyname: submite.companyname1,
      companylocation: submite.location1,
      numberstudent: submite.numberOfstudent,
      department: submite.Department
    };

    const data2 = {
      companyname: submite1.companyname1,
      companylocation: submite1.location1,
      numberstudent: submite1.numberOfstudent,
      department: submite.Department
    };

    Axios.post("http://localhost:8080/api/v1/admin/postinternship", data1).then((response) => {
      console.log(response);
    });
    Axios.post("http://localhost:8080/api/v1/admin/postinternship", data2).then((response) => {
      console.log(response);
    });

    const count = [...inputs];
    for (let i = 0; i < count.length; i++) {
      const array1 = [...inputs];
      const array2 = [...inpute2];
      const array3 = [...inpute3];
      const data3 = {
        companyname: array1[i],
        companylocation: array2[i],
        numberstudent: array3[i],
        department: submite.Department
      };

      Axios.post("http://localhost:8080/api/v1/admin/postinternship", data3).then((response) => {
        console.log(response);
      });
    }
    alert("successfully Postinternship")
  };

  const handleChange1 = (index, event) => {
    const updateInputs = [...inputs];
    updateInputs[index] = event.target.value;
    setInputs(updateInputs);
  };

  const handleChange2 = (index, event) => {
    const updateInputs = [...inpute2];
    updateInputs[index] = event.target.value;
    setInput2(updateInputs);
  };

  const handleChange3 = (index, event) => {
    const updateInputs = [...inpute3];
    updateInputs[index] = event.target.value;
    setInput3(updateInputs);
  };

  return (
    <>
      <div className="container">
        <label> Choose Department </label>
        <select className="form-select" name="Department" value={submite.Department} onChange={enter}>
          <option value="">Select Department</option>
          <option value="Industrial Engineering">Industrial Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Electrical and Computer Engineering">Electrical and Computer Engineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
        </select>
        <br />

        <button className="btn btn-primary" onClick={handleAddInpute}>Add</button>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Company Location</th>
              <th>Number of Students</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="form-control" type="text" placeholder="Enter company name" name="companyname1" value={submite.companyname1} onChange={enter} />
              </td>
              <td>
                <input className="form-control" type="text" placeholder="Enter location name" name="location1" value={submite.location1} onChange={enter} />
              </td>
              <td>
                <input className="form-control" type="text" placeholder="Enter number of students" name="numberOfstudent" value={submite.numberOfstudent} onChange={enter} />
              </td>
            </tr>

            <tr>
              <td>
                <input className="form-control" type="text" placeholder="Enter company name" name="companyname1" value={submite1.companyname1} onChange={enters} />
              </td>
              <td>
                <input className="form-control" type="text" placeholder="Enter location name" name="location1" value={submite1.location1} onChange={enters} />
              </td>
              <td>
                <input className="form-control" type="text" placeholder="Enter number of students" name="numberOfstudent" value={submite1.numberOfstudent} onChange={enters} />
              </td>
            </tr>

            {inputs.map((input, index) => (
              <tr key={index}>
                <td>
                  <input className="form-control" value={input} onChange={(event) => handleChange1(index, event)} placeholder="Company name" />
                </td>
                <td>
                  <input className="form-control" value={inpute2[index]} onChange={(event) => handleChange2(index, event)} placeholder="Company location" />
                </td>
                <td>
                  <input className="form-control" value={inpute3[index]} onChange={(event) => handleChange3(index, event)} placeholder="Number of students" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success" onClick={handleOpp}>Submit Opportunity</button>
      </div>
    </>
  );
}

export default Postinternship;
