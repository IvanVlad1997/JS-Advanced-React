import React from 'react';
import './UserAddForm.css';
import { Form, Button, Header, Icon } from 'semantic-ui-react';
import { Formik } from 'formik'


const UserAddForm = (props) =>{
   
        return (
            <React.Fragment>
                 <Header  as='h2' icon textAlign='center' >
                        <Icon size="tiny" name='user plus' circular />
                        <Header.Content>Adaugă utilizatori</Header.Content>
                 </Header>
            <Formik
                initialValues = {{email: '', name: '', salary: '', isGoldClient: false, linkImg: '' }}
                validate = {values => {
                    const errors ={}
                
                    //validare email
                    if (!values.email)
                        errors.email = 'Required';
                    else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address'
                    }


                    //validare nume 
                    if (!values.name)
                        errors.name = 'Required'
                    else if (values.name.length < 3 || values.name.length > 20)
                      
                         errors.name = 'Lungime necorespunzătoare. Trebuie să fie mai mare de 3 mai mic de 20'
                    return errors
                }}
                onSubmit = {(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        props.submitAddForm( values.name, values.email, values.isGoldClient, values.salary, values.linkImg)
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting                    
                }) => (
                    <Form 
                    className="user-add-form"
                    onSubmit={handleSubmit}
                >
                     
                    <Form.Field error ={(touched.name && errors.name !== undefined)}>
                                                
                    <label htmlFor="name">Nume:</label>
                    <input
                        type="text"
                        name="name"
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        value = {values.name}
                    />
                    </Form.Field>

                    <Form.Field  error ={(touched.email && errors.email !== undefined) }>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        value = {values.email}
                       
                    />
                       </Form.Field>

                    <Form.Field  error ={(touched.salary && errors.salary !== undefined) }>
                    <label htmlFor="salary">Salariu:</label>
                    <input
                        type="number"
                        name="salary"
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        value = {values.salary}
                       
                    />
                      </Form.Field>
                    <Form.Field  error ={(touched.linkImg && errors.linkImg !== undefined) }>
                    <label htmlFor="linkImg">Link imagine:</label>
                    <input
                       
                       
                        type="text"
                        name="linkImg"
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        value = {values.linkImg}
                       
                    />
                      </Form.Field>
                    <Form.Field  error ={(touched.isGoldClient && errors.isGoldClient !== undefined) }>
                    <label htmlFor="isGoldClient">Este client Gold?</label>
                    <input
                        type="checkbox"
                        name="isGoldClient"
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                        value = {values.isGoldClient}
                       
                    />
                      </Form.Field>
                    
           
                  
                    <Button  
                        disabled={
                             (touched.name === undefined) || (errors.name !== undefined) ||
                             (touched.email === undefined) || (errors.email !== undefined) 
                        }
                            primary type="submit">Introdu utilizatorul
                    </Button>
                   
                          
                </Form>
    

                )}


            </Formik>

            
           
            </React.Fragment>
        )
    
}

export default UserAddForm;