import Restable from '../../../Restable'
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

  get cgGroupId() {
    return this._cgGroupId
  }

  set cgGroupId(cgGroupId) {
    this._cgGroupId = cgGroupId
  }

  get nameKey() {
    return this._nameKey
  }

  set nameKey(nameKey) {
    this._nameKey = nameKey
  }

  get cgGroupOptionId() {
    return this._cgGroupOptionId
  }

  set cgGroupOptionId(cgGroupOptionId) {
    this._cgGroupOptionId = cgGroupOptionId
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

}
