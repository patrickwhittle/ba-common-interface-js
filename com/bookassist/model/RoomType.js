import Restable from '../../../Restable'
import RoomTypeInt from '../../../com/bookassist/model/translation/RoomTypeInt'
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

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get unitDesc() {
    return this._unitDesc
  }

  set unitDesc(unitDesc) {
    this._unitDesc = unitDesc
  }

  get numPeople() {
    return this._numPeople
  }

  set numPeople(numPeople) {
    this._numPeople = numPeople
  }

  get children() {
    return this._children
  }

  set children(children) {
    this._children = children
  }

  get adults() {
    return this._adults
  }

  set adults(adults) {
    this._adults = adults
  }

  get childperadult() {
    return this._childperadult
  }

  set childperadult(childperadult) {
    this._childperadult = childperadult
  }

  get section() {
    return this._section
  }

  set section(section) {
    this._section = section
  }

  get order() {
    return this._order
  }

  set order(order) {
    this._order = order
  }

  get check() {
    return this._check
  }

  set check(check) {
    this._check = check
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isObject(translations) ) {
      translations = mapValues(translations, (iteratee) => {
        if ( isPlainObject(iteratee) ) {
          return new RoomTypeInt(iteratee)
        }
        return iteratee
      })
    }
    this._translations = translations
  }

}
