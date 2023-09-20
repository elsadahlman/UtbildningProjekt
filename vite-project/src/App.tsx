import { useEffect, useState } from "react";
import styled from "styled-components";
import Company from "./models/Company";
import { CompaniesList } from "./components/CompaniesList";
import { CreateCompanyForm } from "./components/CreateCompanyForm";
import { deleteCompanyById, getCompanies, postCompany } from "./services/companyService";
import CompanyForCreation from "./models/CompanyForCreation";

const App = () => {

    const [companies, setCompanies] = useState<Company[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const onClickDelete = async (id:string) =>{
        setLoading(true);
        try {
            await deleteCompanyById(id);
            await fetchCompanies();
        } catch (e) {
            console.log('Error when deleting company', e)
        }
        setLoading(false);
    }

    const onClickCreate = async (data: CompanyForCreation) =>{
        setLoading(true);
        try {
            await postCompany(data);
            await fetchCompanies();
        } catch (e) {
            console.log('Error when posting new company', e)
        }
        setLoading(false);
    }

    const fetchCompanies = async () => {
        const companies = await getCompanies();
        console.log(companies);
        setCompanies(companies);
    }

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await fetchCompanies();
            setLoading(false);
        }
        loadData();
    }, [])


    const StyledApp = styled.div`
        padding: 50px;
    `;
    //test
    return (
        <>
        {loading  && "Loading...."}

        <StyledApp>
            <h1>Companies</h1>
            
            <CreateCompanyForm onCreate={onClickCreate}/>
        
            <CompaniesList companies={companies} onDelete={onClickDelete}/>


        </StyledApp>
        </>
    )
}
export default App