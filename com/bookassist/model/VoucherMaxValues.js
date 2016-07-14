import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class VoucherMaxValues extends Restable {

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

  get maxPackageVoucherValue() {
    return this._maxPackageVoucherValue
  }

  set maxPackageVoucherValue(maxPackageVoucherValue) {
    this._maxPackageVoucherValue = maxPackageVoucherValue
  }

  get maxEVoucherValues() {
    return this._maxEVoucherValues
  }

  set maxEVoucherValues(maxEVoucherValues) {
    this._maxEVoucherValues = maxEVoucherValues
  }

  get maxUsedPackageVoucherValue() {
    return this._maxUsedPackageVoucherValue
  }

  set maxUsedPackageVoucherValue(maxUsedPackageVoucherValue) {
    this._maxUsedPackageVoucherValue = maxUsedPackageVoucherValue
  }

}

VoucherMaxValues.DEFAULT_MAX_EVOUCHER_VALUE = "300"
VoucherMaxValues.DEFAULT_MAX_PACKAGE_VOUCHER_VALUE = 500

export default VoucherMaxValues
