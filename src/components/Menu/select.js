// @flow

import React from 'react'
import Form from 'react-bootstrap/Form'

import { changeLanguage, language } from '../../i18n'

const languages = ['en', 'ua', 'de']

type SelectLangProps = {}

const SelectLang = (props: SelectLangProps) => {
  const renderOptions = () =>
    languages.map(el => <option key={el}>{el}</option>)

  return (
    <Form.Control
      style={{ width: 50 }}
      as="select"
      onChange={event => changeLanguage(event.target.value)}
      defaultValue={language}
    >
      {renderOptions()}
    </Form.Control>
  )
}

export default SelectLang
