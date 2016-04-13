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

  get roomPriceId() {
    return this._roomPriceId
  }

  set roomPriceId(roomPriceId) {
    this._roomPriceId = roomPriceId
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
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

  get closeForArrival() {
    return this._closeForArrival
  }

  set closeForArrival(closeForArrival) {
    this._closeForArrival = closeForArrival
  }

  get minNights() {
    return this._minNights
  }

  set minNights(minNights) {
    this._minNights = minNights
  }

  get stopSale() {
    return this._stopSale
  }

  set stopSale(stopSale) {
    this._stopSale = stopSale
  }

  get ref() {
    return this._ref
  }

  set ref(ref) {
    this._ref = ref
  }

  get rackRef() {
    return this._rackRef
  }

  set rackRef(rackRef) {
    this._rackRef = rackRef
  }

}
