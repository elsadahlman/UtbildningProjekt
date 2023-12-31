import { SubmitHandler, useForm } from "react-hook-form";
import { postCompany } from "../../services/companyService";

import CompanyForCreation from "../../models/CompanyForCreation";

export const CompanyCreationForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CompanyForCreation>()

    const postData = async (data: CompanyForCreation) => {
        postCompany(data);
    }
    
    const onSubmit: SubmitHandler<CompanyForCreation> = (data) => {
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

                <button type="submit">Skapa företag</button>
            </form>
        </>
        )
}