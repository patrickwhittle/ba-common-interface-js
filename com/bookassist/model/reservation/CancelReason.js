import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class CancelReason extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get reasonId() {
    return this._reasonId
  }

  set reasonId(reasonId) {
    this._reasonId = reasonId
  }

  get reason() {
    return this._reason
  }

  set reason(reason) {
    this._reason = reason
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}

export default CancelReason
