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
