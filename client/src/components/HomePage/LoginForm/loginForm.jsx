import React from 'react';
import styled from "styled-components";
import { Formik,Field } from 'formik';

const HomeButton = styled.button`
padding:15px;
border-radius:20px;
border:none;
background-color:#335652;
color:white;
font-family: 'Life Savers', cursive;
font-weight:800;
margin:20px;
font-size:20px;
`;

const LoginCard = styled.div`
display:flex;
flex-direction:column;
background:#ffff;
border-radius:10px;
`;
const HomeText = styled.div`
font-size:25px;
color: #335652;
margin:30px;
font-weight:700;
`;

const LoginWrapper = styled.div`
display:flex;
flex-direction:column;
margin:10px
`;

const LoginInput = styled.input`
margin:5px;
height:25px;
`;
const LoginLabel = styled.label`
margin:5px;
`;
const LoginErrors = styled.div`
margin:5px;
color:red;
`;

export function LoginForm() {
  return (
    <LoginCard>
        <HomeText>Connect, Collaborate, and Learn with Knownet</HomeText>
        <Formik
            initialValues={{ email: '', password: '' ,toggle: false}}
            validate={values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            if(!values.password){
                errors.password = 'Required';
            }
            return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
            }}
        >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
            <LoginWrapper>
            <LoginLabel htmlFor="email">Email</LoginLabel>   
            <LoginInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            />
            <LoginErrors>
            {errors.email && touched.email && errors.email}
            </LoginErrors>
            
            <LoginLabel htmlFor="password">Password</LoginLabel>
            <LoginInput
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            />
            <LoginErrors>
            {errors.password && touched.password && errors.password}
            </LoginErrors>
            
            <LoginLabel>
            <Field type="checkbox" name="toggle" />
             Remeber login info
            </LoginLabel>
            
            <HomeButton type="submit" disabled={isSubmitting}>
            Login
            </HomeButton>
            </LoginWrapper>
        </form>
        )}
        </Formik>    
            
          <div>Login with Google Account</div> 
          <div>Forgot password?</div> 
          <div>Don't have an account? <span>SignUp</span></div>
    </LoginCard>
  
  );
}