import sectionRightImg from "../images/undraw_questions_re_1fy7.svg";

const DeliveryProblem = () => {
  return (
    <section className="delivery-problem g-0 row p-3 flex-row-reverse justify-content-between align-items-center border-custom-full border-custom-rounded-full">
      <div className="col-5">
        <img className="img-fluid" src={sectionRightImg} alt="Any problem" />
      </div>
      <div className="col-7 text-center">
        <div className="title fs-700 mb-3">!هل يوجد مشكلة فى شحنتك ؟</div>
        <button className="btn bg-color-red border-custom-rounded-full color-white w-100 p-2">
          إبلاغ عن مشكلة
        </button>
      </div>
    </section>
  );
};

export default DeliveryProblem;
