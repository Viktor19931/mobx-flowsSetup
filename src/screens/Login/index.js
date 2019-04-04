// @flow

import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { Formik } from 'formik'

import AuthStore from '../../stores/AuthStore'
import { login } from '../../utils/firebase'
import { SubmitButton } from './style'
import { loginSchema } from '../../utils/schemas'

type LoginProps = {
  history: any,
  authStore: AuthStore,
}

const Login = (props: LoginProps) => {
  const handleSubmit = creds => {
    const { history, authStore } = props
    const { email, password } = creds
    login(email, password)
      .then(() => {
        history.push('/home')
        authStore.firebaseCheckAuth()
      })
      .catch(error => authStore.logError(error.message))
  }

  return (
    <Col md={{ span: 4, offset: 4 }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
            <SubmitButton type="submit" disabled={!isValid}>
              Submit form
            </SubmitButton>
          </Form>
        )}
      </Formik>
      {props.authStore.errorMsg !== '' && props.authStore.errorMsg}
    </Col>
  )
}

export default compose(
  inject('authStore'),
  observer
)(Login)
