import React from 'react';
import './UserAddForm.css';
import { Form, Button, Header, Icon, Message } from 'semantic-ui-react';
import {isEmail,  isURL, isInt} from 'validator'

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary: '', 
            image: '',
            errorEmail: true,
            nameError: true,
            linkError: true,
            salaryError: true,     
            disabled: true,
        };
    }

    

    updateName(event) {
        this.setState({name: event.target.value}, () => {
            
             this.state.name.length === 0 && this.state.name.length > 15
            ? this.setState({nameError:true}, () => this.validator())
            : this.setState({nameError: false}, () => this.validator()) 
    })
}
    updateImg(event) {
        this.setState({image: event.target.value}, () => {
            isURL(this.state.image) 
            ? this.setState({linkError:false}, () => this.validator()) 
            : this.setState({linkError:true}, () => this.validator())
    })
}

    updateSalary(event) {
        this.setState({salary: event.target.value}, () => {
            isInt(this.state.salary, { min: 1000, max: 999999 }) 
            ? this.setState({salaryError:false}, () => this.validator()) 
            : this.setState({salaryError: true}, () => this.validator())
    })
}

    updateEmail(event) {
        this.setState({email: event.target.value}, () => {
            isEmail(this.state.email) 
            ? this.setState({errorEmail:false}, () => this.validator()) 
            : this.setState({errorEmail:true}, () => this.validator())
        })
        
            
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }
    
    validator() {
       
        !this.state.errorEmail && !this.state.linkError && !this.state.salaryError && !this.state.nameError 
        ? this.setState({disabled: false})
        : this.setState({disabled:true})
    }

 


    render() {
        const {name, email, isGoldClient, salary, image} = this.state; 
       
        return (
            
            <Form 
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salary, image)}
            >
                <Header  as='h2' icon textAlign='center' >
                    <Icon size="tiny" name='user plus' circular />
                    <Header.Content>Adaugă utilizatori</Header.Content>
                </Header>
                <Form.Field error = {this.state.nameError && true}>
                                            
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                </Form.Field>
                <Form.Field error = {this.state.errorEmail && true}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                </Form.Field>
                <Form.Field error = {this.state.salaryError && true}>
                <label htmlFor="salary">Salariu:</label>
                <input
                    type="number"
                    name="salary"
                    onChange={(event) => this.updateSalary(event)}
                />
                </Form.Field>
                <Form.Field error = {this.state.linkError && true}>
                <label htmlFor="linkImg">Link imagine:</label>
                <input
                    type="text"
                    name="linkImg"
                    onChange={(event) => this.updateImg(event)}
                />
                </Form.Field>
                <Form.Field>
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                </Form.Field>
              
                <Button  disabled={this.state.disabled}
                        primary type="submit">Introdu utilizatorul</Button>
            </Form>
        )
    }
}

export default UserAddForm;