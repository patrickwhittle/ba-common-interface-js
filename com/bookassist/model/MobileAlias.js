import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class MobileAlias extends Restable {

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

  get orderInd() {
    return this._orderInd
  }

  set orderInd(orderInd) {
    this._orderInd = orderInd
  }

  get totalRows() {
    return this._totalRows
  }

  set totalRows(totalRows) {
    this._totalRows = totalRows
  }

  get cgGroupId() {
    return this._cgGroupId
  }

  set cgGroupId(cgGroupId) {
    this._cgGroupId = cgGroupId
  }

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get priceGroup() {
    return this._priceGroup
  }

  set priceGroup(priceGroup) {
    this._priceGroup = priceGroup
  }

  get alias() {
    return this._alias
  }

  set alias(alias) {
    this._alias = alias
  }

  get urlPattern() {
    return this._urlPattern
  }

  set urlPattern(urlPattern) {
    this._urlPattern = urlPattern
  }

  get hotelName() {
    return this._hotelName
  }

  set hotelName(hotelName) {
    this._hotelName = hotelName
  }

  get modificationDate() {
    return this._modificationDate
  }

  set modificationDate(modificationDate) {
    this._modificationDate = modificationDate
  }

  get subDomain() {
    return this._subDomain
  }

  set subDomain(subDomain) {
    this._subDomain = subDomain
  }

  get check() {
    return this._check
  }

  set check(check) {
    this._check = check
  }

  get flag() {
    return this._flag
  }

  set flag(flag) {
    this._flag = flag
  }

}

MobileAlias.DEFAULT_BASSIST_DOMAIN = "http://m.bookassist.com/"
MobileAlias.DEFAULT_PRICE_GROUP = 2
MobileAlias.DEFAULT_SERVICE_MODEL = 5

export default MobileAlias
