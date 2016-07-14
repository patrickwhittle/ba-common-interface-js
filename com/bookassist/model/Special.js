import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class Special extends Restable {

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

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get message() {
    return this._message
  }

  set message(message) {
    this._message = message
  }

  get hasParameters() {
    return this._hasParameters
  }

  set hasParameters(hasParameters) {
    this._hasParameters = hasParameters
  }

  get parameter() {
    return this._parameter
  }

  set parameter(parameter) {
    this._parameter = parameter
  }

  get priority() {
    return this._priority
  }

  set priority(priority) {
    this._priority = priority
  }

  get order() {
    return this._order
  }

  set order(order) {
    this._order = order
  }

}

export default Special
