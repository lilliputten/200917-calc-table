/** @module InputCell
 *  @desc InputCell demo component
 *  @since 2020.09.18, 18:18
 *  @changed 2020.09.18, 19:38
 */

import React from 'react'
import { cn } from '@bem-react/classname'

import InputNumber from '../InputNumber'
// // TODO: Add here `InputText` import (create it before using `InputNumber` as scratch)
// import InputText from '../InputText'

import './InputCell.pcss'

const cnCalcTable = cn('CalcTable')

const InputCell = (props) => {
  const { id, title, inputType, inputMode } = props
  const inputProps = { ...props }
  const inputComponent = InputNumber
  // // TODO: Check here for inputType:
  // const inputType === 'Text' ? InputText : InputNumber
  const inputElement = React.createElement(inputComponent, inputProps)
  return (
    <td
      className={cnCalcTable('Cell', { type: 'Input', id, inputType, inputMode })}
      title={title}
    >
      {inputElement}
    </td>
  )
}

export default InputCell
