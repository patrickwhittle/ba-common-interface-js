import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class RoomDescription extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get roomPriceId() {
    return this._roomPriceId
  }

  set roomPriceId(roomPriceId) {
    this._roomPriceId = roomPriceId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get roomPriceName() {
    return this._roomPriceName
  }

  set roomPriceName(roomPriceName) {
    this._roomPriceName = roomPriceName
  }

  get roomTypeDescription() {
    return this._roomTypeDescription
  }

  set roomTypeDescription(roomTypeDescription) {
    this._roomTypeDescription = roomTypeDescription
  }

  get roomTypeId() {
    return this._roomTypeId
  }

  set roomTypeId(roomTypeId) {
    this._roomTypeId = roomTypeId
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

  get roomPriceDescription() {
    return this._roomPriceDescription
  }

  set roomPriceDescription(roomPriceDescription) {
    this._roomPriceDescription = roomPriceDescription
  }

}

export default RoomDescription
