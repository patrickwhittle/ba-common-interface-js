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

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

}
