import Restable from '../../../Restable'
import VariationGroupInt from '../../../com/bookassist/model/translation/VariationGroupInt'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class VariationGroup extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get id() {
    return this._id
  }

  set id(id) {
    this._id = id
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
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

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isObject(translations) ) {
      translations = mapValues(translations, (value) => {
        if ( isPlainObject(value) ) {
          return new VariationGroupInt(value)
        }
        return value
      })
    }
    this._translations = translations
  }

}

export default VariationGroup
