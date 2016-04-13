import Restable from '../../../../Restable'
import Language from '../../../../com/bookassist/model/dynamicdiscount/Language'
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

  get language() {
    return this._language
  }

  set language(language) {
    if ( isPlainObject(language) ) {
      this._language = new Language(language)
    }
    else {
      this._language = language
    }
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

}
