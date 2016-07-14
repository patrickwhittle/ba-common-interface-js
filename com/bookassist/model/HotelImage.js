import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class HotelImage extends Restable {

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

  get hotelId() {
    return this._hotelId
  }

  set hotelId(hotelId) {
    this._hotelId = hotelId
  }

  get file() {
    return this._file
  }

  set file(file) {
    this._file = file
  }

  get width() {
    return this._width
  }

  set width(width) {
    this._width = width
  }

  get height() {
    return this._height
  }

  set height(height) {
    this._height = height
  }

  get sizeInd() {
    return this._sizeInd
  }

  set sizeInd(sizeInd) {
    this._sizeInd = sizeInd
  }

  get comment() {
    return this._comment
  }

  set comment(comment) {
    this._comment = comment
  }

  get orderInd() {
    return this._orderInd
  }

  set orderInd(orderInd) {
    this._orderInd = orderInd
  }

  get status() {
    return this._status
  }

  set status(status) {
    this._status = status
  }

  get id() {
    return this._id
  }

  set id(id) {
    this._id = id
  }

  get commentsInt() {
    return this._commentsInt
  }

  set commentsInt(commentsInt) {
    this._commentsInt = commentsInt
  }

  get imageInd() {
    return this._imageInd
  }

  set imageInd(imageInd) {
    this._imageInd = imageInd
  }

  get pkgOrderInd() {
    return this._pkgOrderInd
  }

  set pkgOrderInd(pkgOrderInd) {
    this._pkgOrderInd = pkgOrderInd
  }

  get galleryImage() {
    return this._galleryImage
  }

  set galleryImage(galleryImage) {
    this._galleryImage = galleryImage
  }

  get uploadFile() {
    return this._uploadFile
  }

  set uploadFile(uploadFile) {
    this._uploadFile = uploadFile
  }

}

export default HotelImage
