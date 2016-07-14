import Restable from '../../../../Restable'
import MealplanGuest from '../../../../com/bookassist/reservation/model/MealplanGuest'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Mealplan extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get commissionable() {
    return this._commissionable
  }

  set commissionable(commissionable) {
    this._commissionable = commissionable
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
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

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get mealplanGuests() {
    return this._mealplanGuests
  }

  set mealplanGuests(mealplanGuests) {
    if ( isArray(mealplanGuests) ) {
      mealplanGuests = mealplanGuests.map((item) => {
        if ( isPlainObject(item) ) {
          return new MealplanGuest(item)
        }
        return item
      })
    }
    this._mealplanGuests = mealplanGuests
  }

}

export default Mealplan
