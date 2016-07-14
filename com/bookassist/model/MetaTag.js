import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class MetaTag extends Restable {

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

  get title() {
    return this._title
  }

  set title(title) {
    this._title = title
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get keywords() {
    return this._keywords
  }

  set keywords(keywords) {
    this._keywords = keywords
  }

}

export default MetaTag
