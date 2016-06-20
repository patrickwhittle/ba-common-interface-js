import Restable from '../../../../Restable'
import AddOnI18n from '../../../../com/bookassist/reservation/model/AddOnI18n'
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
