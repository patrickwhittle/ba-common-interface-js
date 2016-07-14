import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelOptionOfHotel extends Restable {

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

  get nameKey() {
    return this._nameKey
  }

  set nameKey(nameKey) {
    this._nameKey = nameKey
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

  get hotelOptionId() {
    return this._hotelOptionId
  }

  set hotelOptionId(hotelOptionId) {
    this._hotelOptionId = hotelOptionId
  }

}

export default HotelOptionOfHotel
