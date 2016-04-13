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

  get roomGroupId() {
    return this._roomGroupId
  }

  set roomGroupId(roomGroupId) {
    this._roomGroupId = roomGroupId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get longDescription() {
    return this._longDescription
  }

  set longDescription(longDescription) {
    this._longDescription = longDescription
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
