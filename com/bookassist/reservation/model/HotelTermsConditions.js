import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelTermsConditions extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

  get termsConditions() {
    return this._termsConditions
  }

  set termsConditions(termsConditions) {
    this._termsConditions = termsConditions
  }

}

export default HotelTermsConditions
