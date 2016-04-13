import Restable from '../../../../Restable'
import DynamicDiscount from '../../../../com/bookassist/reservation/model/DynamicDiscount'
import Mealplan from '../../../../com/bookassist/reservation/model/Mealplan'
import NightPrice from '../../../../com/bookassist/reservation/model/NightPrice'
import RoomAddOn from '../../../../com/bookassist/reservation/model/RoomAddOn'
import RoomCancellationPolicy from '../../../../com/bookassist/reservation/model/RoomCancellationPolicy'
import RoomDescription from '../../../../com/bookassist/reservation/model/RoomDescription'
import RoomMiscPolicy from '../../../../com/bookassist/reservation/model/RoomMiscPolicy'
import RoomOccupancyPolicy from '../../../../com/bookassist/reservation/model/RoomOccupancyPolicy'
import RoomPaymentPolicy from '../../../../com/bookassist/reservation/model/RoomPaymentPolicy'
import RoomProperty from '../../../../com/bookassist/reservation/model/RoomProperty'
import RoomTravelerContact from '../../../../com/bookassist/reservation/model/RoomTravelerContact'
import TotalRoomPrice from '../../../../com/bookassist/reservation/model/TotalRoomPrice'
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

  get pmsAdults() {
    return this._pmsAdults
  }

  set pmsAdults(pmsAdults) {
    this._pmsAdults = pmsAdults
  }

  get pmsChildren() {
    return this._pmsChildren
  }

  set pmsChildren(pmsChildren) {
    this._pmsChildren = pmsChildren
  }

  get childAgeDescription() {
    return this._childAgeDescription
  }

  set childAgeDescription(childAgeDescription) {
    this._childAgeDescription = childAgeDescription
  }

  get allowCancel() {
    return this._allowCancel
  }

  set allowCancel(allowCancel) {
    this._allowCancel = allowCancel
  }

  get allowModification() {
    return this._allowModification
  }

  set allowModification(allowModification) {
    this._allowModification = allowModification
  }

  get numberOfRooms() {
    return this._numberOfRooms
  }

  set numberOfRooms(numberOfRooms) {
    this._numberOfRooms = numberOfRooms
  }

  get occupancy() {
    return this._occupancy
  }

  set occupancy(occupancy) {
    this._occupancy = occupancy
  }

  get roomPriceId() {
    return this._roomPriceId
  }

  set roomPriceId(roomPriceId) {
    this._roomPriceId = roomPriceId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get userLanguage() {
    return this._userLanguage
  }

  set userLanguage(userLanguage) {
    this._userLanguage = userLanguage
  }

  get roomPrice() {
    return this._roomPrice
  }

  set roomPrice(roomPrice) {
    this._roomPrice = roomPrice
  }

  get extraAdults() {
    return this._extraAdults
  }

  set extraAdults(extraAdults) {
    this._extraAdults = extraAdults
  }

  get extraChildren() {
    return this._extraChildren
  }

  set extraChildren(extraChildren) {
    this._extraChildren = extraChildren
  }

  get descriptions() {
    return this._descriptions
  }

  set descriptions(descriptions) {
    if ( isObject(descriptions) ) {
      descriptions = mapValues(descriptions, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomDescription(iteratee)
        }
        return iteratee
      })
    }
    this._descriptions = descriptions
  }

  get roomTypeId() {
    return this._roomTypeId
  }

  set roomTypeId(roomTypeId) {
    this._roomTypeId = roomTypeId
  }

  get roomGroupId() {
    return this._roomGroupId
  }

  set roomGroupId(roomGroupId) {
    this._roomGroupId = roomGroupId
  }

  get nightPrices() {
    return this._nightPrices
  }

  set nightPrices(nightPrices) {
    if ( isArray(nightPrices) ) {
      nightPrices = nightPrices.map((iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new NightPrice(iteratee)
        }
        return iteratee
      })
    }
    this._nightPrices = nightPrices
  }

  get totalRoomPrice() {
    return this._totalRoomPrice
  }

  set totalRoomPrice(totalRoomPrice) {
    if ( isPlainObject(totalRoomPrice) ) {
      this._totalRoomPrice = new TotalRoomPrice(totalRoomPrice)
    }
    else {
      this._totalRoomPrice = totalRoomPrice
    }
  }

  get mealplan() {
    return this._mealplan
  }

  set mealplan(mealplan) {
    if ( isPlainObject(mealplan) ) {
      this._mealplan = new Mealplan(mealplan)
    }
    else {
      this._mealplan = mealplan
    }
  }

  get discount() {
    return this._discount
  }

  set discount(discount) {
    if ( isPlainObject(discount) ) {
      this._discount = new DynamicDiscount(discount)
    }
    else {
      this._discount = discount
    }
  }

  get oneTimePrice() {
    return this._oneTimePrice
  }

  set oneTimePrice(oneTimePrice) {
    this._oneTimePrice = oneTimePrice
  }

  get oneTimePriceMessage() {
    return this._oneTimePriceMessage
  }

  set oneTimePriceMessage(oneTimePriceMessage) {
    this._oneTimePriceMessage = oneTimePriceMessage
  }

  get addons() {
    return this._addons
  }

  set addons(addons) {
    if ( isArray(addons) ) {
      addons = addons.map((iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomAddOn(iteratee)
        }
        return iteratee
      })
    }
    this._addons = addons
  }

  get childAges() {
    return this._childAges
  }

  set childAges(childAges) {
    this._childAges = childAges
  }

  get cancellationPolicies() {
    return this._cancellationPolicies
  }

  set cancellationPolicies(cancellationPolicies) {
    if ( isObject(cancellationPolicies) ) {
      cancellationPolicies = mapValues(cancellationPolicies, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomCancellationPolicy(iteratee)
        }
        return iteratee
      })
    }
    this._cancellationPolicies = cancellationPolicies
  }

  get paymentPolicies() {
    return this._paymentPolicies
  }

  set paymentPolicies(paymentPolicies) {
    if ( isObject(paymentPolicies) ) {
      paymentPolicies = mapValues(paymentPolicies, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomPaymentPolicy(iteratee)
        }
        return iteratee
      })
    }
    this._paymentPolicies = paymentPolicies
  }

  get occupancyPolicies() {
    return this._occupancyPolicies
  }

  set occupancyPolicies(occupancyPolicies) {
    if ( isObject(occupancyPolicies) ) {
      occupancyPolicies = mapValues(occupancyPolicies, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomOccupancyPolicy(iteratee)
        }
        return iteratee
      })
    }
    this._occupancyPolicies = occupancyPolicies
  }

  get miscPolicies() {
    return this._miscPolicies
  }

  set miscPolicies(miscPolicies) {
    if ( isObject(miscPolicies) ) {
      miscPolicies = mapValues(miscPolicies, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomMiscPolicy(iteratee)
        }
        return iteratee
      })
    }
    this._miscPolicies = miscPolicies
  }

  get properties() {
    return this._properties
  }

  set properties(properties) {
    if ( isArray(properties) ) {
      properties = properties.map((iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomProperty(iteratee)
        }
        return iteratee
      })
    }
    this._properties = properties
  }

  get travelerContact() {
    return this._travelerContact
  }

  set travelerContact(travelerContact) {
    if ( isArray(travelerContact) ) {
      travelerContact = travelerContact.map((iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomTravelerContact(iteratee)
        }
        return iteratee
      })
    }
    this._travelerContact = travelerContact
  }

  get pmsId() {
    return this._pmsId
  }

  set pmsId(pmsId) {
    this._pmsId = pmsId
  }

}
// missing get and/or set for roomprice
