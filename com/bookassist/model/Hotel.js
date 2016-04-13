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

  get comment() {
    return this._comment
  }

  set comment(comment) {
    this._comment = comment
  }

  get cancellationPolicy() {
    return this._cancellationPolicy
  }

  set cancellationPolicy(cancellationPolicy) {
    this._cancellationPolicy = cancellationPolicy
  }

  get corporateCancellationPolicy() {
    return this._corporateCancellationPolicy
  }

  set corporateCancellationPolicy(corporateCancellationPolicy) {
    this._corporateCancellationPolicy = corporateCancellationPolicy
  }

  get voucherPolicy() {
    return this._voucherPolicy
  }

  set voucherPolicy(voucherPolicy) {
    this._voucherPolicy = voucherPolicy
  }

  get rewardPolicy() {
    return this._rewardPolicy
  }

  set rewardPolicy(rewardPolicy) {
    this._rewardPolicy = rewardPolicy
  }

  get commission() {
    return this._commission
  }

  set commission(commission) {
    this._commission = commission
  }

  get howToGet() {
    return this._howToGet
  }

  set howToGet(howToGet) {
    this._howToGet = howToGet
  }

  get deposit() {
    return this._deposit
  }

  set deposit(deposit) {
    this._deposit = deposit
  }

}
