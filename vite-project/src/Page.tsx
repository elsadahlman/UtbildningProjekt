import { useEffect, useState } from "react";

type PageProps = {
    title: string,
    limit: number,
    children: React.ReactNode
}

type CatFact = {
    fact: string,
    length: number
}

const Page = ({ title, children, limit }: PageProps) => {

    const [isActive, setIsActive] = useState(false);
    const [catFacts, setCatFacts] = useState<CatFact[]>([]);
    const [isLoadingCatFacts, setIsLoadingCatFacts] = useState(true);
    
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://catfact.ninja/facts?limit=${limit}`);
            const data = await res.json();
            setCatFacts(data.data);
            setIsLoadingCatFacts(false);
        }
        setIsLoadingCatFacts(true);
        loadData();
    }, [ limit ])

    console.log('catFacts', catFacts);

    return (
        <>
            <h1>{title}</h1>
            <p>{children}</p>
            <p>{isActive && <p>Hej</p>}</p>
            <p>Limit: {limit}</p>
            {isLoadingCatFacts ? "Laddar..." :
                <ul>
                    {
                        catFacts.map((catFact) => <li>{catFact.fact}</li>)
                    }
                </ul>
            }
            
        </>
    )
}

export default Page;