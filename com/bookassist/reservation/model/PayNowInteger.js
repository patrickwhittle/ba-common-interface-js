import Restable from '../../../../Restable'
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

  get addonDeposit() {
    return this._addonDeposit
  }

  set addonDeposit(addonDeposit) {
    this._addonDeposit = addonDeposit
  }

  get addonMaDeposit() {
    return this._addonMaDeposit
  }

  set addonMaDeposit(addonMaDeposit) {
    this._addonMaDeposit = addonMaDeposit
  }

  get addonHotelDeposit() {
    return this._addonHotelDeposit
  }

  set addonHotelDeposit(addonHotelDeposit) {
    this._addonHotelDeposit = addonHotelDeposit
  }

  get deposit() {
    return this._deposit
  }

  set deposit(deposit) {
    this._deposit = deposit
  }

  get maDeposit() {
    return this._maDeposit
  }

  set maDeposit(maDeposit) {
    this._maDeposit = maDeposit
  }

  get hotelDeposit() {
    return this._hotelDeposit
  }

  set hotelDeposit(hotelDeposit) {
    this._hotelDeposit = hotelDeposit
  }

  get bookingFee() {
    return this._bookingFee
  }

  set bookingFee(bookingFee) {
    this._bookingFee = bookingFee
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get depositModel() {
    return this._depositModel
  }

  set depositModel(depositModel) {
    this._depositModel = depositModel
  }

  get hotelAddonOnDeposit() {
    return this._hotelAddonOnDeposit
  }

  set hotelAddonOnDeposit(hotelAddonOnDeposit) {
    this._hotelAddonOnDeposit = hotelAddonOnDeposit
  }

  get invoiceType() {
    return this._invoiceType
  }

  set invoiceType(invoiceType) {
    this._invoiceType = invoiceType
  }

  get mpBaDeposit() {
    return this._mpBaDeposit
  }

  set mpBaDeposit(mpBaDeposit) {
    this._mpBaDeposit = mpBaDeposit
  }

  get mpBaMaDeposit() {
    return this._mpBaMaDeposit
  }

  set mpBaMaDeposit(mpBaMaDeposit) {
    this._mpBaMaDeposit = mpBaMaDeposit
  }

  get mpDeposit() {
    return this._mpDeposit
  }

  set mpDeposit(mpDeposit) {
    this._mpDeposit = mpDeposit
  }

  get roomAddOnDeposit() {
    return this._roomAddOnDeposit
  }

  set roomAddOnDeposit(roomAddOnDeposit) {
    this._roomAddOnDeposit = roomAddOnDeposit
  }

  get vatOnCommission() {
    return this._vatOnCommission
  }

  set vatOnCommission(vatOnCommission) {
    this._vatOnCommission = vatOnCommission
  }

  get vatPercentage() {
    return this._vatPercentage
  }

  set vatPercentage(vatPercentage) {
    this._vatPercentage = vatPercentage
  }

  get valuePayNow() {
    return this._valuePayNow
  }

  set valuePayNow(valuePayNow) {
    this._valuePayNow = valuePayNow
  }

  get paymentAttempts() {
    return this._paymentAttempts
  }

  set paymentAttempts(paymentAttempts) {
    this._paymentAttempts = paymentAttempts
  }

  get totalDepositAmount() {
    return this._totalDepositAmount
  }

  set totalDepositAmount(totalDepositAmount) {
    this._totalDepositAmount = totalDepositAmount
  }

  get vatCountryAmount() {
    return this._vatCountryAmount
  }

  set vatCountryAmount(vatCountryAmount) {
    this._vatCountryAmount = vatCountryAmount
  }

  get vatCountryPercentage() {
    return this._vatCountryPercentage
  }

  set vatCountryPercentage(vatCountryPercentage) {
    this._vatCountryPercentage = vatCountryPercentage
  }

}
