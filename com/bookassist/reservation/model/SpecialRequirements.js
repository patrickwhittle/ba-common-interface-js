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

  get specials() {
    return this._specials
  }

  set specials(specials) {
    this._specials = specials
  }

  get freeText() {
    return this._freeText
  }

  set freeText(freeText) {
    this._freeText = freeText
  }

}
