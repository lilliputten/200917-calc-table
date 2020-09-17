/** @module CalcTable
 *  @desc CalcTable demo component
 *  @since 2020.09.17, 20:39
 *  @changed 2020.09.17, 20:39
 */

import React from 'react'
import { cn } from '@bem-react/classname'
import config from 'config'

import './CalcTable.pcss'

import Header from './Header'
// import Image from './Image'

const cnCalcTable = cn('CalcTable')

const {
  tableColumns,
  // defaultGreeting,
  // defaultName,
} = config.constants

const CalcTable = () => {
  return (
    <div className={cnCalcTable()}>
      <Header columns={tableColumns} />
      {/*
      <Columns />
      <Image />
      */}
    </div>
  )
}

export default CalcTable
