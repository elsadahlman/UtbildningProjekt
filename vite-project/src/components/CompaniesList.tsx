import Company from "../models/Company";
import CompanyForUpdate from "../models/CompanyForUpdate";
import { CompanyInfo } from "./CompanyInfo";

export const CompaniesList = ({companies, onDelete, onUpdate}: {companies:Company[],  onDelete: (id: string) => void , onUpdate: (id:string, data:CompanyForUpdate) => void}) => {

    const companyArray: Company[] = companies;


    return (
    <>
        {
            companyArray.map((company: Company) => 
                <CompanyInfo key={company.id} company={company} onDelete={onDelete} onUpdate={onUpdate}/>
            )
        }
    </>
    )
};