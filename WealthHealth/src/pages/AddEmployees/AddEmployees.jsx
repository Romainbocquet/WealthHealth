import './AddEmployees.css';
import { useRef, useState } from 'react';
import Input from '../../components/Input/Input';
import Popin from "../../components/Popin/Popin";

function AddEmployees() {

  const popinRef = useRef(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
  
    const firstNameInput = document.getElementById('username');
    const lastNameInput = document.getElementById('lastname');
    const dateOfBirthInput = document.getElementById('dateofbirth');
    const startDateInput = document.getElementById('startdate');
    const streetInput = document.getElementById('street');
    const cityInput = document.getElementById('city');
    const zipCodeInput = document.getElementById('zip-code');
    const departmentInput = document.getElementById('department');
  
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const dateOfBirth = dateOfBirthInput.value;
    const startDate = startDateInput.value;
    const street = streetInput.value;
    const city = cityInput.value;
    const zipCode = zipCodeInput.value;
    const department = departmentInput.value;
  
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      zipCode
    };
  
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  
    firstNameInput.value = '';
    lastNameInput.value = '';
    dateOfBirthInput.value = '';
    startDateInput.value = '';
    streetInput.value = '';
    cityInput.value = '';
    zipCodeInput.value = '';
    departmentInput.value = 'Sales';
  
    popinRef.current.showPopin();
  }; 

  return (
    <div className='create-employee'>
      <h2>Create Employee</h2>
      <form id="create-employee" onSubmit={handleButtonClick}>
      <Input
        type="text"
        id="username"
        label="First Name"
      />
      <Input
        type="text"
        id="lastname"
        label="Last Name"
      />
      <Input
        type="date"
        id="dateofbirth"
        label="Date of Birth"
      />
      <Input
        type="date"
        id="startdate"
        label="Start Date"
      />
      <fieldset className="address">
        <legend>Address</legend>
        <Input
          type="text"
          id="street"
          label="Street"
        />
        <Input
          type="text"
          id="city"
          label="City"
        />
        <Input
          type="number"
          id="zip-code"
          label="Zip Code"
        />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <button type="submit">Save</button>
    </form>
      <div>
        <Popin ref={popinRef}>
          <h1>Employee Created!</h1>
        </Popin>
      </div>
     
    </div>
  )
}

export default AddEmployees
