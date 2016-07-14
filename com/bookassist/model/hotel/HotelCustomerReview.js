import Restable from '../../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelCustomerReview extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
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

  get customerReviewId() {
    return this._customerReviewId
  }

  set customerReviewId(customerReviewId) {
    this._customerReviewId = customerReviewId
  }

  get rating() {
    return this._rating
  }

  set rating(rating) {
    this._rating = rating
  }

  get date() {
    return this._date
  }

  set date(date) {
    this._date = date
  }

  get comment() {
    return this._comment
  }

  set comment(comment) {
    this._comment = comment
  }

  get hotelReply() {
    return this._hotelReply
  }

  set hotelReply(hotelReply) {
    this._hotelReply = hotelReply
  }

  get source() {
    return this._source
  }

  set source(source) {
    this._source = source
  }

  get reviewerLanguage() {
    return this._reviewerLanguage
  }

  set reviewerLanguage(reviewerLanguage) {
    this._reviewerLanguage = reviewerLanguage
  }

  get userLanguage() {
    return this._userLanguage
  }

  set userLanguage(userLanguage) {
    this._userLanguage = userLanguage
  }

}

export default HotelCustomerReview
