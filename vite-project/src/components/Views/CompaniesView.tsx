import Company from "../../models/Company";

const CompaniesView = (props: {companies: Company[]}) => {

    const {companies} = props;

    return (
        <>
        <h1>Företagslista</h1>
            <ul>{
                companies.map((company) => 
                    <li>{company.name}</li>
                )
                }
            </ul>
        </>
    )
}

export default CompaniesView