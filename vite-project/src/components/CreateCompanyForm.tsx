import { useForm } from 'react-hook-form';
import CompanyForCreation from '../models/CompanyForCreation';
import Employee from '../models/Employee';
import { useUserContext } from '../context/UserContext';

export const CreateCompanyForm = ({onCreate}: {onCreate: (data:CompanyForCreation) => void}) => {

    type FormValues = {
        name: string
        address: string
        country: string
        employees: Employee []
    }
    const {userState} = useUserContext();
    console.log(userState.isLoggedIn);
    
    const { register, handleSubmit } = useForm<FormValues>()
    
    const onSubmit = async (data:CompanyForCreation) => {
        onCreate(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={"Company name"} { ...register("name") } />
            <input type="text" placeholder={"Address"} { ...register("address") } />
            <input type="text" placeholder={"Country"} { ...register("country") } />
            <button type="submit">Skicka</button>
        </form>
    )
}