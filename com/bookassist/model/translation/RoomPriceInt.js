import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class RoomPriceInt extends Restable {

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

  get longDescription() {
    return this._longDescription
  }

  set longDescription(longDescription) {
    this._longDescription = longDescription
  }

  get shortDesc() {
    return this._shortDesc
  }

  set shortDesc(shortDesc) {
    this._shortDesc = shortDesc
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}

export default RoomPriceInt
