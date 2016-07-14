import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class CityZone extends Restable {

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

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get shortDescription() {
    return this._shortDescription
  }

  set shortDescription(shortDescription) {
    this._shortDescription = shortDescription
  }

  get countyId() {
    return this._countyId
  }

  set countyId(countyId) {
    this._countyId = countyId
  }

  get orderInd() {
    return this._orderInd
  }

  set orderInd(orderInd) {
    this._orderInd = orderInd
  }

  get zoneFile() {
    return this._zoneFile
  }

  set zoneFile(zoneFile) {
    this._zoneFile = zoneFile
  }

  get zonaFile() {
    return this._zonaFile
  }

  set zonaFile(zonaFile) {
    this._zonaFile = zonaFile
  }

}

export default CityZone
