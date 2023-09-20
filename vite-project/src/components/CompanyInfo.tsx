import styled from "styled-components";
import Company from "../models/Company";

const StyledCompanyView = styled.div`
background-color: #fff4b9;
padding: 10px;
border: 4px solid #ffa32d;
margin-bottom: 4px;
`

const StyledAddCompanyButton = styled.button`
background-color: #ff6bbf;
`


export const CompanyInfo = ({company, onDelete}: {company: Company, onDelete: (id: string) => void}) =>{
    

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
            <StyledAddCompanyButton type="button" onClick={async () => onDelete(company.id)}>Ta bort företag</StyledAddCompanyButton>

        </StyledCompanyView>
    )
}
