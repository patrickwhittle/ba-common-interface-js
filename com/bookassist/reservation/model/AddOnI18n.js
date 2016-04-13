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

  get comm() {
    return this._comm
  }

  set comm(comm) {
    this._comm = comm
  }

  get id() {
    return this._id
  }

  set id(id) {
    this._id = id
  }

  get price() {
    return this._price
  }

  set price(price) {
    this._price = price
  }

  get priceDescription() {
    return this._priceDescription
  }

  set priceDescription(priceDescription) {
    this._priceDescription = priceDescription
  }

  get quantity() {
    return this._quantity
  }

  set quantity(quantity) {
    this._quantity = quantity
  }

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }

  get totalPrice() {
    return this._totalPrice
  }

  set totalPrice(totalPrice) {
    this._totalPrice = totalPrice
  }

  get vatOnCommission() {
    return this._vatOnCommission
  }

  set vatOnCommission(vatOnCommission) {
    this._vatOnCommission = vatOnCommission
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get language() {
    return this._language
  }

  set language(language) {
    this._language = language
  }

}
