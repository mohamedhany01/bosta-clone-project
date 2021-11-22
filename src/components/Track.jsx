const Track = () => {
  return (
    <section className="track">
      <div className="container">
        <div className="row">
        <section className="info g-0 row flex-row-reverse text-start p-4 mt-5 border-custom-full border-custom-rounded-top">
          <div className="col-lg-3 col-12 mb-lg-0 mb-3">
            <div id="delivery-code" className="mb-lg-2">
              رقم الشحنة
            </div>
            <div id="delivery-status">الحالة</div>
          </div>
          <div className="col-lg-3 col-12 mb-lg-0 mb-3">
            <div className="mb-lg-2">اخر تحديث</div>
            <div id="delivery-date">التاريخ</div>
          </div>
          <div className="col-lg-3 col-12 mb-lg-0 mb-3">
            <div className="mb-lg-2">اسم التاجر</div>
            <div id="seller-name">الاسم</div>
          </div>
          <div className="col-lg-3 col-12 mb-lg-0 mb-3">
            <div className="mb-lg-2">موعد التسليم خلال</div>
            <div id="delivery-finish-date">الموعد</div>
          </div>
        </section>
        <section className="progress-line p-4 g-0 row border-custom-bottom border-custom-start border-custom-end border-custom-rounded-bottom">
          <div className="col-12">TODO</div>
        </section>
        </div>
      </div>
    </section>
  );
};

export default Track;
