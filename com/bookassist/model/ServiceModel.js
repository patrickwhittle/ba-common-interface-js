import Restable from '../../../Restable'
import isPlainObject from 'lodash/isPlainObject'
import mapValues from 'lodash/mapValues'
import isObject from 'lodash/isObject'
import isArray from 'lodash/isArray'

class ServiceModel extends Restable {

  constructor(obj) {
    super()
    const defaults = {
    }
    // do we want to validate obj somehow?
    Object.assign(this, defaults, obj)
  }

  get url() {
  }

}

ServiceModel.BOOKASSIST_MODEL = 5
ServiceModel.CONFERENCE_MODEL = 4
ServiceModel.CORPORATE_MODEL = 7
ServiceModel.ENTRY_SITE_MODEL = 10
ServiceModel.FORWARD_TO_CONDUIT_MODEL = 8
ServiceModel.HOTEL_CONDUIT_MODEL = 2
ServiceModel.HOTEL_GROUP_MODEL = 6
ServiceModel.MAN_SEARCH_MODEL = 3
ServiceModel.MAX_SERVICE_MODEL = 10
ServiceModel.MOBILE_MODEL = 5
ServiceModel.SOFTGUIDES_MODEL = 1
ServiceModel.TA_INSTANT_BOOKING_MODEL = 11
ServiceModel.VOUCHER = 9

export default ServiceModel
