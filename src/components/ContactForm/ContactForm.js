import React, { Component } from "react";
import s from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChangeName = event => {
        this.setState({ name: event.currentTarget.value })
    };
    
    handleChangeNumber = event => {
        this.setState({ number: event.currentTarget.value })
    };
    
    handleSubmit = event => { 
        event.preventDefault();

        //console.log(this.state);

        this.props.onSubmit(this.state.name, this.state.number);
       
        this.setState({name: ''})
        this.setState({number: ''})
    }

    render() {
        return (
            <div>
                <p className={s.title}>Phonebook</p>
                <form onSubmit={this.handleSubmit} className={s.formFild}>
                    <p className={s.inputTitle}>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChangeName}
                        className={s.inputField}
                    />
                    <p className={s.inputTitle}>Number</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChangeNumber}
                        className={s.inputField}
                    />
                    <button type="submit" className={s.formButton}>Add contact</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
