import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

export default class extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get date() {
    return this._date
  }

  set date(date) {
    this._date = date
  }

  get year() {
    return this._year
  }

  set year(year) {
    this._year = year
  }

  get month() {
    return this._month
  }

  set month(month) {
    this._month = month
  }

  get dayOfMonth() {
    return this._dayOfMonth
  }

  set dayOfMonth(dayOfMonth) {
    this._dayOfMonth = dayOfMonth
  }

  get monthName() {
    return this._monthName
  }

  set monthName(monthName) {
    this._monthName = monthName
  }

  get state() {
    return this._state
  }

  set state(state) {
    this._state = state
  }

}
// missing get and/or set for monthname
