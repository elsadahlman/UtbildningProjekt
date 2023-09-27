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
        <>
            {
                userState.isLoggedIn  &&
                    ( 
                    <div className="create-company">
                        <h2>Lägg till nytt företag</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='input' type="text" placeholder={"Company name"} { ...register("name") } />
                            <input className='input' type="text" placeholder={"Address"} { ...register("address") } />
                            <input className='input' type="text" placeholder={"Country"} { ...register("country") } />
                            <p><button className='create-company-button' type="submit">Lägg till</button></p>
                        </form>
                    </div>
                    )
            }
        </>
    )
    
}