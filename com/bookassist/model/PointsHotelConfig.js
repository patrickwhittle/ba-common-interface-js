import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class PointsHotelConfig extends Restable {

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

  get pointsType() {
    return this._pointsType
  }

  set pointsType(pointsType) {
    this._pointsType = pointsType
  }

  get purchase2points() {
    return this._purchase2points
  }

  set purchase2points(purchase2points) {
    this._purchase2points = purchase2points
  }

  get maxPurchase2points() {
    return this._maxPurchase2points
  }

  set maxPurchase2points(maxPurchase2points) {
    this._maxPurchase2points = maxPurchase2points
  }

  get points2sale() {
    return this._points2sale
  }

  set points2sale(points2sale) {
    this._points2sale = points2sale
  }

  get minPoints4purchase() {
    return this._minPoints4purchase
  }

  set minPoints4purchase(minPoints4purchase) {
    this._minPoints4purchase = minPoints4purchase
  }

  get maxPoints4purchase() {
    return this._maxPoints4purchase
  }

  set maxPoints4purchase(maxPoints4purchase) {
    this._maxPoints4purchase = maxPoints4purchase
  }

  get mustBeWholePurchase() {
    return this._mustBeWholePurchase
  }

  set mustBeWholePurchase(mustBeWholePurchase) {
    this._mustBeWholePurchase = mustBeWholePurchase
  }

  get offlineUsage() {
    return this._offlineUsage
  }

  set offlineUsage(offlineUsage) {
    this._offlineUsage = offlineUsage
  }

  get partnerCgGroupId() {
    return this._partnerCgGroupId
  }

  set partnerCgGroupId(partnerCgGroupId) {
    this._partnerCgGroupId = partnerCgGroupId
  }

}

PointsHotelConfig.BY_PERCENT = "by_percent"
PointsHotelConfig.NIGHTLY_ACCUMULATE = "nightly_accumulate"
PointsHotelConfig.NIGHTLY_USE = "nightly_use"
PointsHotelConfig.NO_POINTS = "no_points"
PointsHotelConfig.PACKAGE = "package"
PointsHotelConfig.REWARD = "reward"
PointsHotelConfig.VOUCHER = "voucher"

export default PointsHotelConfig
