import Restable from '../../../../Restable'
import MealPlan from '../../../../com/bookassist/model/MealPlan'
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

  get mealPlanId() {
    return this._mealPlanId
  }

  set mealPlanId(mealPlanId) {
    this._mealPlanId = mealPlanId
  }

  get minAge() {
    return this._minAge
  }

  set minAge(minAge) {
    this._minAge = minAge
  }

  get maxAge() {
    return this._maxAge
  }

  set maxAge(maxAge) {
    this._maxAge = maxAge
  }

  get ordinal() {
    return this._ordinal
  }

  set ordinal(ordinal) {
    this._ordinal = ordinal
  }

  get defaultPrice() {
    return this._defaultPrice
  }

  set defaultPrice(defaultPrice) {
    this._defaultPrice = defaultPrice
  }

  get prices() {
    return this._prices
  }

  set prices(prices) {
    this._prices = prices
  }

  get mealPlan() {
    return this._mealPlan
  }

  set mealPlan(mealPlan) {
    if ( isPlainObject(mealPlan) ) {
      this._mealPlan = new MealPlan(mealPlan)
    }
    else {
      this._mealPlan = mealPlan
    }
  }

  get linkMealPlanGuestId() {
    return this._linkMealPlanGuestId
  }

  set linkMealPlanGuestId(linkMealPlanGuestId) {
    this._linkMealPlanGuestId = linkMealPlanGuestId
  }

  get linkRuleId() {
    return this._linkRuleId
  }

  set linkRuleId(linkRuleId) {
    this._linkRuleId = linkRuleId
  }

  get label() {
    return this._label
  }

  set label(label) {
    this._label = label
  }

  get priceType() {
    return this._priceType
  }

  set priceType(priceType) {
    this._priceType = priceType
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get linkValue() {
    return this._linkValue
  }

  set linkValue(linkValue) {
    this._linkValue = linkValue
  }

}
