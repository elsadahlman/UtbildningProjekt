import { useEffect, useState } from "react";
import { CompanyCreationForm } from "./components/Forms/CompanyCreationForm";
import CompaniesView from "./components/Views/CompaniesView";
import Company from "./models/Company";

const App = () => {

  
      const [companies, setCompanies] = useState<Company[]>([]);
      
      useEffect(() => {
          const loadData = async () => {
              const res = await fetch(`http://localhost:5014/api/companies`);
              const data = await res.json();
              console.log("response", data);
              setCompanies(data);
  
          }
          loadData();
      }, [])
  
      console.log('Companies fetched:', companies);
  
      return (
          <>
              <CompanyCreationForm />
              <CompaniesView companies={companies} />
              
          </>
      )
  }
export default App