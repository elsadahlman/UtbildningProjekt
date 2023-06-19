import { useState } from "react";
import Company from "../../models/Company";
import CompanyView from "./CompanyView"

const CompaniesView = (props: {companies: Company[]}) => {


    const {companies} = props;

    return (
        <>
        <h1>Företagslista</h1>
            
        {
                
         companies.map(company => 

            <CompanyView company = {company}/>
            )  
        
        }

        </>
    )
}

export default CompaniesView