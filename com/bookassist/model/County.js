import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class County extends Restable {

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

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get orderInd() {
    return this._orderInd
  }

  set orderInd(orderInd) {
    this._orderInd = orderInd
  }

  get countryCode() {
    return this._countryCode
  }

  set countryCode(countryCode) {
    this._countryCode = countryCode
  }

  get zoom() {
    return this._zoom
  }

  set zoom(zoom) {
    this._zoom = zoom
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

  get translations() {
    return this._translations
  }

  set translations(translations) {
    this._translations = translations
  }

}

export default County
