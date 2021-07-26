import React, { Component } from 'react';
import styles from './form.module.css';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
    state = {
        id: 0,
        name: '',
        number: ''
    }

    InputId = uuidv4();

    handleChange = e => {
        const { name, value} = e.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.submit(this.state);

        this.reset();      
    }

    reset = () => {
        this.setState({name: '', number: '',})
    }
    
    render() {
        const { name, number } = this.state;
        return (
        <>
        <h1>{this.props.text}</h1>
        
        <form onSubmit={this.handleSubmit}  autoComplete="off" className={styles.phoneBookForm}>
            <label htmlFor={this.InputId} className={styles.formLabel}>Name</label>
                <input
                    className={styles.formInput}
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    id={this.InputId}
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            <label htmlFor={this.InputId} className={styles.formLabel}>Number</label>
                <input
                    className={styles.formInput}
                    type="tel"
                    name="number"
                    placeholder="Enter number"
                    id={this.InputId}
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            
          <button type="submit" className={styles.formBtn}>Add contact</button>          
        </form>
        </>
        )
    }        
}

export default Form;