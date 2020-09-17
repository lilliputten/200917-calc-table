/** @module Item
 *  @desc Item demo component
 *  @since 2020.09.18, 00:00
 *  @changed 2020.09.18, 00:00
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

import './Item.pcss'

const cnCalcTable = cn('CalcTable')

// const { tableColumns } = config.constants

const classProps = { type: 'Item' }

const Item = ({ id }) => {
  return (
    <tr className={cnCalcTable('Row', classProps)}>
      <td className={cnCalcTable('Cell', classProps)}>
        {id}
      </td>
    </tr>
  )
}

export default Item
