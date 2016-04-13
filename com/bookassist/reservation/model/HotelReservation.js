import Restable from '../../../../Restable'
import AddOn from '../../../../com/bookassist/reservation/model/AddOn'
import BillingContact from '../../../../com/bookassist/reservation/model/BillingContact'
import BookingStatus from '../../../../com/bookassist/reservation/model/BookingStatus'
import CorporateContact from '../../../../com/bookassist/reservation/model/CorporateContact'
import CorporateOptions from '../../../../com/bookassist/reservation/model/CorporateOptions'
import CustomerContact from '../../../../com/bookassist/reservation/model/CustomerContact'
import Devices from '../../../../com/bookassist/reservation/model/Devices'
import HotelMiscPolicy from '../../../../com/bookassist/reservation/model/HotelMiscPolicy'
import HotelPaymentPolicy from '../../../../com/bookassist/reservation/model/HotelPaymentPolicy'
import HotelTermsConditions from '../../../../com/bookassist/reservation/model/HotelTermsConditions'
import PayNow from '../../../../com/bookassist/reservation/model/PayNow'
import PayNowInteger from '../../../../com/bookassist/reservation/model/PayNowInteger'
import Points from '../../../../com/bookassist/reservation/model/Points'
import Room from '../../../../com/bookassist/reservation/model/Room'
import Server from '../../../../com/bookassist/reservation/model/Server'
import SpecialRequirements from '../../../../com/bookassist/reservation/model/SpecialRequirements'
import TotalToPay from '../../../../com/bookassist/reservation/model/TotalToPay'
import TotalToPayInteger from '../../../../com/bookassist/reservation/model/TotalToPayInteger'
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

  get reservationId() {
    return this._reservationId
  }

  set reservationId(reservationId) {
    this._reservationId = reservationId
  }

  get bookingReference() {
    return this._bookingReference
  }

  set bookingReference(bookingReference) {
    this._bookingReference = bookingReference
  }

  get customerContact() {
    return this._customerContact
  }

  set customerContact(customerContact) {
    if ( isPlainObject(customerContact) ) {
      this._customerContact = new CustomerContact(customerContact)
    }
    else {
      this._customerContact = customerContact
    }
  }

  get billingContact() {
    return this._billingContact
  }

  set billingContact(billingContact) {
    if ( isPlainObject(billingContact) ) {
      this._billingContact = new BillingContact(billingContact)
    }
    else {
      this._billingContact = billingContact
    }
  }

  get corporateContact() {
    return this._corporateContact
  }

  set corporateContact(corporateContact) {
    if ( isPlainObject(corporateContact) ) {
      this._corporateContact = new CorporateContact(corporateContact)
    }
    else {
      this._corporateContact = corporateContact
    }
  }

  get corporateOptions() {
    return this._corporateOptions
  }

  set corporateOptions(corporateOptions) {
    if ( isPlainObject(corporateOptions) ) {
      this._corporateOptions = new CorporateOptions(corporateOptions)
    }
    else {
      this._corporateOptions = corporateOptions
    }
  }

  get totalToPay() {
    return this._totalToPay
  }

  set totalToPay(totalToPay) {
    if ( isPlainObject(totalToPay) ) {
      this._totalToPay = new TotalToPay(totalToPay)
    }
    else {
      this._totalToPay = totalToPay
    }
  }

  get totalToPayInteger() {
    return this._totalToPayInteger
  }

  set totalToPayInteger(totalToPayInteger) {
    if ( isPlainObject(totalToPayInteger) ) {
      this._totalToPayInteger = new TotalToPayInteger(totalToPayInteger)
    }
    else {
      this._totalToPayInteger = totalToPayInteger
    }
  }

  get addons() {
    return this._addons
  }

  set addons(addons) {
    if ( isArray(addons) ) {
      addons = addons.map((iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new AddOn(iteratee)
        }
        return iteratee
      })
    }
    this._addons = addons
  }

  get payNow() {
    return this._payNow
  }

  set payNow(payNow) {
    if ( isPlainObject(payNow) ) {
      this._payNow = new PayNow(payNow)
    }
    else {
      this._payNow = payNow
    }
  }

  get payNowInteger() {
    return this._payNowInteger
  }

  set payNowInteger(payNowInteger) {
    if ( isPlainObject(payNowInteger) ) {
      this._payNowInteger = new PayNowInteger(payNowInteger)
    }
    else {
      this._payNowInteger = payNowInteger
    }
  }

  get rooms() {
    return this._rooms
  }

  set rooms(rooms) {
    if ( isArray(rooms) ) {
      rooms = rooms.map((iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new Room(iteratee)
        }
        return iteratee
      })
    }
    this._rooms = rooms
  }

  get server() {
    return this._server
  }

  set server(server) {
    if ( isPlainObject(server) ) {
      this._server = new Server(server)
    }
    else {
      this._server = server
    }
  }

  get specialRequirements() {
    return this._specialRequirements
  }

  set specialRequirements(specialRequirements) {
    if ( isPlainObject(specialRequirements) ) {
      this._specialRequirements = new SpecialRequirements(specialRequirements)
    }
    else {
      this._specialRequirements = specialRequirements
    }
  }

  get points() {
    return this._points
  }

  set points(points) {
    if ( isPlainObject(points) ) {
      this._points = new Points(points)
    }
    else {
      this._points = points
    }
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get userLanguage() {
    return this._userLanguage
  }

  set userLanguage(userLanguage) {
    this._userLanguage = userLanguage
  }

  get arrivalTime() {
    return this._arrivalTime
  }

  set arrivalTime(arrivalTime) {
    this._arrivalTime = arrivalTime
  }

  get arrivalDate() {
    return this._arrivalDate
  }

  set arrivalDate(arrivalDate) {
    this._arrivalDate = arrivalDate
  }

  get departureDate() {
    return this._departureDate
  }

  set departureDate(departureDate) {
    this._departureDate = departureDate
  }

  get totalPersons() {
    return this._totalPersons
  }

  set totalPersons(totalPersons) {
    this._totalPersons = totalPersons
  }

  get numberOfAdults() {
    return this._numberOfAdults
  }

  set numberOfAdults(numberOfAdults) {
    this._numberOfAdults = numberOfAdults
  }

  get numberOfChildren() {
    return this._numberOfChildren
  }

  set numberOfChildren(numberOfChildren) {
    this._numberOfChildren = numberOfChildren
  }

  get numberOfInfants() {
    return this._numberOfInfants
  }

  set numberOfInfants(numberOfInfants) {
    this._numberOfInfants = numberOfInfants
  }

  get bookedDate() {
    return this._bookedDate
  }

  set bookedDate(bookedDate) {
    this._bookedDate = bookedDate
  }

  get cancelDate() {
    return this._cancelDate
  }

  set cancelDate(cancelDate) {
    this._cancelDate = cancelDate
  }

  get modificationDate() {
    return this._modificationDate
  }

  set modificationDate(modificationDate) {
    this._modificationDate = modificationDate
  }

  get extraInfo() {
    return this._extraInfo
  }

  set extraInfo(extraInfo) {
    this._extraInfo = extraInfo
  }

  get requestStatus() {
    return this._requestStatus
  }

  set requestStatus(requestStatus) {
    if ( isPlainObject(requestStatus) ) {
      this._requestStatus = new BookingStatus(requestStatus)
    }
    else {
      this._requestStatus = requestStatus
    }
  }

  get sessionId() {
    return this._sessionId
  }

  set sessionId(sessionId) {
    this._sessionId = sessionId
  }

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get faxStatus() {
    return this._faxStatus
  }

  set faxStatus(faxStatus) {
    this._faxStatus = faxStatus
  }

  get depositRequired() {
    return this._depositRequired
  }

  set depositRequired(depositRequired) {
    this._depositRequired = depositRequired
  }

  get bookingFee() {
    return this._bookingFee
  }

  set bookingFee(bookingFee) {
    this._bookingFee = bookingFee
  }

  get trackingCode() {
    return this._trackingCode
  }

  set trackingCode(trackingCode) {
    this._trackingCode = trackingCode
  }

  get priceGroup() {
    return this._priceGroup
  }

  set priceGroup(priceGroup) {
    this._priceGroup = priceGroup
  }

  get promoCode() {
    return this._promoCode
  }

  set promoCode(promoCode) {
    this._promoCode = promoCode
  }

  get referrer() {
    return this._referrer
  }

  set referrer(referrer) {
    this._referrer = referrer
  }

  get numberOfNights() {
    return this._numberOfNights
  }

  set numberOfNights(numberOfNights) {
    this._numberOfNights = numberOfNights
  }

  get engine() {
    return this._engine
  }

  set engine(engine) {
    this._engine = engine
  }

  get extraTaxName() {
    return this._extraTaxName
  }

  set extraTaxName(extraTaxName) {
    this._extraTaxName = extraTaxName
  }

  get extraTaxNameI18n() {
    return this._extraTaxNameI18n
  }

  set extraTaxNameI18n(extraTaxNameI18n) {
    this._extraTaxNameI18n = extraTaxNameI18n
  }

  get extraTaxAmount() {
    return this._extraTaxAmount
  }

  set extraTaxAmount(extraTaxAmount) {
    this._extraTaxAmount = extraTaxAmount
  }

  get contractAccepted() {
    return this._contractAccepted
  }

  set contractAccepted(contractAccepted) {
    this._contractAccepted = contractAccepted
  }

  get bookingPage() {
    return this._bookingPage
  }

  set bookingPage(bookingPage) {
    this._bookingPage = bookingPage
  }

  get channelId() {
    return this._channelId
  }

  set channelId(channelId) {
    this._channelId = channelId
  }

  get exchange() {
    return this._exchange
  }

  set exchange(exchange) {
    this._exchange = exchange
  }

  get roomConfigured() {
    return this._roomConfigured
  }

  set roomConfigured(roomConfigured) {
    this._roomConfigured = roomConfigured
  }

  get hotelMerchantUsed() {
    return this._hotelMerchantUsed
  }

  set hotelMerchantUsed(hotelMerchantUsed) {
    this._hotelMerchantUsed = hotelMerchantUsed
  }

  get pms() {
    return this._pms
  }

  set pms(pms) {
    this._pms = pms
  }

  get thirdPartySiteId() {
    return this._thirdPartySiteId
  }

  set thirdPartySiteId(thirdPartySiteId) {
    this._thirdPartySiteId = thirdPartySiteId
  }

  get countyId() {
    return this._countyId
  }

  set countyId(countyId) {
    this._countyId = countyId
  }

  get oldBookingReference() {
    return this._oldBookingReference
  }

  set oldBookingReference(oldBookingReference) {
    this._oldBookingReference = oldBookingReference
  }

  get newBookingReference() {
    return this._newBookingReference
  }

  set newBookingReference(newBookingReference) {
    this._newBookingReference = newBookingReference
  }

  get tracked() {
    return this._tracked
  }

  set tracked(tracked) {
    this._tracked = tracked
  }

  get leavesIframe() {
    return this._leavesIframe
  }

  set leavesIframe(leavesIframe) {
    this._leavesIframe = leavesIframe
  }

  get businessOrLeisure() {
    return this._businessOrLeisure
  }

  set businessOrLeisure(businessOrLeisure) {
    this._businessOrLeisure = businessOrLeisure
  }

  get miscPolicy() {
    return this._miscPolicy
  }

  set miscPolicy(miscPolicy) {
    if ( isObject(miscPolicy) ) {
      miscPolicy = mapValues(miscPolicy, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new HotelMiscPolicy(iteratee)
        }
        return iteratee
      })
    }
    this._miscPolicy = miscPolicy
  }

  get paymentPolicy() {
    return this._paymentPolicy
  }

  set paymentPolicy(paymentPolicy) {
    if ( isObject(paymentPolicy) ) {
      paymentPolicy = mapValues(paymentPolicy, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new HotelPaymentPolicy(iteratee)
        }
        return iteratee
      })
    }
    this._paymentPolicy = paymentPolicy
  }

  get termsConditions() {
    return this._termsConditions
  }

  set termsConditions(termsConditions) {
    if ( isObject(termsConditions) ) {
      termsConditions = mapValues(termsConditions, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new HotelTermsConditions(iteratee)
        }
        return iteratee
      })
    }
    this._termsConditions = termsConditions
  }

  get conditions() {
    return this._conditions
  }

  set conditions(conditions) {
    this._conditions = conditions
  }

  get device() {
    return this._device
  }

  set device(device) {
    if ( isPlainObject(device) ) {
      this._device = new Devices(device)
    }
    else {
      this._device = device
    }
  }

  get roomsLocked() {
    return this._roomsLocked
  }

  set roomsLocked(roomsLocked) {
    this._roomsLocked = roomsLocked
  }

  get roomLockTimeout() {
    return this._roomLockTimeout
  }

  set roomLockTimeout(roomLockTimeout) {
    this._roomLockTimeout = roomLockTimeout
  }

  get bookingType() {
    return this._bookingType
  }

  set bookingType(bookingType) {
    this._bookingType = bookingType
  }

}
// missing get and/or set for pms
