type CompanyCreationDto = {
    name: string,
    address: string,
    country: string,
    employees: Employee[]
}

type Employee = {

}


export const getCompanies = async () => {
    await fetch(`http://localhost:5014/api/companies`)
    .then((x) => x.json())
    .then((x) => {return x});
}

export const postCompany = async (data: CompanyCreationDto) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    await fetch(`http://localhost:5014/api/companies`, requestOptions).then((x) => {x.json()}).then((x) => {return x});
}

export const getEmployeesByCompanyId = async (id: Number) => {
    await fetch(`http://localhost:5014/api/employees/${id}`)
    .then((x) => x.json())
    .then((x) => {return x});
}