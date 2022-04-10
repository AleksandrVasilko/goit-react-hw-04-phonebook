import React from "react";
import s from './ContactsList.module.css'

const ContactsList = ({ contacts, onDeleteContact }) => (
    <div>
        <p className={s.title}>Contacts</p>
        <ul className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li
                    key={id}
                    className={s.contactList__item}>
                    
                    <span className={s.contactList__text}>{name}: </span>
                    <span className={s.contactList__text}>{number}</span>
                
                    <button
                        type="button"
                        className={s.contactList__button}
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

export default ContactsList;
