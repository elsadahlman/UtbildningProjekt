import Company from "../../models/Company";

const CompanyView = (props: {company: Company}) => {

    const {company} = props;
    // Använd state för att visa/toggla detaljer

    return (
        <>
        <h3>{company.name}</h3>
        <p>Address: {company.address}</p>
        <p>Country: {company.country}</p>
        <ul>{
                company.employees.map((employee) => 
                    <li>{employee.name}</li>
                )
            }
        </ul>

        </>
    )
}

export default CompanyView