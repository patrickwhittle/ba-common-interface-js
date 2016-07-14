import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Request extends Restable {

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

  get countyId() {
    return this._countyId
  }

  set countyId(countyId) {
    this._countyId = countyId
  }

  get adults() {
    return this._adults
  }

  set adults(adults) {
    this._adults = adults
  }

  get children() {
    return this._children
  }

  set children(children) {
    this._children = children
  }

  get beds() {
    return this._beds
  }

  set beds(beds) {
    this._beds = beds
  }

  get blown() {
    return this._blown
  }

  set blown(blown) {
    this._blown = blown
  }

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get fromPrice() {
    return this._fromPrice
  }

  set fromPrice(fromPrice) {
    this._fromPrice = fromPrice
  }

  get arrival() {
    return this._arrival
  }

  set arrival(arrival) {
    this._arrival = arrival
  }

  get departure() {
    return this._departure
  }

  set departure(departure) {
    this._departure = departure
  }

  get modificationDate() {
    return this._modificationDate
  }

  set modificationDate(modificationDate) {
    this._modificationDate = modificationDate
  }

  get sessionId() {
    return this._sessionId
  }

  set sessionId(sessionId) {
    this._sessionId = sessionId
  }

}

export default Request
