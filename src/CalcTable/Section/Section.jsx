/** @module Section
 *  @desc Section element
 *  @since 2020.09.17, 20:44
 *  @changed 2020.09.17, 20:44
 */

import React from 'react'
// import { cn } from '@bem-react/classname'
import config from 'config'
import SectionTitle from '../SectionTitle'

import Item from '../Item'

import './Section.pcss'

// const cnCalcTable = cn('CalcTable')

const { itemsCount } = config.constants

const Section = ({ title }) => {
  const items = Array.from({ length: itemsCount }, (_, n) => {
    return (
      <Item key={n} id={'Item' + n} />
    )
  })
  return (
    <React.Fragment>
      <SectionTitle title={title} />
      {items}
      {/* content:
          - Items (x itemsCount)
          - Other factors
          - Summary
      */}
    </React.Fragment>
  )
}

export default Section
