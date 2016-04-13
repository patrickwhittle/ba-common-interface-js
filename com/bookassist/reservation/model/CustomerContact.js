import Restable from '../../../../Restable'
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

  get firstName() {
    return this._firstName
  }

  set firstName(firstName) {
    this._firstName = firstName
  }

  get lastName() {
    return this._lastName
  }

  set lastName(lastName) {
    this._lastName = lastName
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get companyName() {
    return this._companyName
  }

  set companyName(companyName) {
    this._companyName = companyName
  }

  get addressLine1() {
    return this._addressLine1
  }

  set addressLine1(addressLine1) {
    this._addressLine1 = addressLine1
  }

  get addressLine2() {
    return this._addressLine2
  }

  set addressLine2(addressLine2) {
    this._addressLine2 = addressLine2
  }

  get city() {
    return this._city
  }

  set city(city) {
    this._city = city
  }

  get state() {
    return this._state
  }

  set state(state) {
    this._state = state
  }

  get postalCode() {
    return this._postalCode
  }

  set postalCode(postalCode) {
    this._postalCode = postalCode
  }

  get countryCode() {
    return this._countryCode
  }

  set countryCode(countryCode) {
    this._countryCode = countryCode
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

  get contactMe() {
    return this._contactMe
  }

  set contactMe(contactMe) {
    this._contactMe = contactMe
  }

  get rememberMe() {
    return this._rememberMe
  }

  set rememberMe(rememberMe) {
    this._rememberMe = rememberMe
  }

  get txtMe() {
    return this._txtMe
  }

  set txtMe(txtMe) {
    this._txtMe = txtMe
  }

  get fax() {
    return this._fax
  }

  set fax(fax) {
    this._fax = fax
  }

  get customerId() {
    return this._customerId
  }

  set customerId(customerId) {
    this._customerId = customerId
  }

  get englishFirstName() {
    return this._englishFirstName
  }

  set englishFirstName(englishFirstName) {
    this._englishFirstName = englishFirstName
  }

  get englishLastName() {
    return this._englishLastName
  }

  set englishLastName(englishLastName) {
    this._englishLastName = englishLastName
  }

}
