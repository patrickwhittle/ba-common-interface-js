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

  get shortDescription() {
    return this._shortDescription
  }

  set shortDescription(shortDescription) {
    this._shortDescription = shortDescription
  }

  get rtdesc() {
    return this._rtdesc
  }

  set rtdesc(rtdesc) {
    this._rtdesc = rtdesc
  }

  get longDescription() {
    return this._longDescription
  }

  set longDescription(longDescription) {
    this._longDescription = longDescription
  }

  get xBedNonZeroCount() {
    return this._xBedNonZeroCount
  }

  set xBedNonZeroCount(xBedNonZeroCount) {
    this._xBedNonZeroCount = xBedNonZeroCount
  }

  get children() {
    return this._children
  }

  set children(children) {
    this._children = children
  }

  get adults() {
    return this._adults
  }

  set adults(adults) {
    this._adults = adults
  }

  get ptype() {
    return this._ptype
  }

  set ptype(ptype) {
    this._ptype = ptype
  }

  get ordinal() {
    return this._ordinal
  }

  set ordinal(ordinal) {
    this._ordinal = ordinal
  }

}
// missing get and/or set for shortdescription
