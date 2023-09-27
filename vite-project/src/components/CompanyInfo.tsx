import styled from "styled-components";
import Company from "../models/Company";
import { useUserContext } from '../context/UserContext';
import { AddEmployeeForm } from "./AddEmployeeForm";
import CompanyForUpdate from "../models/CompanyForUpdate";

const StyledCompanyView = styled.div`
background-color: #fff4b9;
padding: 10px;
border: 4px solid #ffa32d;
margin-bottom: 4px;
`

const StyledAddCompanyButton = styled.button`
background-color: #ff6bbf;
`


export const CompanyInfo = ({company, onDelete, onUpdate}: {company: Company, onDelete: (id: string) => void, onUpdate: (id:string, data:CompanyForUpdate) => void}) =>{
    
    const {userState} = useUserContext();

    return (
        <StyledCompanyView>
            <h3>{company.name}</h3>
            {userState.isLoggedIn && <StyledAddCompanyButton type="button" onClick={async () => onDelete(company.id)}>Ta bort företag</StyledAddCompanyButton>}

            <p><b>Location:</b> {company.address}</p>
            {/* <p>---------------------------------------------------------------</p> en divider */}
            <AddEmployeeForm company={company} onUpdate={onUpdate}></AddEmployeeForm>
            <ul>{
                    company.employees.map((employee) => 
                        <li>{employee.name}</li>
                    )
                }
            </ul>

        </StyledCompanyView>
    )
}
