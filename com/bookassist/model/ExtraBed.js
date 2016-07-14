import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class ExtraBed extends Restable {

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

  get xBedsId() {
    return this._xBedsId
  }

  set xBedsId(xBedsId) {
    this._xBedsId = xBedsId
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

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  get listingPriority() {
    return this._listingPriority
  }

  set listingPriority(listingPriority) {
    this._listingPriority = listingPriority
  }

  get xBedNo() {
    return this._xBedNo
  }

  set xBedNo(xBedNo) {
    this._xBedNo = xBedNo
  }

  get roomPriceId() {
    return this._roomPriceId
  }

  set roomPriceId(roomPriceId) {
    this._roomPriceId = roomPriceId
  }

  get from() {
    return this._from
  }

  set from(from) {
    this._from = from
  }

  get to() {
    return this._to
  }

  set to(to) {
    this._to = to
  }

}

export default ExtraBed
