import Restable from '../../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class AddressCommon extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get addressLine1() {
    return this._addressLine1
  }

  set addressLine1(addressLine1) {
    this._addressLine1 = addressLine1
  }

  get addressLine2() {
    return this._addressLine2
  }

  set addressLine2(addressLine2) {
    this._addressLine2 = addressLine2
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get city() {
    return this._city
  }

  set city(city) {
    this._city = city
  }

  get countryCode() {
    return this._countryCode
  }

  set countryCode(countryCode) {
    this._countryCode = countryCode
  }

  get postalCode() {
    return this._postalCode
  }

  set postalCode(postalCode) {
    this._postalCode = postalCode
  }

  get state() {
    return this._state
  }

  set state(state) {
    this._state = state
  }

}

export default AddressCommon
