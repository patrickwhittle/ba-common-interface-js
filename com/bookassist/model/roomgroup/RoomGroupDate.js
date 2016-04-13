import Restable from '../../../../Restable'
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

  get roomGroupId() {
    return this._roomGroupId
  }

  set roomGroupId(roomGroupId) {
    this._roomGroupId = roomGroupId
  }

  get availability() {
    return this._availability
  }

  set availability(availability) {
    this._availability = availability
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get date() {
    return this._date
  }

  set date(date) {
    this._date = date
  }

  get totalRooms() {
    return this._totalRooms
  }

  set totalRooms(totalRooms) {
    this._totalRooms = totalRooms
  }

  get reservedRooms() {
    return this._reservedRooms
  }

  set reservedRooms(reservedRooms) {
    this._reservedRooms = reservedRooms
  }

}
