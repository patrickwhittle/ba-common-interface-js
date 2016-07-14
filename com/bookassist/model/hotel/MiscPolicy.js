import Restable from '../../../../Restable'
import MiscPolicyInt from '../../../../com/bookassist/model/hotel/MiscPolicyInt'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class MiscPolicy extends Restable {

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

  get label() {
    return this._label
  }

  set label(label) {
    this._label = label
  }

  get roomLevel() {
    return this._roomLevel
  }

  set roomLevel(roomLevel) {
    this._roomLevel = roomLevel
  }

  get policy() {
    return this._policy
  }

  set policy(policy) {
    this._policy = policy
  }

  get policiesInt() {
    return this._policiesInt
  }

  set policiesInt(policiesInt) {
    if ( isArray(policiesInt) ) {
      policiesInt = policiesInt.map((item) => {
        if ( isPlainObject(item) ) {
          return new MiscPolicyInt(item)
        }
        return item
      })
    }
    this._policiesInt = policiesInt
  }

}

export default MiscPolicy
