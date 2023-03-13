import React from 'react';
import styled from "styled-components";
import { Formik } from 'formik';

const HomeButton = styled.button`
padding:15px;
border-radius:34px;
border:none;
background-color:#335652;
color:white;
font-family: 'Montserrat', sans-serif;
font-weight:800;
font-size:20px;
text-align:center;
margin-bottom:20px;
`;

const LoginCard = styled.div`
display:flex;
flex-direction:column;
background:#ffff;
width:30%;
`;
const HomeText = styled.div`
font-size:25px;
color: black;
font-weight:700;
text-align:left;
margin-bottom:20px;
`;

const LoginWrapper = styled.div`
display:flex;
flex-direction:column;
`;

const LoginInput = styled.input`
height:50px;
margin-bottom:20px;
`;
const LoginLabel = styled.label`
font-size:15px;
font-weight:700;
`;
const LoginErrors = styled.div`
margin:5px;
color:red;
`;

const LoginWithGoogle = styled.div`
 font-size:20px;
 color:navy;
 font-weight:800;
 cursor:pointer;
 padding:15px;
 border-radius:34px;
 color:black;
 border:1px solid black;
 text-align:center;
 margin-bottom:20px;
`;
const LoginForgotPass = styled.div`
 font-size:18px;
 color:black;
 cursor:pointer;
 margin-bottom:20px;
 font-weight:700;
`;
const LoginSignUpDiv = styled.div`
font-size:20px;
 color:white;
 font-weight:800;
 cursor:pointer;
 padding:15px;
 border-radius:34px;
 color:white;
 background-color:#FF6584;
 text-align:center;
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
            <HomeButton type="submit" disabled={isSubmitting}>
            Sign In
            </HomeButton>
            </LoginWrapper>
        </form>
        )}
        </Formik> 
        <LoginForgotPass>Forgot password?</LoginForgotPass>  
          <LoginWithGoogle>Sign In with Google Account</LoginWithGoogle> 
        
          <LoginSignUpDiv>Join Now</LoginSignUpDiv>
    </LoginCard>
  
  );
}