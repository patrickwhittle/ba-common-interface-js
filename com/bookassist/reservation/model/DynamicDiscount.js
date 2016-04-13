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

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get amount() {
    return this._amount
  }

  set amount(amount) {
    this._amount = amount
  }

  get id() {
    return this._id
  }

  set id(id) {
    this._id = id
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get lastEarly() {
    return this._lastEarly
  }

  set lastEarly(lastEarly) {
    this._lastEarly = lastEarly
  }

  get minStay() {
    return this._minStay
  }

  set minStay(minStay) {
    this._minStay = minStay
  }

  get nights() {
    return this._nights
  }

  set nights(nights) {
    this._nights = nights
  }

  get numHours() {
    return this._numHours
  }

  set numHours(numHours) {
    this._numHours = numHours
  }

  get recurring() {
    return this._recurring
  }

  set recurring(recurring) {
    this._recurring = recurring
  }

  get applyToExtraBeds() {
    return this._applyToExtraBeds
  }

  set applyToExtraBeds(applyToExtraBeds) {
    this._applyToExtraBeds = applyToExtraBeds
  }

  get applyToMealPlan() {
    return this._applyToMealPlan
  }

  set applyToMealPlan(applyToMealPlan) {
    this._applyToMealPlan = applyToMealPlan
  }

  get discountValue() {
    return this._discountValue
  }

  set discountValue(discountValue) {
    this._discountValue = discountValue
  }

  get defaultAvailability() {
    return this._defaultAvailability
  }

  set defaultAvailability(defaultAvailability) {
    this._defaultAvailability = defaultAvailability
  }

}
