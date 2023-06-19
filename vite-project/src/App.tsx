import { useEffect, useState } from "react";
import { CompanyCreationForm } from "./components/Forms/CompanyCreationForm";
import CompaniesView from "./components/Views/CompaniesView";
import Company from "./models/Company";
import CompanyView from "./components/Views/CompanyView";

const App = () => {

  
      const [companies, setCompanies] = useState<Company[]>([]);
      const [loading, setLoading] = useState(true);
      
      useEffect(() => {
          const loadData = async () => {
              const res = await fetch(`http://localhost:5014/api/companies`);
              const data = await res.json();
              console.log("response", data);
              setCompanies(data);
              setLoading(false);
          }
          loadData();
      }, [])
  
      console.log('Companies fetched:', companies);
  
      return (
          <>
              <h1>Companies</h1>
              <CompanyCreationForm />

              {(loading ? 
              <p>"laddar.."</p>
              : <><CompaniesView companies={companies} /> <CompanyView company = {companies[0]}/></>)}
              
          </>
      )
  }
export default App