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

  get cpPics() {
    return this._cpPics
  }

  set cpPics(cpPics) {
    this._cpPics = cpPics
  }

  get cpSpec() {
    return this._cpSpec
  }

  set cpSpec(cpSpec) {
    this._cpSpec = cpSpec
  }

  get cpXBeds() {
    return this._cpXBeds
  }

  set cpXBeds(cpXBeds) {
    this._cpXBeds = cpXBeds
  }

  get cpMealPl() {
    return this._cpMealPl
  }

  set cpMealPl(cpMealPl) {
    this._cpMealPl = cpMealPl
  }

  get cpDynDisc() {
    return this._cpDynDisc
  }

  set cpDynDisc(cpDynDisc) {
    this._cpDynDisc = cpDynDisc
  }

  get cpStopSale() {
    return this._cpStopSale
  }

  set cpStopSale(cpStopSale) {
    this._cpStopSale = cpStopSale
  }

  get linkPriceType() {
    return this._linkPriceType
  }

  set linkPriceType(linkPriceType) {
    this._linkPriceType = linkPriceType
  }

  get linkPriceValue() {
    return this._linkPriceValue
  }

  set linkPriceValue(linkPriceValue) {
    this._linkPriceValue = linkPriceValue
  }

  get prevId() {
    return this._prevId
  }

  set prevId(prevId) {
    this._prevId = prevId
  }

  get preInsertId() {
    return this._preInsertId
  }

  set preInsertId(preInsertId) {
    this._preInsertId = preInsertId
  }

}
