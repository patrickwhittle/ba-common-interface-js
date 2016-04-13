import Restable from '../../../Restable'
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

  get hideBaLogo() {
    return this._hideBaLogo
  }

  set hideBaLogo(hideBaLogo) {
    this._hideBaLogo = hideBaLogo
  }

  get smokingOption() {
    return this._smokingOption
  }

  set smokingOption(smokingOption) {
    this._smokingOption = smokingOption
  }

  get showMap() {
    return this._showMap
  }

  set showMap(showMap) {
    this._showMap = showMap
  }

  get showReviews() {
    return this._showReviews
  }

  set showReviews(showReviews) {
    this._showReviews = showReviews
  }

  get showVoucher() {
    return this._showVoucher
  }

  set showVoucher(showVoucher) {
    this._showVoucher = showVoucher
  }

  get showDescription() {
    return this._showDescription
  }

  set showDescription(showDescription) {
    this._showDescription = showDescription
  }

  get hasCustomCss() {
    return this._hasCustomCss
  }

  set hasCustomCss(hasCustomCss) {
    this._hasCustomCss = hasCustomCss
  }

  get corporateType() {
    return this._corporateType
  }

  set corporateType(corporateType) {
    this._corporateType = corporateType
  }

  get reviewsManagedByHotel() {
    return this._reviewsManagedByHotel
  }

  set reviewsManagedByHotel(reviewsManagedByHotel) {
    this._reviewsManagedByHotel = reviewsManagedByHotel
  }

  get maxRoomsPerBooking() {
    return this._maxRoomsPerBooking
  }

  set maxRoomsPerBooking(maxRoomsPerBooking) {
    this._maxRoomsPerBooking = maxRoomsPerBooking
  }

  get emailFromHotel() {
    return this._emailFromHotel
  }

  set emailFromHotel(emailFromHotel) {
    this._emailFromHotel = emailFromHotel
  }

  get contactMe() {
    return this._contactMe
  }

  set contactMe(contactMe) {
    this._contactMe = contactMe
  }

  get showRatings() {
    return this._showRatings
  }

  set showRatings(showRatings) {
    this._showRatings = showRatings
  }

  get showAvgRating() {
    return this._showAvgRating
  }

  set showAvgRating(showAvgRating) {
    this._showAvgRating = showAvgRating
  }

  get minStayByArrival() {
    return this._minStayByArrival
  }

  set minStayByArrival(minStayByArrival) {
    this._minStayByArrival = minStayByArrival
  }

  get otaAccess() {
    return this._otaAccess
  }

  set otaAccess(otaAccess) {
    this._otaAccess = otaAccess
  }

  get ccCaptcha() {
    return this._ccCaptcha
  }

  set ccCaptcha(ccCaptcha) {
    this._ccCaptcha = ccCaptcha
  }

  get ccDaily() {
    return this._ccDaily
  }

  set ccDaily(ccDaily) {
    this._ccDaily = ccDaily
  }

  get availPackOnly() {
    return this._availPackOnly
  }

  set availPackOnly(availPackOnly) {
    this._availPackOnly = availPackOnly
  }

  get useDynamicDiscount() {
    return this._useDynamicDiscount
  }

  set useDynamicDiscount(useDynamicDiscount) {
    this._useDynamicDiscount = useDynamicDiscount
  }

  get useFacebook() {
    return this._useFacebook
  }

  set useFacebook(useFacebook) {
    this._useFacebook = useFacebook
  }

  get useTriptease() {
    return this._useTriptease
  }

  set useTriptease(useTriptease) {
    this._useTriptease = useTriptease
  }

  get tripteaseToken() {
    return this._tripteaseToken
  }

  set tripteaseToken(tripteaseToken) {
    this._tripteaseToken = tripteaseToken
  }

  get tripteaseClientkey() {
    return this._tripteaseClientkey
  }

  set tripteaseClientkey(tripteaseClientkey) {
    this._tripteaseClientkey = tripteaseClientkey
  }

  get packDispOrder() {
    return this._packDispOrder
  }

  set packDispOrder(packDispOrder) {
    this._packDispOrder = packDispOrder
  }

  get usePackageAdmin() {
    return this._usePackageAdmin
  }

  set usePackageAdmin(usePackageAdmin) {
    this._usePackageAdmin = usePackageAdmin
  }

  get canAmendBooking() {
    return this._canAmendBooking
  }

  set canAmendBooking(canAmendBooking) {
    this._canAmendBooking = canAmendBooking
  }

  get hideDiscount() {
    return this._hideDiscount
  }

  set hideDiscount(hideDiscount) {
    this._hideDiscount = hideDiscount
  }

  get deactivateReviewEmails() {
    return this._deactivateReviewEmails
  }

  set deactivateReviewEmails(deactivateReviewEmails) {
    this._deactivateReviewEmails = deactivateReviewEmails
  }

  get useCustomCss2() {
    return this._useCustomCss2
  }

  set useCustomCss2(useCustomCss2) {
    this._useCustomCss2 = useCustomCss2
  }

  get cssDefault() {
    return this._cssDefault
  }

  set cssDefault(cssDefault) {
    this._cssDefault = cssDefault
  }

  get mobileWebappEnabled() {
    return this._mobileWebappEnabled
  }

  set mobileWebappEnabled(mobileWebappEnabled) {
    this._mobileWebappEnabled = mobileWebappEnabled
  }

  get mobileFromPriceEnabled() {
    return this._mobileFromPriceEnabled
  }

  set mobileFromPriceEnabled(mobileFromPriceEnabled) {
    this._mobileFromPriceEnabled = mobileFromPriceEnabled
  }

  get getBookingFromDMS() {
    return this._getBookingFromDMS
  }

  set getBookingFromDMS(getBookingFromDMS) {
    this._getBookingFromDMS = getBookingFromDMS
  }

  get useSourceBookings() {
    return this._useSourceBookings
  }

  set useSourceBookings(useSourceBookings) {
    this._useSourceBookings = useSourceBookings
  }

  get mpComm() {
    return this._mpComm
  }

  set mpComm(mpComm) {
    this._mpComm = mpComm
  }

  get maxChildAge() {
    return this._maxChildAge
  }

  set maxChildAge(maxChildAge) {
    this._maxChildAge = maxChildAge
  }

  get useMealplans() {
    return this._useMealplans
  }

  set useMealplans(useMealplans) {
    this._useMealplans = useMealplans
  }

  get useMealplansOTA() {
    return this._useMealplansOTA
  }

  set useMealplansOTA(useMealplansOTA) {
    this._useMealplansOTA = useMealplansOTA
  }

  get useListGuestsOTA() {
    return this._useListGuestsOTA
  }

  set useListGuestsOTA(useListGuestsOTA) {
    this._useListGuestsOTA = useListGuestsOTA
  }

  get c4Redirection() {
    return this._c4Redirection
  }

  set c4Redirection(c4Redirection) {
    this._c4Redirection = c4Redirection
  }

  get xmlActivationDate() {
    return this._xmlActivationDate
  }

  set xmlActivationDate(xmlActivationDate) {
    this._xmlActivationDate = xmlActivationDate
  }

  get modificationDate() {
    return this._modificationDate
  }

  set modificationDate(modificationDate) {
    this._modificationDate = modificationDate
  }

  get useNewFromPrice() {
    return this._useNewFromPrice
  }

  set useNewFromPrice(useNewFromPrice) {
    this._useNewFromPrice = useNewFromPrice
  }

  get tripadvisorReviews() {
    return this._tripadvisorReviews
  }

  set tripadvisorReviews(tripadvisorReviews) {
    this._tripadvisorReviews = tripadvisorReviews
  }

  get useS3Images() {
    return this._useS3Images
  }

  set useS3Images(useS3Images) {
    this._useS3Images = useS3Images
  }

  get reviewEmailDays() {
    return this._reviewEmailDays
  }

  set reviewEmailDays(reviewEmailDays) {
    this._reviewEmailDays = reviewEmailDays
  }

  get closedArrival() {
    return this._closedArrival
  }

  set closedArrival(closedArrival) {
    this._closedArrival = closedArrival
  }

  get photoGallery() {
    return this._photoGallery
  }

  set photoGallery(photoGallery) {
    this._photoGallery = photoGallery
  }

  get displayGallery() {
    return this._displayGallery
  }

  set displayGallery(displayGallery) {
    this._displayGallery = displayGallery
  }

  get galleryAutoplay() {
    return this._galleryAutoplay
  }

  set galleryAutoplay(galleryAutoplay) {
    this._galleryAutoplay = galleryAutoplay
  }

  get autoplayInterval() {
    return this._autoplayInterval
  }

  set autoplayInterval(autoplayInterval) {
    this._autoplayInterval = autoplayInterval
  }

  get galleryCaptions() {
    return this._galleryCaptions
  }

  set galleryCaptions(galleryCaptions) {
    this._galleryCaptions = galleryCaptions
  }

  get voucherMail2Purch() {
    return this._voucherMail2Purch
  }

  set voucherMail2Purch(voucherMail2Purch) {
    this._voucherMail2Purch = voucherMail2Purch
  }

  get voucherMail2Recip() {
    return this._voucherMail2Recip
  }

  set voucherMail2Recip(voucherMail2Recip) {
    this._voucherMail2Recip = voucherMail2Recip
  }

  get voucherPost2Purch() {
    return this._voucherPost2Purch
  }

  set voucherPost2Purch(voucherPost2Purch) {
    this._voucherPost2Purch = voucherPost2Purch
  }

  get voucherPost2Recip() {
    return this._voucherPost2Recip
  }

  set voucherPost2Recip(voucherPost2Recip) {
    this._voucherPost2Recip = voucherPost2Recip
  }

  get hideVars() {
    return this._hideVars
  }

  set hideVars(hideVars) {
    this._hideVars = hideVars
  }

  get limitAttempsOta() {
    return this._limitAttempsOta
  }

  set limitAttempsOta(limitAttempsOta) {
    this._limitAttempsOta = limitAttempsOta
  }

  get spHideFp() {
    return this._spHideFp
  }

  set spHideFp(spHideFp) {
    this._spHideFp = spHideFp
  }

  get metaMgmt() {
    return this._metaMgmt
  }

  set metaMgmt(metaMgmt) {
    this._metaMgmt = metaMgmt
  }

  get showSpLong() {
    return this._showSpLong
  }

  set showSpLong(showSpLong) {
    this._showSpLong = showSpLong
  }

  get showSpShort() {
    return this._showSpShort
  }

  set showSpShort(showSpShort) {
    this._showSpShort = showSpShort
  }

  get showSpecials() {
    return this._showSpecials
  }

  set showSpecials(showSpecials) {
    this._showSpecials = showSpecials
  }

  get sortPackByPrice() {
    return this._sortPackByPrice
  }

  set sortPackByPrice(sortPackByPrice) {
    this._sortPackByPrice = sortPackByPrice
  }

  get sumDepositAddons() {
    return this._sumDepositAddons
  }

  set sumDepositAddons(sumDepositAddons) {
    this._sumDepositAddons = sumDepositAddons
  }

  get suppressBookerEmail() {
    return this._suppressBookerEmail
  }

  set suppressBookerEmail(suppressBookerEmail) {
    this._suppressBookerEmail = suppressBookerEmail
  }

  get useExternalCard() {
    return this._useExternalCard
  }

  set useExternalCard(useExternalCard) {
    this._useExternalCard = useExternalCard
  }

  get useTablet() {
    return this._useTablet
  }

  set useTablet(useTablet) {
    this._useTablet = useTablet
  }

  get vgRoomPhoto() {
    return this._vgRoomPhoto
  }

  set vgRoomPhoto(vgRoomPhoto) {
    this._vgRoomPhoto = vgRoomPhoto
  }

  get xmlModificationDate() {
    return this._xmlModificationDate
  }

  set xmlModificationDate(xmlModificationDate) {
    this._xmlModificationDate = xmlModificationDate
  }

  get sendPmsCode() {
    return this._sendPmsCode
  }

  set sendPmsCode(sendPmsCode) {
    this._sendPmsCode = sendPmsCode
  }

}
// missing get and/or set for hidevars
