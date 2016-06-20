import Restable from '../../../../Restable'
import TermsConditionsInt from '../../../../com/bookassist/model/hotel/TermsConditionsInt'
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

  get hotelId() {
    return this._hotelId
  }

  set hotelId(hotelId) {
    this._hotelId = hotelId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get terms() {
    return this._terms
  }

  set terms(terms) {
    this._terms = terms
  }

  get termsInt() {
    return this._termsInt
  }

  set termsInt(termsInt) {
    if ( isArray(termsInt) ) {
      termsInt = termsInt.map((item) => {
        if ( isPlainObject(item) ) {
          return new TermsConditionsInt(item)
        }
        return item
      })
    }
    this._termsInt = termsInt
  }

}
