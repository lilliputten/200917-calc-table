/** @module CalcTable
 *  @desc CalcTable demo component
 *  @since 2020.09.17, 20:39
 *  @changed 2020.09.17, 20:39
 */

import React from 'react'
import { cn } from '@bem-react/classname'
// import config from 'config'

import './CalcTable.pcss'

import Header from './Header'
import Content from './Content'
import Section from './Section'

const cnCalcTable = cn('CalcTable')

// const { tableColumns } = config.constants

const CalcTable = () => {
  return (
    <table className={cnCalcTable()}>
      <Header />
      <Content>
        <Section title="Сильные стороны" />
        <Section title="Слабые стороны" />
      </Content>
    </table>
  )
}

export default CalcTable
