import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Tracking extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get trackingId() {
    return this._trackingId
  }

  set trackingId(trackingId) {
    this._trackingId = trackingId
  }

  get hotelId() {
    return this._hotelId
  }

  set hotelId(hotelId) {
    this._hotelId = hotelId
  }

  get hotelGroupId() {
    return this._hotelGroupId
  }

  set hotelGroupId(hotelGroupId) {
    this._hotelGroupId = hotelGroupId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get countyId() {
    return this._countyId
  }

  set countyId(countyId) {
    this._countyId = countyId
  }

  get r() {
    return this._r
  }

  set r(r) {
    this._r = r
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

  get rejected() {
    return this._rejected
  }

  set rejected(rejected) {
    this._rejected = rejected
  }

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get dateIn() {
    return this._dateIn
  }

  set dateIn(dateIn) {
    this._dateIn = dateIn
  }

  get dateOut() {
    return this._dateOut
  }

  set dateOut(dateOut) {
    this._dateOut = dateOut
  }

  get modificationDate() {
    return this._modificationDate
  }

  set modificationDate(modificationDate) {
    this._modificationDate = modificationDate
  }

  get account() {
    return this._account
  }

  set account(account) {
    this._account = account
  }

  get href() {
    return this._href
  }

  set href(href) {
    this._href = href
  }

  get page() {
    return this._page
  }

  set page(page) {
    this._page = page
  }

  get sessionId() {
    return this._sessionId
  }

  set sessionId(sessionId) {
    this._sessionId = sessionId
  }

  get referrer() {
    return this._referrer
  }

  set referrer(referrer) {
    this._referrer = referrer
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

  get userCurrency() {
    return this._userCurrency
  }

  set userCurrency(userCurrency) {
    this._userCurrency = userCurrency
  }

  get ip() {
    return this._ip
  }

  set ip(ip) {
    this._ip = ip
  }

}

export default Tracking
