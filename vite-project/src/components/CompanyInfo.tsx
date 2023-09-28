import styled from "styled-components";
import Company from "../models/Company";
import { useUserContext } from '../context/UserContext';
import { AddEmployeeForm } from "./AddEmployeeForm";
import CompanyForUpdate from "../models/CompanyForUpdate";


/* background-color: rgb(255,255,255, 0.95);
padding: 1em;
border: 1px solid #252926bb;
border-radius: 10px; */
const StyledCompanyView = styled.div`
margin-bottom: 1em;
`

const StyledRemoveCompanyButton = styled.button`
    font-size: 45px;
    font-weight: 600;
    display: inline-block;
    transform: rotate(45deg);
    color: #fff;
    background: transparent;
    border: none;
    padding:0;
    margin:0;
    position: relative;
    top:-0.5em;
    float: right;
    `

export const CompanyInfo = ({company, onDelete, onUpdate}: {company: Company, onDelete: (id: string) => void, onUpdate: (id:string, data:CompanyForUpdate) => void}) =>{
    
    const {userState} = useUserContext();

    return (
        <StyledCompanyView>
            <div className="common-box">
            {userState.isLoggedIn && <StyledRemoveCompanyButton type="button" className='remove-company-button' onClick={async () => onDelete(company.id)}>+</StyledRemoveCompanyButton>}
            <h2 className="company-header"> {company.name}</h2>
        
            <p><b>Location:</b> {company.address}</p>
            <hr/>
            <AddEmployeeForm company={company} onUpdate={onUpdate}></AddEmployeeForm>
            {company.employees.length ? (
                <>
                    <h3 className='employee-header'>Anställda:</h3>
                    <ul className="employee-list">{
                        company.employees.map((employee) => 
                            <li><b>{employee.name}</b>, {employee.position}</li>
                        )}
                    </ul>
                </>
            ) :  (
                <b>Inga anställda registrerade</b>
            )}
            
            </div>
        </StyledCompanyView>
    )
}
