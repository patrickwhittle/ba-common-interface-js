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

  get firstName() {
    return this._firstName
  }

  set firstName(firstName) {
    this._firstName = firstName
  }

  get lastName() {
    return this._lastName
  }

  set lastName(lastName) {
    this._lastName = lastName
  }

}
