import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class PromoCode extends Restable {

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

  get code() {
    return this._code
  }

  set code(code) {
    this._code = code
  }

  get startDate() {
    return this._startDate
  }

  set startDate(startDate) {
    this._startDate = startDate
  }

  get expireDate() {
    return this._expireDate
  }

  set expireDate(expireDate) {
    this._expireDate = expireDate
  }

  get priceGroup() {
    return this._priceGroup
  }

  set priceGroup(priceGroup) {
    this._priceGroup = priceGroup
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

  get cgGroupId() {
    return this._cgGroupId
  }

  set cgGroupId(cgGroupId) {
    this._cgGroupId = cgGroupId
  }

  get channelId() {
    return this._channelId
  }

  set channelId(channelId) {
    this._channelId = channelId
  }

}

export default PromoCode
