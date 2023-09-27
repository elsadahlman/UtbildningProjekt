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
                    ( 
                    <div>
                        <h3>Lägg till anställd</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='input' type="text" placeholder={"Name"} { ...register("name") } />
                            <input className='input' type="text" placeholder={"Age"} { ...register("age") } />
                            <input className='input' type="text" placeholder={"Position"} { ...register("position") } />
                            <input className='input' type="text" placeholder={"Email"} { ...register("email") } />
                            <p><button className='create-employee-button' type="submit">Lägg till</button></p>
                        </form>
                        </div>
                        )
            }
        </>
    )
    
}