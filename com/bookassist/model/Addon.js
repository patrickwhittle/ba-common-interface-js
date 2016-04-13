import Restable from '../../../Restable'
import AddonInt from '../../../com/bookassist/model/translation/AddonInt'
import Status from '../../../com/bookassist/model/addon/Status'
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

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  get priceDescription() {
    return this._priceDescription
  }

  set priceDescription(priceDescription) {
    this._priceDescription = priceDescription
  }

  get maxQuantity() {
    return this._maxQuantity
  }

  set maxQuantity(maxQuantity) {
    this._maxQuantity = maxQuantity
  }

  get priceGroup() {
    return this._priceGroup
  }

  set priceGroup(priceGroup) {
    this._priceGroup = priceGroup
  }

  get addonGroupId() {
    return this._addonGroupId
  }

  set addonGroupId(addonGroupId) {
    this._addonGroupId = addonGroupId
  }

  get defaultRoomPriceId() {
    return this._defaultRoomPriceId
  }

  set defaultRoomPriceId(defaultRoomPriceId) {
    this._defaultRoomPriceId = defaultRoomPriceId
  }

  get order() {
    return this._order
  }

  set order(order) {
    this._order = order
  }

  get commissionable() {
    return this._commissionable
  }

  set commissionable(commissionable) {
    this._commissionable = commissionable
  }

  get showOnChannel() {
    return this._showOnChannel
  }

  set showOnChannel(showOnChannel) {
    this._showOnChannel = showOnChannel
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

  get hotelAddon() {
    return this._hotelAddon
  }

  set hotelAddon(hotelAddon) {
    this._hotelAddon = hotelAddon
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isObject(translations) ) {
      translations = mapValues(translations, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new AddonInt(iteratee)
        }
        return iteratee
      })
    }
    this._translations = translations
  }

}
