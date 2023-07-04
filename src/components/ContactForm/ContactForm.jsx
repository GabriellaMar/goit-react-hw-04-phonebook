import { useState } from "react";
 import PropTypes from 'prop-types';
 import styles from './ContactForm.module.css'




export const ContactForm =({contacts, addUserContact})=>{
const[number, setNumber] = useState('');
const [name, setName] = useState('');

 const handleChange = (e) => {
  switch( e.target.name){
    case 'name':
      setName(e.target.value);
      break;
    case 'number':  
      setNumber(e.target.value);
    break;

    default:
      return
  }
}

const handleSubmit = (e) => {
       e.preventDefault();
       const isExist = contacts.find(contact => contact.name === name);
  
       if (isExist) {
        alert(`${name} is already in contacts.`);
        setName('');
        setNumber('');
        return;
      }
       addUserContact({
               name,
               number,
             })
            
             setName('');
             setNumber('');
     }

  return  <>
           <form className={styles.contactForm} onSubmit={handleSubmit}>
              <label className={styles.formLabel}>
               Name
               <input className={styles.formInput}
                 type="text"
                 name="name"
                 // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 value={name}
                 onChange={handleChange}
                    />
               </label>
               <label className={styles.formLabel}>
               Number
               <input className={styles.formInput}
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                 value={number}
                 onChange={handleChange}
                 />
               </label>
            <button className={styles.formAddBtn} type="submit">Add contact </button>
          </form>
        </>
}


 ContactForm.propTypes ={
   addUserContact: PropTypes.func.isRequired,
 }
