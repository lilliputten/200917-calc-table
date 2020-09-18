/** @module Item
 *  @desc Item demo component
 *  @since 2020.09.18, 00:00
 *  @changed 2020.09.18, 19:38
 */

import React from 'react'
import { cn } from '@bem-react/classname'
import config from 'config'

import InputCell from '../InputCell'

import './Item.pcss'

const cnCalcTable = cn('CalcTable')

const { tableColumns } = config.constants

const paramNames = [ 'value', 'rate' ]

const defaultCalcValues = {
  value: 1,
  rate: 1,
}

class Item extends React.Component {

  state = {}

  handleValueChange = ({ id, value: newValue }) => {
    // Construct params for impact calculating...
    let hasNonDefaultValues = 0
    const calcParams = paramNames.reduce((calcParams, name) => {
      let setValue = (name === id) ? newValue : this.state[name]
      if (!setValue || isNaN(setValue)) { // Default value...
        setValue = defaultCalcValues[name]
      }
      else {
        hasNonDefaultValues++
      }
      return { ...calcParams, [name]: setValue }
    }, {})
    // Evaluate impact value
    const impact = hasNonDefaultValues ? calcParams.value * calcParams.rate : ''
    const { rowId, onImpactChange } = this.props
    if (onImpactChange && typeof onImpactChange === 'function') {
      onImpactChange({ rowId, impact })
    }
    this.setState({ [id]: newValue, impact })
  }

  render() {
    const { id: rowId } = this.props
    const cells = tableColumns.map(({ id, ...colProps }) => {
      const inputProps = {
        key: id,
        id,
        rowId,
        ...colProps,
      }
      if (paramNames.includes(id)) { // Capture input params change...
        inputProps.onChange = this.handleValueChange
      }
      if (id === 'impact') {
        inputProps.value = this.state.impact
      }
      return <InputCell {...inputProps} />
    })
    return (
      <tr className={cnCalcTable('Row', { type: 'Item', id: rowId })}>
        {cells}
      </tr>
    )
  }

}


export default Item
