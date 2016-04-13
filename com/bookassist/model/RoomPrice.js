import Restable from '../../../Restable'
import PackageState from '../../../com/bookassist/model/PackageState'
import RoomPriceInt from '../../../com/bookassist/model/translation/RoomPriceInt'
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

  get roomGroupId() {
    return this._roomGroupId
  }

  set roomGroupId(roomGroupId) {
    this._roomGroupId = roomGroupId
  }

  get listingPriority() {
    return this._listingPriority
  }

  set listingPriority(listingPriority) {
    this._listingPriority = listingPriority
  }

  get roomType() {
    return this._roomType
  }

  set roomType(roomType) {
    this._roomType = roomType
  }

  get longDescription() {
    return this._longDescription
  }

  set longDescription(longDescription) {
    this._longDescription = longDescription
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  get extraAdultPrice() {
    return this._extraAdultPrice
  }

  set extraAdultPrice(extraAdultPrice) {
    this._extraAdultPrice = extraAdultPrice
  }

  get extraChildPrice() {
    return this._extraChildPrice
  }

  set extraChildPrice(extraChildPrice) {
    this._extraChildPrice = extraChildPrice
  }

  get maxExtraBedsInRoom() {
    return this._maxExtraBedsInRoom
  }

  set maxExtraBedsInRoom(maxExtraBedsInRoom) {
    this._maxExtraBedsInRoom = maxExtraBedsInRoom
  }

  get dateStartValid() {
    return this._dateStartValid
  }

  set dateStartValid(dateStartValid) {
    this._dateStartValid = dateStartValid
  }

  get dateLastValid() {
    return this._dateLastValid
  }

  set dateLastValid(dateLastValid) {
    this._dateLastValid = dateLastValid
  }

  get defaultPriceListRef() {
    return this._defaultPriceListRef
  }

  set defaultPriceListRef(defaultPriceListRef) {
    this._defaultPriceListRef = defaultPriceListRef
  }

  get priceGroup() {
    return this._priceGroup
  }

  set priceGroup(priceGroup) {
    this._priceGroup = priceGroup
  }

  get variationGroupId() {
    return this._variationGroupId
  }

  set variationGroupId(variationGroupId) {
    this._variationGroupId = variationGroupId
  }

  get parentId() {
    return this._parentId
  }

  set parentId(parentId) {
    this._parentId = parentId
  }

  get linkPriceId() {
    return this._linkPriceId
  }

  set linkPriceId(linkPriceId) {
    this._linkPriceId = linkPriceId
  }

  get linkRuleId() {
    return this._linkRuleId
  }

  set linkRuleId(linkRuleId) {
    this._linkRuleId = linkRuleId
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

  get defaultLanguage() {
    return this._defaultLanguage
  }

  set defaultLanguage(defaultLanguage) {
    this._defaultLanguage = defaultLanguage
  }

  get state() {
    return this._state
  }

  set state(state) {
    if ( isPlainObject(state) ) {
      this._state = new PackageState(state)
    }
    else {
      this._state = state
    }
  }

  get label() {
    return this._label
  }

  set label(label) {
    this._label = label
  }

  get defaultOpen() {
    return this._defaultOpen
  }

  set defaultOpen(defaultOpen) {
    this._defaultOpen = defaultOpen
  }

  get mealPlanMandatory() {
    return this._mealPlanMandatory
  }

  set mealPlanMandatory(mealPlanMandatory) {
    this._mealPlanMandatory = mealPlanMandatory
  }

  get allowCancellation() {
    return this._allowCancellation
  }

  set allowCancellation(allowCancellation) {
    this._allowCancellation = allowCancellation
  }

  get allowModification() {
    return this._allowModification
  }

  set allowModification(allowModification) {
    this._allowModification = allowModification
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isObject(translations) ) {
      translations = mapValues(translations, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomPriceInt(iteratee)
        }
        return iteratee
      })
    }
    this._translations = translations
  }

}
