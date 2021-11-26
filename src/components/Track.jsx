const Track = ({ data }) => {
  function showTimeFormat(d, pattern) {
    let date = new Date(d);
    return date.toLocaleDateString("ar-EG-u-nu-latn", pattern);
  }

  const defaultAns = "لا يوجد";

  function showStateInArabic(currentStatus) {
    if (
      currentStatus === "DELIVERED" ||
      currentStatus === "DELIVERED_TO_SENDER"
    ) {
      return "تم تسليم الشحنة";
    } else if (currentStatus === "NOT_DELIVERED") {
      return "لم يتم تسليم الشحنة";
    } else if (currentStatus === "CANCEL_DELIVERY") {
      return "تم إالغاء الشحنة";
    } else {
      return "غير معروف";
    }
  }

  function styleStatus(currentStatus) {
    if (
      currentStatus === "DELIVERED" ||
      currentStatus === "DELIVERED_TO_SENDER"
    ) {
      return "d-status success";
    } else if (currentStatus === "NOT_DELIVERED") {
      return "d-status failed";
    } else if (currentStatus === "CANCEL_DELIVERY") {
      return "d-status canceled";
    } else {
      return "d-status";
    }
  }

  function setClassStyleTrack(currentStatus) {
    if (
      currentStatus === "DELIVERED" ||
      currentStatus === "DELIVERED_TO_SENDER"
    ) {
      return "progress-step-container success";
    } else if (currentStatus === "NOT_DELIVERED") {
      return "progress-step-container failed";
    } else if (currentStatus === "CANCEL_DELIVERY") {
      return "progress-step-container canceled";
    } else {
      return "progress-step-container ideal";
    }
  }

  let promisedDate = data.theData?.PromisedDate ?? defaultAns;

  return (
    <div className="row">
      <section className="info g-0 row flex-row-reverse text-start p-4 mt-5 border-custom-full border-custom-rounded-top">
        <div className="col-lg-3 col-12 mb-lg-0 mb-3">
          <div id="delivery-code" className="mb-lg-2">
            {data.isLoaded ? data.theData.TrackingNumber : ""} رقم الشحنة
          </div>
          <div
            id="delivery-status"
            className={
              data.isLoaded
                ? styleStatus(data.theData.CurrentStatus.state)
                : "d-status"
            }
          >
            {data.isLoaded
              ? showStateInArabic(data.theData.CurrentStatus.state)
              : defaultAns}
          </div>
        </div>
        <div className="col-lg-3 col-12 mb-lg-0 mb-3">
          <div className="mb-lg-2">اخر تحديث</div>
          <div id="delivery-date">
            {data.isLoaded
              ? showTimeFormat(data.theData.CurrentStatus.timestamp, {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              : defaultAns}
          </div>
        </div>
        <div className="col-lg-3 col-12 mb-lg-0 mb-3">
          <div className="mb-lg-2">اسم التاجر</div>
          <div id="seller-name">{data.isLoaded ? "SOUQ.COM" : defaultAns}</div>
        </div>
        <div className="col-lg-3 col-12 mb-lg-0 mb-3">
          <div className="mb-lg-2">موعد التسليم خلال</div>
          <div id="delivery-finish-date">{promisedDate}</div>
        </div>
      </section>
      <section className="progress-line p-4 g-0 row border-custom-bottom border-custom-start border-custom-end border-custom-rounded-bottom">
        <div className="col-12">
          <div
            className={
              data.isLoaded
                ? setClassStyleTrack(data.theData.CurrentStatus.state)
                : "progress-step-container ideal"
            }
          >
            <div className="box">
              <span className="icon-check-circle"></span>
              <p className="progress-title">تم إنشاء الشحنة</p>
              <p className="note fs-400"></p>
            </div>
            <div className="dash-between"></div>
            <div className="box">
              <span className="icon-check-circle"></span>
              <p className="progress-title">تم إستلام الشحنة من التاجر</p>
              <p className="note fs-400"></p>
            </div>
            <div className="dash-between"></div>
            <div className="box">
              <span className="icon-check-circle show"></span>
              <span className="icon-truck d-none hidden"></span>
              <p className="progress-title">الشحنة خرجت للتسليم</p>
              <p className="note fs-400"></p>
            </div>
            <div className="dash-between"></div>
            <div className="box">
              <span className="icon-check-circle show"></span>
              <span className="icon-package d-none hidden"></span>
              <p className="progress-title">تم التسليم</p>
              <p className="note fs-400"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Track;
