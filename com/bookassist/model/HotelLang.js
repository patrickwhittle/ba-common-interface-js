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

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

  get fullFilled() {
    return this._fullFilled
  }

  set fullFilled(fullFilled) {
    this._fullFilled = fullFilled
  }

  get howToGet() {
    return this._howToGet
  }

  set howToGet(howToGet) {
    this._howToGet = howToGet
  }

  get comment() {
    return this._comment
  }

  set comment(comment) {
    this._comment = comment
  }

  get hotelCancellation() {
    return this._hotelCancellation
  }

  set hotelCancellation(hotelCancellation) {
    this._hotelCancellation = hotelCancellation
  }

  get corporateCancellation() {
    return this._corporateCancellation
  }

  set corporateCancellation(corporateCancellation) {
    this._corporateCancellation = corporateCancellation
  }

  get shortDescription() {
    return this._shortDescription
  }

  set shortDescription(shortDescription) {
    this._shortDescription = shortDescription
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

}
