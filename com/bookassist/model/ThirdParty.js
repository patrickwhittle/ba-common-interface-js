import Restable from '../../../Restable'
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

  get id() {
    return this._id
  }

  set id(id) {
    this._id = id
  }

  get thirdPartyId() {
    return this._thirdPartyId
  }

  set thirdPartyId(thirdPartyId) {
    this._thirdPartyId = thirdPartyId
  }

  get siteId() {
    return this._siteId
  }

  set siteId(siteId) {
    this._siteId = siteId
  }

  get shortDesc() {
    return this._shortDesc
  }

  set shortDesc(shortDesc) {
    this._shortDesc = shortDesc
  }

  get priceGroups() {
    return this._priceGroups
  }

  set priceGroups(priceGroups) {
    this._priceGroups = priceGroups
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

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get extraParams() {
    return this._extraParams
  }

  set extraParams(extraParams) {
    this._extraParams = extraParams
  }

  get promoCodeValue() {
    return this._promoCodeValue
  }

  set promoCodeValue(promoCodeValue) {
    this._promoCodeValue = promoCodeValue
  }

  get showPromoCode() {
    return this._showPromoCode
  }

  set showPromoCode(showPromoCode) {
    this._showPromoCode = showPromoCode
  }

  get showBATabs() {
    return this._showBATabs
  }

  set showBATabs(showBATabs) {
    this._showBATabs = showBATabs
  }

  get showCalendar() {
    return this._showCalendar
  }

  set showCalendar(showCalendar) {
    this._showCalendar = showCalendar
  }

  get trackingCode() {
    return this._trackingCode
  }

  set trackingCode(trackingCode) {
    this._trackingCode = trackingCode
  }

  get specialsOnlyForFans() {
    return this._specialsOnlyForFans
  }

  set specialsOnlyForFans(specialsOnlyForFans) {
    this._specialsOnlyForFans = specialsOnlyForFans
  }

  get showGuest() {
    return this._showGuest
  }

  set showGuest(showGuest) {
    this._showGuest = showGuest
  }

  get showProperties() {
    return this._showProperties
  }

  set showProperties(showProperties) {
    this._showProperties = showProperties
  }

  get showAllHotelOptions() {
    return this._showAllHotelOptions
  }

  set showAllHotelOptions(showAllHotelOptions) {
    this._showAllHotelOptions = showAllHotelOptions
  }

  get showContiesAndHotels() {
    return this._showContiesAndHotels
  }

  set showContiesAndHotels(showContiesAndHotels) {
    this._showContiesAndHotels = showContiesAndHotels
  }

  get monthsAhead() {
    return this._monthsAhead
  }

  set monthsAhead(monthsAhead) {
    this._monthsAhead = monthsAhead
  }

  get bookNowTextKey() {
    return this._bookNowTextKey
  }

  set bookNowTextKey(bookNowTextKey) {
    this._bookNowTextKey = bookNowTextKey
  }

  get promoCodeTextKey() {
    return this._promoCodeTextKey
  }

  set promoCodeTextKey(promoCodeTextKey) {
    this._promoCodeTextKey = promoCodeTextKey
  }

  get titleTextKey() {
    return this._titleTextKey
  }

  set titleTextKey(titleTextKey) {
    this._titleTextKey = titleTextKey
  }

  get locationTitleTextKey() {
    return this._locationTitleTextKey
  }

  set locationTitleTextKey(locationTitleTextKey) {
    this._locationTitleTextKey = locationTitleTextKey
  }

  get delete() {
    return this._delete
  }

  set delete(delete) {
    this._delete = delete
  }

  get useCustomCSS() {
    return this._useCustomCSS
  }

  set useCustomCSS(useCustomCSS) {
    this._useCustomCSS = useCustomCSS
  }

  get showBATabMap() {
    return this._showBATabMap
  }

  set showBATabMap(showBATabMap) {
    this._showBATabMap = showBATabMap
  }

  get showBATabReviews() {
    return this._showBATabReviews
  }

  set showBATabReviews(showBATabReviews) {
    this._showBATabReviews = showBATabReviews
  }

  get showBATabDesc() {
    return this._showBATabDesc
  }

  set showBATabDesc(showBATabDesc) {
    this._showBATabDesc = showBATabDesc
  }

  get showBATabVoucher() {
    return this._showBATabVoucher
  }

  set showBATabVoucher(showBATabVoucher) {
    this._showBATabVoucher = showBATabVoucher
  }

  get showVariationFromSpecials() {
    return this._showVariationFromSpecials
  }

  set showVariationFromSpecials(showVariationFromSpecials) {
    this._showVariationFromSpecials = showVariationFromSpecials
  }

}
