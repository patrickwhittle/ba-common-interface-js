import Restable from '../../../Restable'
import PointsType from '../../../com/bookassist/model/voucher/PointsType'
import Status from '../../../com/bookassist/model/voucher/Status'
import Validity from '../../../com/bookassist/model/voucher/Validity'
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

  get pointsId() {
    return this._pointsId
  }

  set pointsId(pointsId) {
    this._pointsId = pointsId
  }

  get code() {
    return this._code
  }

  set code(code) {
    this._code = code
  }

  get amount() {
    return this._amount
  }

  set amount(amount) {
    this._amount = amount
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get currentValue() {
    return this._currentValue
  }

  set currentValue(currentValue) {
    this._currentValue = currentValue
  }

  get customerId() {
    return this._customerId
  }

  set customerId(customerId) {
    this._customerId = customerId
  }

  get recipientId() {
    return this._recipientId
  }

  set recipientId(recipientId) {
    this._recipientId = recipientId
  }

  get type() {
    return this._type
  }

  set type(type) {
    if ( isPlainObject(type) ) {
      this._type = new PointsType(type)
    }
    else {
      this._type = type
    }
  }

  get validity() {
    return this._validity
  }

  set validity(validity) {
    if ( isPlainObject(validity) ) {
      this._validity = new Validity(validity)
    }
    else {
      this._validity = validity
    }
  }

  get message() {
    return this._message
  }

  set message(message) {
    this._message = message
  }

  get purchaseDateTime() {
    return this._purchaseDateTime
  }

  set purchaseDateTime(purchaseDateTime) {
    this._purchaseDateTime = purchaseDateTime
  }

  get redeemDateTime() {
    return this._redeemDateTime
  }

  set redeemDateTime(redeemDateTime) {
    this._redeemDateTime = redeemDateTime
  }

  get expireDateTime() {
    return this._expireDateTime
  }

  set expireDateTime(expireDateTime) {
    this._expireDateTime = expireDateTime
  }

  get modificationDateTime() {
    return this._modificationDateTime
  }

  set modificationDateTime(modificationDateTime) {
    this._modificationDateTime = modificationDateTime
  }

  get packageVoucherId() {
    return this._packageVoucherId
  }

  set packageVoucherId(packageVoucherId) {
    this._packageVoucherId = packageVoucherId
  }

  get extraXmlInfo() {
    return this._extraXmlInfo
  }

  set extraXmlInfo(extraXmlInfo) {
    this._extraXmlInfo = extraXmlInfo
  }

  get status() {
    return this._status
  }

  set status(status) {
    if ( isPlainObject(status) ) {
      this._status = new Status(status)
    }
    else {
      this._status = status
    }
  }

  get groupCode() {
    return this._groupCode
  }

  set groupCode(groupCode) {
    this._groupCode = groupCode
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

  get hotelGroupId() {
    return this._hotelGroupId
  }

  set hotelGroupId(hotelGroupId) {
    this._hotelGroupId = hotelGroupId
  }

}
