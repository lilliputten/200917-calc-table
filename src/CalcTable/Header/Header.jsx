/** @module Header
 *  @desc Header element
 *  @since 2020.09.17, 20:44
 *  @changed 2020.09.17, 20:44
 */

import React from 'react'
import { cn } from '@bem-react/classname'
import config from 'config'

import './Header.pcss'

const cnCalcTable = cn('CalcTable')

const classProps = { type: 'Header' }

const { tableColumns: columns } = config.constants

const Header = () => {
  const content = columns.map(({ id, title, headerHidden }) => {
    const text = headerHidden || !title ? '' : title
    return (
      <th key={id} id={id} className={cnCalcTable('Cell', classProps)}>
        {text}
      </th>
    )
  })
  return (
    <thead className={cnCalcTable('Header')}>
      <tr className={cnCalcTable('Row', classProps)}>
        {content}
      </tr>
    </thead>
  )
}

export default Header
