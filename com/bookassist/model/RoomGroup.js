import Restable from '../../../Restable'
import RoomGroupInt from '../../../com/bookassist/model/translation/RoomGroupInt'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class RoomGroup extends Restable {

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

  get hotelId() {
    return this._hotelId
  }

  set hotelId(hotelId) {
    this._hotelId = hotelId
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get listingPriority() {
    return this._listingPriority
  }

  set listingPriority(listingPriority) {
    this._listingPriority = listingPriority
  }

  get description() {
    return this._description
  }

  set description(description) {
    this._description = description
  }

  get longDescription() {
    return this._longDescription
  }

  set longDescription(longDescription) {
    this._longDescription = longDescription
  }

  get summarizable() {
    return this._summarizable
  }

  set summarizable(summarizable) {
    this._summarizable = summarizable
  }

  get defaultNumFree() {
    return this._defaultNumFree
  }

  set defaultNumFree(defaultNumFree) {
    this._defaultNumFree = defaultNumFree
  }

  get status() {
    return this._status
  }

  set status(status) {
    this._status = status
  }

  get translations() {
    return this._translations
  }

  set translations(translations) {
    if ( isObject(translations) ) {
      translations = mapValues(translations, (value) => {
        if ( isPlainObject(value) ) {
          return new RoomGroupInt(value)
        }
        return value
      })
    }
    this._translations = translations
  }

}

export default RoomGroup
