import Restable from '../../../../Restable'
import AddOnI18n from '../../../../com/bookassist/reservation/model/AddOnI18n'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class AddOn extends Restable {

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

  get commission() {
    return this._commission
  }

  set commission(commission) {
    this._commission = commission
  }

  get deposit() {
    return this._deposit
  }

  set deposit(deposit) {
    this._deposit = deposit
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

  get descriptions() {
    return this._descriptions
  }

  set descriptions(descriptions) {
    if ( isObject(descriptions) ) {
      descriptions = mapValues(descriptions, (value) => {
        if ( isPlainObject(value) ) {
          return new AddOnI18n(value)
        }
        return value
      })
    }
    this._descriptions = descriptions
  }

}

export default AddOn
