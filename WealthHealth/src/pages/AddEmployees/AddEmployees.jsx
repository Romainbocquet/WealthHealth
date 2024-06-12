import './AddEmployees.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import { Modal } from "oc-component-ui-rb";
import { Button } from "oc-component-ui-rb";
import { useAtom } from 'jotai';
import { employeesAtom } from '../../Atom/employeesAtom';

function AddEmployees() {
  const [open, setOpen] = useState(false)
  const [employees, setEmployees] = useAtom(employeesAtom);
  const [popinText, setPopinText] = useState('Employé ajouté');
  
  const handleButtonClick = (event) => {
    event.preventDefault();
  
    let firstNameInput = document.getElementById('username');
    let lastNameInput = document.getElementById('lastname');
    let dateOfBirthInput = document.getElementById('dateofbirth');
    let startDateInput = document.getElementById('startdate');
    let streetInput = document.getElementById('street');
    let cityInput = document.getElementById('city');
    let zipCodeInput = document.getElementById('zip-code');
    let departmentInput = document.getElementById('department');
  
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let dateOfBirth = dateOfBirthInput.value;
    let startDate = startDateInput.value;
    let street = streetInput.value;
    let city = cityInput.value;
    let zipCode = zipCodeInput.value;
    let department = departmentInput.value;
  
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
  
    if (!firstName || !lastName || !dateOfBirth || !startDate || !street || !city || !zipCode || !department) {
      setPopinText('Tous les champs doivent être remplis');
      setOpen(true);
      return;
    }
  
    setEmployees([...employees, employee]);
  
    firstNameInput.value = '';
    lastNameInput.value = '';
    dateOfBirthInput.value = '';
    startDateInput.value = '';
    streetInput.value = '';
    cityInput.value = '';
    zipCodeInput.value = '';
    departmentInput.value = 'Sales';

    setPopinText('Employé ajouté');
    setOpen(true);
  };  

  return (
    <div className='create-employee'>
      <h2>Create Employee</h2>
      <form id="create-employee">
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
      <div>
        <Button type='submit'onClick={handleButtonClick}>Save</Button>
      </div>
    </form>
    <Modal open={open} onClose={() => setOpen(false)} id="add-employee">
        <div id='modal-contain'>
          <h3 id='add-employee-popoin-text'>{popinText}</h3>
        </div>
    </Modal>
    </div>
  )
}

export default AddEmployees
