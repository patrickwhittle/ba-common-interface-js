import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class RoomTypeInt extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get roomTypeId() {
    return this._roomTypeId
  }

  set roomTypeId(roomTypeId) {
    this._roomTypeId = roomTypeId
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}

export default RoomTypeInt
