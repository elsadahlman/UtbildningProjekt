import { useEffect, useState } from "react";
import styled from "styled-components";
import Company from "./models/Company";
import { Companies } from "./components/Companies";

const App = () => {

    const [companies, setCompanies] = useState<Company[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
      const loadData = async () => {
          setLoading(true);
          const res = await fetch(`http://localhost:5014/api/companies`);
          const data = await res.json();
          console.log("response", data);
          setCompanies(data);
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
              
          
              <Companies companies={companies} setCompanies={setCompanies}/>


          </StyledApp>
          </>
      )
  }
export default App