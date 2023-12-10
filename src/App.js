import React from 'react'
import { useFormik,Formik,Form,Field } from 'formik'
import { signupValidation } from './signupValuedation'


const App = () => {


const initialValues = {
  name:'',
  email:'',
  password:'',
  cpassword:'',
}

  return (
 
    <div className='App'>
      <Formik
      initialValues={initialValues}
      validationSchema={signupValidation}
      >
        {({errors})=> (
             <Form >
             <label htmlFor='name'>Name</label>
             <br/>
             <Field type="text" name="name"></Field>
             <br/>
             {errors.name && <small>{errors.name}</small>}
             <br/>
             <label htmlFor='email'>Email</label>
             <br/>
             <Field type="email" name="email"></Field>
             <br/>
             {errors.email && <small>{errors.email}</small>}
             <br/>
             <label htmlFor='password'>Password</label>
             <br/>
             <Field type="password" name="password"></Field>
             <br/>
             {errors.password && <small>{errors.password}</small>}
             <br/>
             <label htmlFor='cpassword'>Tekar Password</label>
             <br/>
             <Field type="password" name="cpassword"></Field>
             <br/>
             {errors.cpassword && <small>{errors.cpassword}</small>}
             <br/>
             <button type='submit'>Submit</button>
           </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
