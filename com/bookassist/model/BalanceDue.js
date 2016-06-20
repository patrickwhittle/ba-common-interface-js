import Restable from '../../../Restable'
import BalanceDue$BalanceDueValue from '../../../com/bookassist/model/BalanceDue$BalanceDueValue'
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

  get depositModel() {
    return this._depositModel
  }

  set depositModel(depositModel) {
    this._depositModel = depositModel
  }

  get comment() {
    return this._comment
  }

  set comment(comment) {
    this._comment = comment
  }

  get listValues() {
    return this._listValues
  }

  set listValues(listValues) {
    if ( isArray(listValues) ) {
      listValues = listValues.map((item) => {
        if ( isPlainObject(item) ) {
          return new BalanceDue$BalanceDueValue(item)
        }
        return item
      })
    }
    this._listValues = listValues
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    this._translations = translations
  }

}
