import EmployeeForCreation from "./EmployeeForCreation"

type CompanyForUpdate = {
    id: string,
    name: string,
    address: string,
    country: string,
    employees: EmployeeForCreation[]
}

export default CompanyForUpdate