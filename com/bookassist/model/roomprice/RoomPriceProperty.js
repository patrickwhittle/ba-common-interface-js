import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class RoomPriceProperty extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get propertyName() {
    return this._propertyName
  }

  set propertyName(propertyName) {
    this._propertyName = propertyName
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

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

}

RoomPriceProperty.BREAKFAST_INCLUDED = "BREAKFAST_INCLUDED"
RoomPriceProperty.CANCELLATION_DEADLINE = "CANCELLATION_DEADLINE"
RoomPriceProperty.CANCELLATION_POLICY = "CANCELLATION_POLICY"
RoomPriceProperty.FREE_CANCELLATION = "FREE_CANCELLATION"
RoomPriceProperty.MISC_POLICY = "MISC_POLICY"
RoomPriceProperty.OCCUPANCY_POLICY = "OCCUPANCY_POLICY"
RoomPriceProperty.PAYMENT_POLICY = "PAYMENT_POLICY"
RoomPriceProperty.REFUNDABLE = "REFUNDABLE"
RoomPriceProperty.ROOM_TYPE = "ROOM_TYPE"
RoomPriceProperty.TERMS_CONDITIONS = "TERMS_CONDITIONS"

export default RoomPriceProperty
