import Employee from "./Employee"

type Company = {
    id: string,
    name: string,
    address: string,
    country: string,
    employees: Employee[]
}

export default Company