import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class DefaultAvailability extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get phrase() {
    return this._phrase
  }

  set phrase(phrase) {
    this._phrase = phrase
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

}

export default DefaultAvailability
