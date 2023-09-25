import { useForm } from 'react-hook-form';
import CompanyForCreation from '../models/CompanyForCreation';
import EmployeeForCreation from '../models/EmployeeForCreation';
import { useUserContext } from '../context/UserContext';
import Company from '../models/Company';
import CompanyForUpdate from '../models/CompanyForUpdate';

export const AddEmployeeForm = ({company, onUpdate}: {company:CompanyForUpdate, onUpdate: (id:string, data:CompanyForUpdate) => void}) => {

    type FormValues = {
        name: string,
        age: number,
        position: string,
        email: string
    }
    const {userState} = useUserContext();
    
    const { register, handleSubmit } = useForm<FormValues>()
    
    const onSubmit = async (data:EmployeeForCreation) => {
        company.employees.push(data);
        console.log("company: ", company);
        console.log("data: ", data);
        onUpdate(company.id, company);
    }

    return (
        <>
            {
                userState.isLoggedIn  &&
                    ( <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder={"Name"} { ...register("name") } />
                            <input type="text" placeholder={"Age"} { ...register("age") } />
                            <input type="text" placeholder={"Position"} { ...register("position") } />
                            <input type="text" placeholder={"Email"} { ...register("email") } />
                            <button type="submit">Skicka</button>
                        </form>)
            }
        </>
    )
    
}