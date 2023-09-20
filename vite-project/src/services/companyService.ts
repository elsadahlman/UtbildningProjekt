import CompanyForCreation from "../models/CompanyForCreation";

export const getCompanies = async () => {
    const response = await fetch(`http://localhost:5014/api/companies`)
    return await response.json()
}

export const postCompany = async (data: CompanyForCreation) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const response = await fetch(`http://localhost:5014/api/companies`, requestOptions);
    if (!response.ok) {
        throw new Error('Unable to post new Company' )
    }
}

export const getEmployeesByCompanyId = async (id: string) => {
    const response = await fetch(`http://localhost:5014/api/employees/${id}`);
    if (!response.ok) {
        throw new Error('Unable to get employees' )
    }
    return response.json()
}

export const deleteCompanyById = async (id: string): Promise<void> => {
    const requestOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`http://localhost:5014/api/companies/${id}`, requestOptions)
    if (!response.ok) {
        throw new Error('Unable to delete ' + id)
    }
}