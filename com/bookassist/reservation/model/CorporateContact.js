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

  get companyName() {
    return this._companyName
  }

  set companyName(companyName) {
    this._companyName = companyName
  }

  get companyCategory() {
    return this._companyCategory
  }

  set companyCategory(companyCategory) {
    this._companyCategory = companyCategory
  }

  get companyEmail() {
    return this._companyEmail
  }

  set companyEmail(companyEmail) {
    this._companyEmail = companyEmail
  }

  get countryCode() {
    return this._countryCode
  }

  set countryCode(countryCode) {
    this._countryCode = countryCode
  }

  get customerId() {
    return this._customerId
  }

  set customerId(customerId) {
    this._customerId = customerId
  }

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
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

  get emailCorporate() {
    return this._emailCorporate
  }

  set emailCorporate(emailCorporate) {
    this._emailCorporate = emailCorporate
  }

  get txtMe() {
    return this._txtMe
  }

  set txtMe(txtMe) {
    this._txtMe = txtMe
  }

  get customerType() {
    return this._customerType
  }

  set customerType(customerType) {
    this._customerType = customerType
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

  get agentBookerEmail() {
    return this._agentBookerEmail
  }

  set agentBookerEmail(agentBookerEmail) {
    this._agentBookerEmail = agentBookerEmail
  }

  get agentBookerName() {
    return this._agentBookerName
  }

  set agentBookerName(agentBookerName) {
    this._agentBookerName = agentBookerName
  }

  get agentBookerPhone() {
    return this._agentBookerPhone
  }

  set agentBookerPhone(agentBookerPhone) {
    this._agentBookerPhone = agentBookerPhone
  }

  get agentAlertEmail() {
    return this._agentAlertEmail
  }

  set agentAlertEmail(agentAlertEmail) {
    this._agentAlertEmail = agentAlertEmail
  }

  get agentAlertSms() {
    return this._agentAlertSms
  }

  set agentAlertSms(agentAlertSms) {
    this._agentAlertSms = agentAlertSms
  }

}
