import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Country extends Restable {

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

  get latitude() {
    return this._latitude
  }

  set latitude(latitude) {
    this._latitude = latitude
  }

  get longitude() {
    return this._longitude
  }

  set longitude(longitude) {
    this._longitude = longitude
  }

  get ne() {
    return this._ne
  }

  set ne(ne) {
    this._ne = ne
  }

  get sw() {
    return this._sw
  }

  set sw(sw) {
    this._sw = sw
  }

  get isoCode() {
    return this._isoCode
  }

  set isoCode(isoCode) {
    this._isoCode = isoCode
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    this._translations = translations
  }

}

export default Country
