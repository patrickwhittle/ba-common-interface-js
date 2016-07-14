import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Deposit extends Restable {

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

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get deposit() {
    return this._deposit
  }

  set deposit(deposit) {
    this._deposit = deposit
  }

  get baDeposit() {
    return this._baDeposit
  }

  set baDeposit(baDeposit) {
    this._baDeposit = baDeposit
  }

  get channelId() {
    return this._channelId
  }

  set channelId(channelId) {
    this._channelId = channelId
  }

  get merchantAccountId() {
    return this._merchantAccountId
  }

  set merchantAccountId(merchantAccountId) {
    this._merchantAccountId = merchantAccountId
  }

}

Deposit.CLARION_DEPOSIT_MODEL = 4
Deposit.COMMISSION = "COMMISSION"
Deposit.CORPORATE = "CORPORATE"
Deposit.MERCHANT = "MERCHANT"
Deposit.NO_DEPOSIT_REQUIRED = 0
Deposit.PAID = "PAID"
Deposit.PERCENT_WITH_FIXED_PERCENT_PAYMENT_SCHEDULE = 2
Deposit.PURCHASE_TYPE_BOOKING = 1
Deposit.PURCHASE_TYPE_BOTH_BOOKING_VOUCHER = 3
Deposit.PURCHASE_TYPE_VOUCHER = 2
Deposit.STANDARD_PERCENT_DEPOSIT = 1
Deposit.VOUCHER_REDEEMED = "VOUCHER_REDEEMED"
Deposit.VOUCHER_WITH_NO_DEPOSIT = 3

export default Deposit
