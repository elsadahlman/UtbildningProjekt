import styled from "styled-components";
import Company from "../models/Company";
import { useUserContext } from '../context/UserContext';
import { AddEmployeeForm } from "./AddEmployeeForm";
import CompanyForUpdate from "../models/CompanyForUpdate";

const StyledCompanyView = styled.div`
background-color: rgb(255,255,255, 0.95);
padding: 1em;
border: 2px solid #8B776A;
border-radius: 10px;
margin-bottom: 1em;
`

const StyledAddCompanyButton = styled.button`
    font-size: 45px;
    font-weight: 600;
    display: inline-block;
    transform: rotate(45deg);
    color: #433123;
    background: transparent;
    border: none;
    padding:0px;
    margin:0;
    position: relative;
    top:-0.7em;
    float: right;
    `

export const CompanyInfo = ({company, onDelete, onUpdate}: {company: Company, onDelete: (id: string) => void, onUpdate: (id:string, data:CompanyForUpdate) => void}) =>{
    
    const {userState} = useUserContext();

    return (
        <StyledCompanyView>
            {userState.isLoggedIn && <StyledAddCompanyButton type="button" onClick={async () => onDelete(company.id)}>+</StyledAddCompanyButton>}
            <h2 className="company-header"> {company.name}</h2>
        
            <p><b>Location:</b> {company.address}</p>
            <hr/>
            <AddEmployeeForm company={company} onUpdate={onUpdate}></AddEmployeeForm>
            {company.employees.length ? (
                <>
                    <h3>Anställda:</h3>
                    <ul className="employee-list">{
                        company.employees.map((employee) => 
                            <li><b>{employee.name}</b>, {employee.position}</li>
                        )}
                    </ul>
                </>
            ) :  (
                <b>Inga anställda registrerade</b>
            )}
            

        </StyledCompanyView>
    )
}
