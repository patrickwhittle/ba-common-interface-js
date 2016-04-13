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

  get xBedsId() {
    return this._xBedsId
  }

  set xBedsId(xBedsId) {
    this._xBedsId = xBedsId
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}
