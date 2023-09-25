import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Company from "./models/Company";
import { CompaniesList } from "./components/CompaniesList";
import { CreateCompanyForm } from "./components/CreateCompanyForm";
import { deleteCompanyById, getCompanies, postCompany } from "./services/companyService";
import CompanyForCreation from "./models/CompanyForCreation";
import UserContextProvider from './context/UserContextProvider';
import { LoginButton } from "./components/LoginButton";


const App = () => {

    const [companies, setCompanies] = useState<Company[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const onClickDelete = async (id:string) =>{
        setLoading(true);
        try {
            await deleteCompanyById(id);
            await fetchCompanies();
        } catch (e) {
            console.log('Error when deleting company.', e)
        }
        setLoading(false);
    }

    const onClickCreate = async (data: CompanyForCreation) =>{
        setLoading(true);
        try {
            await postCompany(data);
            await fetchCompanies();
        } catch (e) {
            console.log('Error when posting new company.', e)
        }
        setLoading(false);
    }

    const fetchCompanies = useCallback(async () => {
        setLoading(true);
        try {
            const newCompanies = await getCompanies();
            setCompanies(newCompanies);
        } catch (e) {
            console.log('Error when posting new company', e)
        }
        setLoading(false);

    }, [])

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await fetchCompanies();
            setLoading(false);
        }
        loadData();
    }, [fetchCompanies]) 

    const StyledApp = styled.div`
        padding: 50px;
    `;
//useUserContext ska användas i komponenter som är barn till providern, och inte på den här nivån, se ex i CreateCompanyForm.
// Man använder sin provider för att wrappa och då kommer de åt den aktuella contexten. 
    return (
        <UserContextProvider>  
            {loading  && "Loading...."}
            <StyledApp>
                <h1>Companies</h1>
                <LoginButton/>
                <CreateCompanyForm onCreate={onClickCreate}/>

                <CompaniesList companies={companies} onDelete={onClickDelete}/>
            </StyledApp>
        </UserContextProvider>
    )
}

export default App