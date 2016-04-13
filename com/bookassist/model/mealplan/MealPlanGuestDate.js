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

  get mealPlanGuestId() {
    return this._mealPlanGuestId
  }

  set mealPlanGuestId(mealPlanGuestId) {
    this._mealPlanGuestId = mealPlanGuestId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get date() {
    return this._date
  }

  set date(date) {
    this._date = date
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

}
