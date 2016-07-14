import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class BillingContact extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
  }

  get phone() {
    return this._phone
  }

  set phone(phone) {
    this._phone = phone
  }

  get mobile() {
    return this._mobile
  }

  set mobile(mobile) {
    this._mobile = mobile
  }

  get companyName() {
    return this._companyName
  }

  set companyName(companyName) {
    this._companyName = companyName
  }

}

export default BillingContact
