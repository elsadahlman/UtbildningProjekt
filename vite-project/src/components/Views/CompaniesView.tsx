import { useState } from "react";
import Company from "../../models/Company";
import CompanyView from "./CompanyView"

const CompaniesView = (props: {companies: Company[]}) => {

    const {companies} = props;
    const [companyList, setCompanyList] = useState(companies);

    return (
        <>
        <h1>Företagslista</h1>
            
        {
                
                companyList.map(company => 

            <CompanyView company = {company} setCompanyList={setCompanyList}/>
            )  
        
        }

        </>
    )
}

export default CompaniesView