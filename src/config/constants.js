/** @module config.constants
 *  @description Build management config
 *  @since 2019.09.10, 14:25
 *  @changed 2019.09.10, 14:25
 */

module.exports = { // Common-used build variables...

  tableColumns: [
    { id: 'name', title: 'Имя параметра', headerHidden: true, inputType: 'Text' },
    { id: 'descr', title: 'Характеристика', inputType: 'Text' },
    { id: 'value', title: 'Значимость', inputType: 'Number' },
    { id: 'rate', title: 'Оценка', inputType: 'Number' },
    { id: 'impact', title: 'Воздействие', inputType: 'Number', inputMode: 'result' },
  ],

  itemsCount: 4,

}
