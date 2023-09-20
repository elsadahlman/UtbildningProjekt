import Company from "../models/Company";
import { CompanyInfo } from "./CompanyInfo";

export const CompaniesList = ({companies, onDelete}: {companies:Company[],  onDelete: (id: string) => void }) => {

    const companyArray: Company[] = companies;


    return (
    <>
        {
            companyArray.map((company: Company) => 
                <CompanyInfo key={company.id} company={company} onDelete={onDelete}/>
            )
        }
    </>
    )
};