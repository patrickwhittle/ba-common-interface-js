import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class AddonInt extends Restable {

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

  get addonId() {
    return this._addonId
  }

  set addonId(addonId) {
    this._addonId = addonId
  }

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get priceDescription() {
    return this._priceDescription
  }

  set priceDescription(priceDescription) {
    this._priceDescription = priceDescription
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}

export default AddonInt
