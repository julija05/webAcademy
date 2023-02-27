import React from 'react';
import styled from "styled-components";
import { Formik } from 'formik';

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
max-width:850px;
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

export function LoginForm() {
  return (
    <LoginCard>
        <HomeText>Connect, Collaborate, and Learn with Knownet</HomeText>
        <Formik
    initialValues={{ email: '', password: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
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
        <label htmlFor="email">Email</label>   
        <LoginInput
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <label htmlFor="password">Password</label>
        <LoginInput
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <HomeButton type="submit" disabled={isSubmitting}>
        Login
        </HomeButton>
        </LoginWrapper>
      </form>
    )}
  </Formik>    
            
           
    </LoginCard>
  
  );
}