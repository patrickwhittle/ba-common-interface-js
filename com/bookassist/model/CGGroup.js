import Restable from '../../../Restable'
import CGGroup$CGGroupHotel from '../../../com/bookassist/model/CGGroup$CGGroupHotel'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class CGGroup extends Restable {

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

  get groupType() {
    return this._groupType
  }

  set groupType(groupType) {
    this._groupType = groupType
  }

  get hotelGroupId() {
    return this._hotelGroupId
  }

  set hotelGroupId(hotelGroupId) {
    this._hotelGroupId = hotelGroupId
  }

  get tablePref() {
    return this._tablePref
  }

  set tablePref(tablePref) {
    this._tablePref = tablePref
  }

  get customCss() {
    return this._customCss
  }

  set customCss(customCss) {
    this._customCss = customCss
  }

  get hotels() {
    return this._hotels
  }

  set hotels(hotels) {
    if ( isArray(hotels) ) {
      hotels = hotels.map((item) => {
        if ( isPlainObject(item) ) {
          return new CGGroup$CGGroupHotel(item)
        }
        return item
      })
    }
    this._hotels = hotels
  }

}

export default CGGroup
