import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Channel extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get channelId() {
    return this._channelId
  }

  set channelId(channelId) {
    this._channelId = channelId
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get directory() {
    return this._directory
  }

  set directory(directory) {
    this._directory = directory
  }

  get www() {
    return this._www
  }

  set www(www) {
    this._www = www
  }

  get advertize() {
    return this._advertize
  }

  set advertize(advertize) {
    this._advertize = advertize
  }

  get countryCode() {
    return this._countryCode
  }

  set countryCode(countryCode) {
    this._countryCode = countryCode
  }

}

export default Channel
