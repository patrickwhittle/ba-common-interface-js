import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Points extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get amount() {
    return this._amount
  }

  set amount(amount) {
    this._amount = amount
  }

  get code() {
    return this._code
  }

  set code(code) {
    this._code = code
  }

  get bankCharge() {
    return this._bankCharge
  }

  set bankCharge(bankCharge) {
    this._bankCharge = bankCharge
  }

  get bankChargePercent() {
    return this._bankChargePercent
  }

  set bankChargePercent(bankChargePercent) {
    this._bankChargePercent = bankChargePercent
  }

  get currency() {
    return this._currency
  }

  set currency(currency) {
    this._currency = currency
  }

  get dueToHotel() {
    return this._dueToHotel
  }

  set dueToHotel(dueToHotel) {
    this._dueToHotel = dueToHotel
  }

  get pointsUsed() {
    return this._pointsUsed
  }

  set pointsUsed(pointsUsed) {
    this._pointsUsed = pointsUsed
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get partner() {
    return this._partner
  }

  set partner(partner) {
    this._partner = partner
  }

  get roomNightsFree() {
    return this._roomNightsFree
  }

  set roomNightsFree(roomNightsFree) {
    this._roomNightsFree = roomNightsFree
  }

}

export default Points
