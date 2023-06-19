import { SubmitHandler, useForm } from "react-hook-form"
type Inputs = {
    name: string,
    address: string,
    country: string
}

type CompanyCreationDto = {
    name: string,
    address: string,
    country: string,
    employees: Employee[]
}

type Employee = {

}

export const CompanyCreationForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CompanyCreationDto>()

    const postData = async (data: CompanyCreationDto) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        // const res = await fetch(`http://localhost:5014/api/companies`, requestOptions).then((x) => {const output = x.json()}).then((x) => {return x});
        await fetch(`http://localhost:5014/api/companies`, requestOptions).then((x) => {x.json()}).then((x) => {return x});
        // const output = await res.json();

        // return output;
    }
    
    const onSubmit: SubmitHandler<CompanyCreationDto> = (data) => {
        console.log("Input: ", data);
        data.employees = [];
        console.log(postData(data));
    }

    return (
        <>
            <h1>Skapa företag</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label>Namn:</label>
                        {errors.name?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i företagets namn</div>}
                        <input
                            {...register("name", { required: true })}
                            type="text"
                        ></input>
                    </div>

                    <div>
                        <label>Adress:</label>
                        {errors.address?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i företagets adress</div>}

                        <input
                            {...register("address", { required: true })}
                            type="text"></input>
                    </div>

                    <div>
                        <label>Land:</label>
                        {errors.country?.type === "required" && <div style={{ color: "red" }}>Du har inte fyllt i landet företaget är baserat i</div>}

                        <input
                            {...register("country", { required: true })}
                            type="text"></input>
                    </div>

                <button type="submit">Logga in</button>
            </form>
        </>
        )
}