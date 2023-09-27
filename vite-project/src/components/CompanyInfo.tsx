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
background-color: red;
position: fixed;
top: 20px;
right:20px;
`


export const CompanyInfo = ({company, onDelete, onUpdate}: {company: Company, onDelete: (id: string) => void, onUpdate: (id:string, data:CompanyForUpdate) => void}) =>{
    
    const {userState} = useUserContext();

    return (
        <StyledCompanyView>
            <h2>{company.name}</h2>
            {userState.isLoggedIn && <StyledAddCompanyButton type="button" onClick={async () => onDelete(company.id)}>X</StyledAddCompanyButton>}

            <p><b>Location:</b> {company.address}</p>
            <hr/>
            <AddEmployeeForm company={company} onUpdate={onUpdate}></AddEmployeeForm>
            {company.employees.length && (
                <>
                    <h3>Anställda</h3>
                    <ul className="employee-list">{
                        company.employees.map((employee) => 
                            <li><b>{employee.name}</b>, {employee.position}</li>
                        )}
                    </ul>
                 </>
            )}
            {!company.employees.length && (
                <b>Inga anställda registrerade</b>
            )}
            

        </StyledCompanyView>
    )
}
