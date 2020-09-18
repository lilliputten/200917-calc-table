/** @module SectionTitle
 *  @desc SectionTitle element
 *  @since 2020.09.17, 20:44
 *  @changed 2020.09.17, 20:44
 */

import React from 'react'
import { cn } from '@bem-react/classname'
import config from 'config'

import './SectionTitle.pcss'

const cnCalcTable = cn('CalcTable')

const classProps = { type: 'SectionTitleTitle' }

const { tableColumns } = config.constants

const SectionTitle = ({ title }) => {
  return (
    <tr className={cnCalcTable('Row', classProps)}>
      <td className={cnCalcTable('Cell', classProps)} colSpan={tableColumns.length}>
        {title}
      </td>
    </tr>
  )
}

export default SectionTitle
