import Restable from '../../../../Restable'
import PropertyType from '../../../../com/bookassist/model/roomprice/PropertyType'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Property extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get type() {
    return this._type
  }

  set type(type) {
    if ( isPlainObject(type) ) {
      this._type = new PropertyType(type)
    }
    else {
      this._type = type
    }
  }

  get values() {
    return this._values
  }

  set values(values) {
    this._values = values
  }

}

export default Property
