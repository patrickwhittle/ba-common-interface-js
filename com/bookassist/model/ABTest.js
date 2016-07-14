import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class ABTest extends Restable {

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

  get serviceModel() {
    return this._serviceModel
  }

  set serviceModel(serviceModel) {
    this._serviceModel = serviceModel
  }

  get useCB() {
    return this._useCB
  }

  set useCB(useCB) {
    this._useCB = useCB
  }

  get enabled() {
    return this._enabled
  }

  set enabled(enabled) {
    this._enabled = enabled
  }

  get code() {
    return this._code
  }

  set code(code) {
    this._code = code
  }

}

export default ABTest
