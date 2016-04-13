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

  get bookingReference() {
    return this._bookingReference
  }

  set bookingReference(bookingReference) {
    this._bookingReference = bookingReference
  }

  get dateBooked() {
    return this._dateBooked
  }

  set dateBooked(dateBooked) {
    this._dateBooked = dateBooked
  }

  get dateBookedDt() {
    return this._dateBookedDt
  }

  set dateBookedDt(dateBookedDt) {
    this._dateBookedDt = dateBookedDt
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

  get requestStatus() {
    return this._requestStatus
  }

  set requestStatus(requestStatus) {
    this._requestStatus = requestStatus
  }

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get depositRequired() {
    return this._depositRequired
  }

  set depositRequired(depositRequired) {
    this._depositRequired = depositRequired
  }

  get totalNumberInGroup() {
    return this._totalNumberInGroup
  }

  set totalNumberInGroup(totalNumberInGroup) {
    this._totalNumberInGroup = totalNumberInGroup
  }

  get numberOfRoomsBooked() {
    return this._numberOfRoomsBooked
  }

  set numberOfRoomsBooked(numberOfRoomsBooked) {
    this._numberOfRoomsBooked = numberOfRoomsBooked
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get totalReservationAmount() {
    return this._totalReservationAmount
  }

  set totalReservationAmount(totalReservationAmount) {
    this._totalReservationAmount = totalReservationAmount
  }

  get addOnAmount() {
    return this._addOnAmount
  }

  set addOnAmount(addOnAmount) {
    this._addOnAmount = addOnAmount
  }

  get depositAmount() {
    return this._depositAmount
  }

  set depositAmount(depositAmount) {
    this._depositAmount = depositAmount
  }

  get addOnCommission() {
    return this._addOnCommission
  }

  set addOnCommission(addOnCommission) {
    this._addOnCommission = addOnCommission
  }

  get bookingFee() {
    return this._bookingFee
  }

  set bookingFee(bookingFee) {
    this._bookingFee = bookingFee
  }

  get customerName() {
    return this._customerName
  }

  set customerName(customerName) {
    this._customerName = customerName
  }

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
  }

  get addressName() {
    return this._addressName
  }

  set addressName(addressName) {
    this._addressName = addressName
  }

  get ch() {
    return this._ch
  }

  set ch(ch) {
    this._ch = ch
  }

  get customerCountry() {
    return this._customerCountry
  }

  set customerCountry(customerCountry) {
    this._customerCountry = customerCountry
  }

  get hotelCounty() {
    return this._hotelCounty
  }

  set hotelCounty(hotelCounty) {
    this._hotelCounty = hotelCounty
  }

  get mealplanAmount() {
    return this._mealplanAmount
  }

  set mealplanAmount(mealplanAmount) {
    this._mealplanAmount = mealplanAmount
  }

  get mealplanCommission() {
    return this._mealplanCommission
  }

  set mealplanCommission(mealplanCommission) {
    this._mealplanCommission = mealplanCommission
  }

  get dateCancel() {
    return this._dateCancel
  }

  set dateCancel(dateCancel) {
    this._dateCancel = dateCancel
  }

  get hgId() {
    return this._hgId
  }

  set hgId(hgId) {
    this._hgId = hgId
  }

}
