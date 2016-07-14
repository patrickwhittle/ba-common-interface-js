import Restable from '../../../Restable'
import RoomPrice from '../../../com/bookassist/model/RoomPrice'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class PriceGroup extends Restable {

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

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get image() {
    return this._image
  }

  set image(image) {
    this._image = image
  }

  get startDate() {
    return this._startDate
  }

  set startDate(startDate) {
    this._startDate = startDate
  }

  get endDate() {
    return this._endDate
  }

  set endDate(endDate) {
    this._endDate = endDate
  }

  get status() {
    return this._status
  }

  set status(status) {
    this._status = status
  }

  get defaultArrival() {
    return this._defaultArrival
  }

  set defaultArrival(defaultArrival) {
    this._defaultArrival = defaultArrival
  }

  get defaultDeparture() {
    return this._defaultDeparture
  }

  set defaultDeparture(defaultDeparture) {
    this._defaultDeparture = defaultDeparture
  }

  get roomPrices() {
    return this._roomPrices
  }

  set roomPrices(roomPrices) {
    if ( isArray(roomPrices) ) {
      roomPrices = roomPrices.map((item) => {
        if ( isPlainObject(item) ) {
          return new RoomPrice(item)
        }
        return item
      })
    }
    this._roomPrices = roomPrices
  }

}

PriceGroup.BOOKIT = 1
PriceGroup.CONDUIT = 2
PriceGroup.CORPORATE = 4

export default PriceGroup
