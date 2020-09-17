/** @module Content
 *  @desc Content element
 *  @since 2020.09.17, 20:44
 *  @changed 2020.09.17, 20:44
 */

import React from 'react'
import { cn } from '@bem-react/classname'

import './Content.pcss'

const cnCalcTable = cn('CalcTable')

export default ({ children }) => {
  return (
    <tbody className={cnCalcTable('Content')}>
      {children}
    </tbody>
  )
}
