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

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get payment() {
    return this._payment
  }

  set payment(payment) {
    this._payment = payment
  }

  get paymentOptions() {
    return this._paymentOptions
  }

  set paymentOptions(paymentOptions) {
    this._paymentOptions = paymentOptions
  }

  get paymentType() {
    return this._paymentType
  }

  set paymentType(paymentType) {
    this._paymentType = paymentType
  }

}
