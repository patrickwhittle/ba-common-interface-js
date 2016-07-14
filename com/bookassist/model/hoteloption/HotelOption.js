import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelOption extends Restable {

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

  get nameKey() {
    return this._nameKey
  }

  set nameKey(nameKey) {
    this._nameKey = nameKey
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

}

export default HotelOption
