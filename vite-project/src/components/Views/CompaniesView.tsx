import { useEffect, useState } from "react"

type PageProps = {
    title: string,
    children: React.ReactNode
}

type Company = {
    id: string,
    employees: any[],
    name: string,
    adress: string
}

const CompaniesView = ({ title, children}: PageProps) => {

    const [isActive, setIsActive] = useState(false);
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

    console.log('Companies', companies);

    return (
        <>
            <h1>{title}</h1>
            <p>{children}</p>
            <p>{isActive && <p>Hej</p>}</p>
            <ul>{
                companies.map((company) => 
                    <li>{company.name}</li>
                )
                }
            </ul>
        </>
    )
}