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

  get hotelGroupId() {
    return this._hotelGroupId
  }

  set hotelGroupId(hotelGroupId) {
    this._hotelGroupId = hotelGroupId
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get email() {
    return this._email
  }

  set email(email) {
    this._email = email
  }

  get url() {
    return this._url
  }

  set url(url) {
    this._url = url
  }

  get type() {
    return this._type
  }

  set type(type) {
    this._type = type
  }

  get prefixHotelGroupId() {
    return this._prefixHotelGroupId
  }

  set prefixHotelGroupId(prefixHotelGroupId) {
    this._prefixHotelGroupId = prefixHotelGroupId
  }

  get prefix() {
    return this._prefix
  }

  set prefix(prefix) {
    this._prefix = prefix
  }

  get customCss() {
    return this._customCss
  }

  set customCss(customCss) {
    this._customCss = customCss
  }

  get otaAcess() {
    return this._otaAcess
  }

  set otaAcess(otaAcess) {
    this._otaAcess = otaAcess
  }

  get facebook() {
    return this._facebook
  }

  set facebook(facebook) {
    this._facebook = facebook
  }

  get checkboxEmail() {
    return this._checkboxEmail
  }

  set checkboxEmail(checkboxEmail) {
    this._checkboxEmail = checkboxEmail
  }

  get mobileWebapp() {
    return this._mobileWebapp
  }

  set mobileWebapp(mobileWebapp) {
    this._mobileWebapp = mobileWebapp
  }

  get mobileFromPrice() {
    return this._mobileFromPrice
  }

  set mobileFromPrice(mobileFromPrice) {
    this._mobileFromPrice = mobileFromPrice
  }

  get c4Redirection() {
    return this._c4Redirection
  }

  set c4Redirection(c4Redirection) {
    this._c4Redirection = c4Redirection
  }

  get htmlBody() {
    return this._htmlBody
  }

  set htmlBody(htmlBody) {
    this._htmlBody = htmlBody
  }

}
