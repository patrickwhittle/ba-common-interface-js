import Restable from '../../../../Restable'
import DefaultAvailability from '../../../../com/bookassist/model/dynamicdiscount/DefaultAvailability'
import DiscountDescription from '../../../../com/bookassist/model/dynamicdiscount/DiscountDescription'
import DiscountDuplicate from '../../../../com/bookassist/model/dynamicdiscount/DiscountDuplicate'
import DiscountType from '../../../../com/bookassist/model/dynamicdiscount/DiscountType'
import LastEarly from '../../../../com/bookassist/model/dynamicdiscount/LastEarly'
import TimeUnit from '../../../../com/bookassist/model/dynamicdiscount/TimeUnit'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class DynamicDiscount extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

  get guideId() {
    return this._guideId
  }

  set guideId(guideId) {
    this._guideId = guideId
  }

  get discountId() {
    return this._discountId
  }

  set discountId(discountId) {
    this._discountId = discountId
  }

  get parentId() {
    return this._parentId
  }

  set parentId(parentId) {
    this._parentId = parentId
  }

  get roomPriceId() {
    return this._roomPriceId
  }

  set roomPriceId(roomPriceId) {
    this._roomPriceId = roomPriceId
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get discountDescription() {
    return this._discountDescription
  }

  set discountDescription(discountDescription) {
    this._discountDescription = discountDescription
  }

  get discountDescriptions() {
    return this._discountDescriptions
  }

  set discountDescriptions(discountDescriptions) {
    if ( isArray(discountDescriptions) ) {
      discountDescriptions = discountDescriptions.map((item) => {
        if ( isPlainObject(item) ) {
          return new DiscountDescription(item)
        }
        return item
      })
    }
    this._discountDescriptions = discountDescriptions
  }

  get minStay() {
    return this._minStay
  }

  set minStay(minStay) {
    this._minStay = minStay
  }

  get discountType() {
    return this._discountType
  }

  set discountType(discountType) {
    if ( isPlainObject(discountType) ) {
      this._discountType = new DiscountType(discountType)
    }
    else {
      this._discountType = discountType
    }
  }

  get discountAmount() {
    return this._discountAmount
  }

  set discountAmount(discountAmount) {
    this._discountAmount = discountAmount
  }

  get discountNights() {
    return this._discountNights
  }

  set discountNights(discountNights) {
    this._discountNights = discountNights
  }

  get recurring() {
    return this._recurring
  }

  set recurring(recurring) {
    this._recurring = recurring
  }

  get lastEarly() {
    return this._lastEarly
  }

  set lastEarly(lastEarly) {
    if ( isPlainObject(lastEarly) ) {
      this._lastEarly = new LastEarly(lastEarly)
    }
    else {
      this._lastEarly = lastEarly
    }
  }

  get timespan() {
    return this._timespan
  }

  set timespan(timespan) {
    this._timespan = timespan
  }

  get timeUnit() {
    return this._timeUnit
  }

  set timeUnit(timeUnit) {
    if ( isPlainObject(timeUnit) ) {
      this._timeUnit = new TimeUnit(timeUnit)
    }
    else {
      this._timeUnit = timeUnit
    }
  }

  get defaultAvailability() {
    return this._defaultAvailability
  }

  set defaultAvailability(defaultAvailability) {
    if ( isPlainObject(defaultAvailability) ) {
      this._defaultAvailability = new DefaultAvailability(defaultAvailability)
    }
    else {
      this._defaultAvailability = defaultAvailability
    }
  }

  get numSetDates() {
    return this._numSetDates
  }

  set numSetDates(numSetDates) {
    this._numSetDates = numSetDates
  }

  get duplicates() {
    return this._duplicates
  }

  set duplicates(duplicates) {
    if ( isArray(duplicates) ) {
      duplicates = duplicates.map((item) => {
        if ( isPlainObject(item) ) {
          return new DiscountDuplicate(item)
        }
        return item
      })
    }
    this._duplicates = duplicates
  }

}

export default DynamicDiscount
