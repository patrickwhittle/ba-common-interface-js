import Restable from '../../../Restable'
import MealPlanGuest from '../../../com/bookassist/model/mealplan/MealPlanGuest'
import MealPlanTranslation from '../../../com/bookassist/model/mealplan/MealPlanTranslation'
import MealPlanType from '../../../com/bookassist/model/mealplan/MealPlanType'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class MealPlan extends Restable {

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

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get label() {
    return this._label
  }

  set label(label) {
    this._label = label
  }

  get type() {
    return this._type
  }

  set type(type) {
    if ( isPlainObject(type) ) {
      this._type = new MealPlanType(type)
    }
    else {
      this._type = type
    }
  }

  get status() {
    return this._status
  }

  set status(status) {
    this._status = status
  }

  get orderInd() {
    return this._orderInd
  }

  set orderInd(orderInd) {
    this._orderInd = orderInd
  }

  get mealPlanGuests() {
    return this._mealPlanGuests
  }

  set mealPlanGuests(mealPlanGuests) {
    if ( isArray(mealPlanGuests) ) {
      mealPlanGuests = mealPlanGuests.map((item) => {
        if ( isPlainObject(item) ) {
          return new MealPlanGuest(item)
        }
        return item
      })
    }
    this._mealPlanGuests = mealPlanGuests
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

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isArray(translations) ) {
      translations = translations.map((item) => {
        if ( isPlainObject(item) ) {
          return new MealPlanTranslation(item)
        }
        return item
      })
    }
    this._translations = translations
  }

  get defaultTranslation() {
    return this._defaultTranslation
  }

  set defaultTranslation(defaultTranslation) {
    this._defaultTranslation = defaultTranslation
  }

}

export default MealPlan
