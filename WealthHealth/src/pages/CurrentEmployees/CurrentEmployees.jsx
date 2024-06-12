import './CurrentEmployees.css';
import { Array } from "oc-component-ui-rb/common";
import { useAtom } from 'jotai';
import { employeesAtom } from '../../Atom/employeesAtom';

const columns = [
    { header: "Nom", accessor: "lastName" },
    { header: "Prenom", accessor: "firstName" },
    { header: "Date de Naissance", accessor: "dateOfBirth" },
    { header: "Début de contrat", accessor: "startDate" },
    { header: "Rue", accessor: "street" },
    { header: "Pôle", accessor: "department" },
    { header: "Ville", accessor: "city" },
    { header: "zipCode", accessor: "zipCode" }
];

function CurrentEmployees() {
    const [employees] = useAtom(employeesAtom);

    return (
        <div className='current-employee'>
            <h1>Liste des employés</h1>
            <Array data={employees} columns={columns} />
        </div>
    );
}

export default CurrentEmployees;
