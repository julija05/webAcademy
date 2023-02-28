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
font-size:15px;
`;
const LoginErrors = styled.div`
margin:5px;
color:red;
`;

const LoginWithGoogle = styled.div`
 margin:5px;
 font-size:18px;
 color:navy;
 font-weight:800;
 cursor:pointer;
`;
const LoginForgotPass = styled.div`
 margin:5px;
 font-size:18px;
 color:navy;
 cursor:pointer;
`;
const LoginSignUpDiv = styled.div`
text-align:center;
margin:15px;
padding:20px;
border:none;
border-radius:10px;
box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

const LoginSignUpSpan = styled.span`
color: #335652;
font-weight:700;
cursor:pointer;
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
            
          <LoginWithGoogle>Login with Google Account</LoginWithGoogle> 
          <LoginForgotPass>Forgot password?</LoginForgotPass> 
          <LoginSignUpDiv>Don't have an account? <LoginSignUpSpan>SignUp</LoginSignUpSpan></LoginSignUpDiv>
    </LoginCard>
  
  );
}