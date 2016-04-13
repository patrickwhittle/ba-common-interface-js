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

  get commission() {
    return this._commission
  }

  set commission(commission) {
    this._commission = commission
  }

  get deposit() {
    return this._deposit
  }

  set deposit(deposit) {
    this._deposit = deposit
  }

  get basePrice() {
    return this._basePrice
  }

  set basePrice(basePrice) {
    this._basePrice = basePrice
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get hotelDeposit() {
    return this._hotelDeposit
  }

  set hotelDeposit(hotelDeposit) {
    this._hotelDeposit = hotelDeposit
  }

  get mealplanBaCommission() {
    return this._mealplanBaCommission
  }

  set mealplanBaCommission(mealplanBaCommission) {
    this._mealplanBaCommission = mealplanBaCommission
  }

  get mealplanBaDeposit() {
    return this._mealplanBaDeposit
  }

  set mealplanBaDeposit(mealplanBaDeposit) {
    this._mealplanBaDeposit = mealplanBaDeposit
  }

  get mealplanDeposit() {
    return this._mealplanDeposit
  }

  set mealplanDeposit(mealplanDeposit) {
    this._mealplanDeposit = mealplanDeposit
  }

  get mealplanValue() {
    return this._mealplanValue
  }

  set mealplanValue(mealplanValue) {
    this._mealplanValue = mealplanValue
  }

  get vatOnCommission() {
    return this._vatOnCommission
  }

  set vatOnCommission(vatOnCommission) {
    this._vatOnCommission = vatOnCommission
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

  get addOnValue() {
    return this._addOnValue
  }

  set addOnValue(addOnValue) {
    this._addOnValue = addOnValue
  }

  get addOnCommissionable() {
    return this._addOnCommissionable
  }

  set addOnCommissionable(addOnCommissionable) {
    this._addOnCommissionable = addOnCommissionable
  }

  get addOnDeposit() {
    return this._addOnDeposit
  }

  set addOnDeposit(addOnDeposit) {
    this._addOnDeposit = addOnDeposit
  }

  get addOnBaDeposit() {
    return this._addOnBaDeposit
  }

  set addOnBaDeposit(addOnBaDeposit) {
    this._addOnBaDeposit = addOnBaDeposit
  }

  get addOnBaCommission() {
    return this._addOnBaCommission
  }

  set addOnBaCommission(addOnBaCommission) {
    this._addOnBaCommission = addOnBaCommission
  }

  get total() {
    return this._total
  }

  set total(total) {
    this._total = total
  }

  get totalAmount() {
    return this._totalAmount
  }

  set totalAmount(totalAmount) {
    this._totalAmount = totalAmount
  }

  get totalDeposit() {
    return this._totalDeposit
  }

  set totalDeposit(totalDeposit) {
    this._totalDeposit = totalDeposit
  }

  get extraAdultDeposit() {
    return this._extraAdultDeposit
  }

  set extraAdultDeposit(extraAdultDeposit) {
    this._extraAdultDeposit = extraAdultDeposit
  }

  get extraAdultHotelDeposit() {
    return this._extraAdultHotelDeposit
  }

  set extraAdultHotelDeposit(extraAdultHotelDeposit) {
    this._extraAdultHotelDeposit = extraAdultHotelDeposit
  }

  get extraAdultCommission() {
    return this._extraAdultCommission
  }

  set extraAdultCommission(extraAdultCommission) {
    this._extraAdultCommission = extraAdultCommission
  }

  get basePriceDeposit() {
    return this._basePriceDeposit
  }

  set basePriceDeposit(basePriceDeposit) {
    this._basePriceDeposit = basePriceDeposit
  }

  get basePriceHotelDeposit() {
    return this._basePriceHotelDeposit
  }

  set basePriceHotelDeposit(basePriceHotelDeposit) {
    this._basePriceHotelDeposit = basePriceHotelDeposit
  }

  get basePriceCommission() {
    return this._basePriceCommission
  }

  set basePriceCommission(basePriceCommission) {
    this._basePriceCommission = basePriceCommission
  }

  get extraChildrenPrices() {
    return this._extraChildrenPrices
  }

  set extraChildrenPrices(extraChildrenPrices) {
    this._extraChildrenPrices = extraChildrenPrices
  }

  get extraChildrenDeposit() {
    return this._extraChildrenDeposit
  }

  set extraChildrenDeposit(extraChildrenDeposit) {
    this._extraChildrenDeposit = extraChildrenDeposit
  }

  get extraChildrenHotelDeposit() {
    return this._extraChildrenHotelDeposit
  }

  set extraChildrenHotelDeposit(extraChildrenHotelDeposit) {
    this._extraChildrenHotelDeposit = extraChildrenHotelDeposit
  }

  get extraChildrenCommission() {
    return this._extraChildrenCommission
  }

  set extraChildrenCommission(extraChildrenCommission) {
    this._extraChildrenCommission = extraChildrenCommission
  }

  get mealplanAdultsPrice() {
    return this._mealplanAdultsPrice
  }

  set mealplanAdultsPrice(mealplanAdultsPrice) {
    this._mealplanAdultsPrice = mealplanAdultsPrice
  }

  get mealplanChildrenPrices() {
    return this._mealplanChildrenPrices
  }

  set mealplanChildrenPrices(mealplanChildrenPrices) {
    this._mealplanChildrenPrices = mealplanChildrenPrices
  }

  get mealplanAdultDeposit() {
    return this._mealplanAdultDeposit
  }

  set mealplanAdultDeposit(mealplanAdultDeposit) {
    this._mealplanAdultDeposit = mealplanAdultDeposit
  }

  get mealplanAdultHotelDeposit() {
    return this._mealplanAdultHotelDeposit
  }

  set mealplanAdultHotelDeposit(mealplanAdultHotelDeposit) {
    this._mealplanAdultHotelDeposit = mealplanAdultHotelDeposit
  }

  get mealplanAdultCommission() {
    return this._mealplanAdultCommission
  }

  set mealplanAdultCommission(mealplanAdultCommission) {
    this._mealplanAdultCommission = mealplanAdultCommission
  }

  get mealplanChildrenDeposit() {
    return this._mealplanChildrenDeposit
  }

  set mealplanChildrenDeposit(mealplanChildrenDeposit) {
    this._mealplanChildrenDeposit = mealplanChildrenDeposit
  }

  get mealplanChildrenHotelDeposit() {
    return this._mealplanChildrenHotelDeposit
  }

  set mealplanChildrenHotelDeposit(mealplanChildrenHotelDeposit) {
    this._mealplanChildrenHotelDeposit = mealplanChildrenHotelDeposit
  }

  get mealplanChildrenCommission() {
    return this._mealplanChildrenCommission
  }

  set mealplanChildrenCommission(mealplanChildrenCommission) {
    this._mealplanChildrenCommission = mealplanChildrenCommission
  }

}
