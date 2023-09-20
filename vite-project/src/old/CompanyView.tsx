import Company from "../../../../models/Company";
import styled from "styled-components";
import { deleteCompanyById, getCompanies } from "../../../../services/companyService";
import { SubmitHandler } from "react-hook-form";

const CompanyView = (props: {company: Company, setCompanyList: any}) => {

    const {company, setCompanyList} = props;
    // Använd state för att visa/toggla detaljer

    const deleteData = async (id: string) => {
        deleteCompanyById(id);
        setCompanyList(getCompanies());
    }
    

    const onClick= (id : string) => {
        console.log("Input: ", id);

        console.log(deleteData(id));
    }


    const StyledCompanyView = styled.div`
        background-color: #fff4b9;
        padding: 10px;
        border: 4px solid #ffa32d;
        margin-bottom: 4px;
    `

    const StyledAddCompanyButton = styled.button`
        background-color: #ff6bbf;
    `

    return (
        <StyledCompanyView>
        <h3>{company.name}</h3>
        <p><b>Location:</b> {company.address}</p>
        <ul>{
                company.employees.map((employee) => 
                    <li>{employee.name}</li>
                )
            }
        </ul>
        <StyledAddCompanyButton type="button" onClick={() => onClick(company.id)}>Ta bort företag</StyledAddCompanyButton>

        </StyledCompanyView>
    )
}

export default CompanyView