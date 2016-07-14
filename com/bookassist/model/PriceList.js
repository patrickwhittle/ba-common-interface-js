import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class PriceList extends Restable {

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

  get ref() {
    return this._ref
  }

  set ref(ref) {
    this._ref = ref
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  get rackRef() {
    return this._rackRef
  }

  set rackRef(rackRef) {
    this._rackRef = rackRef
  }

  get rateCode() {
    return this._rateCode
  }

  set rateCode(rateCode) {
    this._rateCode = rateCode
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get hotelId() {
    return this._hotelId
  }

  set hotelId(hotelId) {
    this._hotelId = hotelId
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

}

PriceList.REF_TO_CLOSE = "x"

export default PriceList
