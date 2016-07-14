import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelContactOption extends Restable {

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

  get componentName() {
    return this._componentName
  }

  set componentName(componentName) {
    this._componentName = componentName
  }

  get context() {
    return this._context
  }

  set context(context) {
    this._context = context
  }

  get view() {
    return this._view
  }

  set view(view) {
    this._view = view
  }

  get mandatory() {
    return this._mandatory
  }

  set mandatory(mandatory) {
    this._mandatory = mandatory
  }

  get delete() {
    return this._delete
  }

  set delete(delete) {
    this._delete = delete
  }

}

export default HotelContactOption
