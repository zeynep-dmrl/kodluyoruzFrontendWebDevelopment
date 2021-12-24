import {useState, useEffect} from 'react';
import './styleForm.css'

const initialFromValues = {fullName: "", phone_number:""};

function Form({addContact,  contacts}) {
    const [form, setForm] = useState(initialFromValues);

     //butona basildiginda
    useEffect(() => {
        // form içini temizleme
        setForm(initialFromValues);
    }, [contacts])

    //bir inputun içerigi degistiginde bunu state atama 
    const onChangeInput = (e) =>{
        setForm({...form,[e.target.name]: e.target.value});
    };

    //butona basildiginda
    const onSubmit = (e) => {
        e.preventDefault();   //form onSubmit yapıldıgında kullanılır
        
        if(form.fullName === '' || form.phone_number === ''){
            return false;
        }
        
        //atama islemi
        addContact([...contacts, form]);
       
    };



    return (
        <form onSubmit={onSubmit}>
            <div>
            <input 
            name='fullName' 
            placeholder='Full Name'
            value={form.fullName}
            onChange={onChangeInput}>

            </input>
            </div>
            <div>
            <input 
            name='phone_number' 
            placeholder='Phone Number'
            value={form.phone_number}
            onChange={onChangeInput}>

            </input>
            </div>
            <div>
                <button>Add</button>
            </div>
            
        </form>
    )
}
export default Form;