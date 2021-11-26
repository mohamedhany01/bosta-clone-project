const DeliveryAddress = ({data}) => {
  let add = "امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22 ,, القاهرة";
  return (
    <section className="delivery-address text-start mb-lg-0 mb-5">
      <header>عنوان التسليم</header>
      <div id="address" className="bg-color-vl-gray mt-3 mb-2 p-4 border-custom-full border-custom-rounded-full">
      {data.isLoaded ? add : "غير معروف"}
      </div>
    </section>
  );
};

export default DeliveryAddress;
