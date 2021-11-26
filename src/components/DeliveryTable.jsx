const DeliveryTable = ({ data }) => {
  function showTimeFormat(d, pattern) {
    let date = new Date(d);
    return date.toLocaleDateString("ar-EG-u-nu-latn", pattern);
  }

  function setClassStyle(currentStatus) {
    if (
      currentStatus === "DELIVERED" ||
      currentStatus === "DELIVERED_TO_SENDER"
    ) {
      return "reason success";
    } else if (currentStatus === "NOT_DELIVERED") {
      return "reason canceled";
    } else if (currentStatus === "CANCEL_DELIVERY") {
      return "reason failed";
    } else {
      return "reason";
    }
  }

  function detailsToArabic(det) {
    if (det === "TICKET_CREATED") {
      return "تم إنشاء الشحنة";
    } else if (det === "PACKAGE_RECEIVED") {
      return "تم استلام الشحنة";
    } else if (det === "NOT_YET_SHIPPED") {
      return "لم يتم الشحن بعد";
    } else if (det === "OUT_FOR_DELIVERY") {
      return "فى طريقها للتسليم";
    } else if (det === "WAITING_FOR_CUSTOMER_ACTION") {
      return "انتظار رد العميل";
    } else if (det === "DELIVERED_TO_SENDER") {
      return "تم تسلم الشحنة للمرسل";
    } else if (det === "RECEIVED_DELIVERY_LOCATION") {
      return "تم معرفة عنوان الشحنة";
    } else if (det === "DELIVERED") {
      return "تم التسليم";
    } else {
      return "غير معروف";
    }
  }

  if (data.isLoaded) {
    let reasonStyle = setClassStyle(data.theData.CurrentStatus.state);
    return (
      <table className="table table-borderless m-0">
        <thead className="bg-color-vl-gray">
          <tr>
            <th scope="col">الفرع</th>
            <th scope="col">التاريخ</th>
            <th scope="col">الوقت</th>
            <th scope="col">تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {data.theData.TransitEvents.map((info, i) => {
            let branch = "مدينة نصر";
            let date = "";
            let time = "";
            let reason = info?.reason ?? "";
            return (
              <tr key={i}>
                <td>{branch}</td>
                <td>
                  {showTimeFormat(info.timestamp, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td>
                  {
                    showTimeFormat(info.timestamp, {
                      hour: "numeric",
                      minute: "numeric",
                    }).split(",")[1]
                  }
                </td>
                <td>
                  {detailsToArabic(info.state)}
                  <div className={reasonStyle}>{reason}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return <div className="no-data"></div>;
};

export default DeliveryTable;
