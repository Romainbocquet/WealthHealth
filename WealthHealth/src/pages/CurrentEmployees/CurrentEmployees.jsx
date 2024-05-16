import './CurrentEmployees.css';
import { useEffect, useState } from 'react';
import Array from "../../components/Array/Array";

function CurrentEmployees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    return (
        <div>
            <h1>Liste des employés</h1>
            <Array data={employees} />
        </div>
    );
}

export default CurrentEmployees;