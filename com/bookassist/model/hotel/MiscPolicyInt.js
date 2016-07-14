import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class MiscPolicyInt extends Restable {

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

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

  get policy() {
    return this._policy
  }

  set policy(policy) {
    this._policy = policy
  }

}

export default MiscPolicyInt
