import Restable from '../../../Restable'
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

  get countryId() {
    return this._countryId
  }

  set countryId(countryId) {
    this._countryId = countryId
  }

  get country() {
    return this._country
  }

  set country(country) {
    this._country = country
  }

  get vat() {
    return this._vat
  }

  set vat(vat) {
    this._vat = vat
  }

  get companyVat() {
    return this._companyVat
  }

  set companyVat(companyVat) {
    this._companyVat = companyVat
  }

}
