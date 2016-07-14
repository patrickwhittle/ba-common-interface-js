import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class NightPrice extends Restable {

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

  get basePriceOrginal() {
    return this._basePriceOrginal
  }

  set basePriceOrginal(basePriceOrginal) {
    this._basePriceOrginal = basePriceOrginal
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get date() {
    return this._date
  }

  set date(date) {
    this._date = date
  }

  get hotelDeposit() {
    return this._hotelDeposit
  }

  set hotelDeposit(hotelDeposit) {
    this._hotelDeposit = hotelDeposit
  }

  get mealplanAdultPrice() {
    return this._mealplanAdultPrice
  }

  set mealplanAdultPrice(mealplanAdultPrice) {
    this._mealplanAdultPrice = mealplanAdultPrice
  }

  get mealplanBookassistCommission() {
    return this._mealplanBookassistCommission
  }

  set mealplanBookassistCommission(mealplanBookassistCommission) {
    this._mealplanBookassistCommission = mealplanBookassistCommission
  }

  get mealplanBookassistDeposit() {
    return this._mealplanBookassistDeposit
  }

  set mealplanBookassistDeposit(mealplanBookassistDeposit) {
    this._mealplanBookassistDeposit = mealplanBookassistDeposit
  }

  get mealplanChildrenPrice() {
    return this._mealplanChildrenPrice
  }

  set mealplanChildrenPrice(mealplanChildrenPrice) {
    this._mealplanChildrenPrice = mealplanChildrenPrice
  }

  get mealplanDeposit() {
    return this._mealplanDeposit
  }

  set mealplanDeposit(mealplanDeposit) {
    this._mealplanDeposit = mealplanDeposit
  }

  get ref() {
    return this._ref
  }

  set ref(ref) {
    this._ref = ref
  }

  get extraAdultPrice() {
    return this._extraAdultPrice
  }

  set extraAdultPrice(extraAdultPrice) {
    this._extraAdultPrice = extraAdultPrice
  }

  get extraChildrenPrices() {
    return this._extraChildrenPrices
  }

  set extraChildrenPrices(extraChildrenPrices) {
    this._extraChildrenPrices = extraChildrenPrices
  }

  get extraChildrenIds() {
    return this._extraChildrenIds
  }

  set extraChildrenIds(extraChildrenIds) {
    this._extraChildrenIds = extraChildrenIds
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

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  get priceAllIncluded() {
    return this._priceAllIncluded
  }

  set priceAllIncluded(priceAllIncluded) {
    this._priceAllIncluded = priceAllIncluded
  }

}

export default NightPrice
