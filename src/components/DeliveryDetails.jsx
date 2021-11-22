import DeliveryTable from "./DeliveryTable";

const DeliveryDetails = () => {
  return (
    <section className="delivery-details text-start mb-lg-0 mb-5">
      <header>تفاصيل الشحنة</header>
      <div className="table-view me-lg-3 mt-3 border-custom-full border-custom-rounded-full">
        <DeliveryTable/>
      </div>
    </section>
  );
};

export default DeliveryDetails;
