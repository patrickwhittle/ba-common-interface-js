import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class PMS extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get statusId() {
    return this._statusId
  }

  set statusId(statusId) {
    this._statusId = statusId
  }

  get status() {
    return this._status
  }

  set status(status) {
    this._status = status
  }

  get roomType() {
    return this._roomType
  }

  set roomType(roomType) {
    this._roomType = roomType
  }

  get rateType() {
    return this._rateType
  }

  set rateType(rateType) {
    this._rateType = rateType
  }

}

export default PMS
