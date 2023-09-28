import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Company from "./models/Company";
import { CompaniesList } from "./components/CompaniesList";
import { CreateCompanyForm } from "./components/CreateCompanyForm";
import { deleteCompanyById, getCompanies, postCompany, updateCompanyById } from "./services/companyService";
import CompanyForCreation from "./models/CompanyForCreation";
import UserContextProvider from './context/UserContextProvider';
import { LoginButton } from "./components/LoginButton";
import "./general.css"
import CompanyForUpdate from "./models/CompanyForUpdate";


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

    const onClickUpdate = async (id: string, data: CompanyForUpdate) =>{
        setLoading(true);
        try {
            await updateCompanyById(id, data);
            await fetchCompanies();
        } catch (e) {
            console.log('Error when updating company.', e)
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

    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await fetchCompanies();
            setLoading(false);
        }
        loadData();
    }, [fetchCompanies]) 

    const StyledApp = styled.div`
        padding: 50px 0px;
    `;
//useUserContext ska användas i komponenter som är barn till providern, och inte på den här nivån, se ex i CreateCompanyForm.
// Man använder sin provider för att wrappa och då kommer de åt den aktuella contexten. 
    return (
        <UserContextProvider>  
            {loading  && "Loading...."}
                <div className="video-container">
                    <iframe src="https://www.youtube.com/embed/CTRmgF5N_h4?start=72&controls=0&autoplay=1&mute=1&playsinline=1&loop=1" ></iframe>  
                </div>
            <StyledApp className="app-over-video">
                <h1 className="header">Företagslistan</h1>
                <LoginButton/>
                
                <CreateCompanyForm onCreate={onClickCreate}/>

                <CompaniesList companies={companies} onDelete={onClickDelete} onUpdate={onClickUpdate}/>
            </StyledApp>
        </UserContextProvider>
    )
}

export default App