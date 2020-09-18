/** @module InputNumber
 *  @since 2020.09.18, 18:24
 *  @changed 2020.09.18, 19:38
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

import './InputNumber.pcss'

const cnCalcTable = cn('CalcTable')

class InputNumber extends React.Component {

  handleChange = ({ target }) => {
    const {
      id,
      onChange,
    } = this.props
    const value = Number(target.value)
    if (typeof onChange === 'function') {
      onChange({ id, value })
    }
  }

  render() {
    const {
      id,
      inputType: type,
      inputMode: mode,
      defaultValue,
      value,
      onChange,
    } = this.props
    const editable = (mode !== 'result')
    const inputProps = {
      id,
      name,
      type: 'text',
      className: cnCalcTable('InputNumber', { type, mode }),
      defaultValue: defaultValue,
      disabled: !editable,
    }
    if (id === 'impact') {
      inputProps.defaultValue = Number(value) || ''
    }
    if (editable && typeof onChange === 'function') {
      inputProps.onChange = this.handleChange
    }
    return (
      <input {...inputProps} />
    )
  }

}

export default InputNumber
