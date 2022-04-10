import React, { useState } from "react";
import s from './ContactForm.module.css'

export default function ContactForm({onSubmit}) {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
       
    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break
            default:
                return;
        }
    }
    
    const handleSubmit = event => { 
        event.preventDefault();
        onSubmit({ name, number });
       
        setName('')
        setNumber('')
    }

    
        return (
            <div>
                <p className={s.title}>Phonebook</p>
                <form onSubmit={handleSubmit} className={s.formFild}>
                    <p className={s.inputTitle}>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                        className={s.inputField}
                    />
                    <p className={s.inputTitle}>Number</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChange}
                        className={s.inputField}
                    />
                    <button type="submit" className={s.formButton}>Add contact</button>
                </form>
            </div>
        );
    }

