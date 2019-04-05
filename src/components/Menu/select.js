// @flow

import React from 'react'
import Form from 'react-bootstrap/Form'

import { changeLanguage, language } from '../../i18n'

const languages = ['en', 'ua', 'de']

type SelectLangProps = {}

const SelectLang = (props: SelectLangProps) => {
  const renderOptions = () =>
    languages.map(el => (
      <option key={el} >
        {el}
      </option>
    ))

  return (
    <Form.Group style={{ alignSelf: 'center' }}>
      <Form.Control 
        as="select" 
        onChange={event => changeLanguage(event.target.value)}
        defaultValue={language}
      >
        {renderOptions()}
      </Form.Control>
    </Form.Group>
  )
}

export default SelectLang
