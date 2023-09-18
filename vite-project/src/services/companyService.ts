import CompanyForCreation from "../models/CompanyForCreation";

export const getCompanies = async () => {
    await fetch(`http://localhost:5014/api/companies`)
    .then((x) => x.json())
    .then((x) => {return x});
}

export const postCompany = async (data: CompanyForCreation) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    await fetch(`http://localhost:5014/api/companies`, requestOptions).then((x) => {x.json()}).then((x) => {return x});
}

export const getEmployeesByCompanyId = async (id: string) => {
    await fetch(`http://localhost:5014/api/employees/${id}`)
    .then((x) => x.json())
    .then((x) => {return x});
}

export const deleteCompanyById = async (id: string) => {
    const requestOptions = {
        method: 'DELETE'
    }

    await fetch(`http://localhost:5014/api/companies/${id}`, requestOptions)
    .then((x) => x.json())
    .then((x) => {return x});
}