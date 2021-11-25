const DeliveryTable = ({ data }) => {
  if (data.isLoaded) {
    return (
      <table className="table table-borderless m-0">
        <thead className="bg-color-vl-gray">
          <tr>
            <th scope="col">الفرع</th>
            <th scope="col">الوقت</th>
            <th scope="col">التاريخ</th>
            <th scope="col">تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {data.theData.TransitEvents.map((info, i) => {
            let branch = "مدينة نصر";
            let date = "";
            let time = "";
            return (
              <tr key={i}>
                <td>{branch}</td>
                <td>{info.timestamp}</td>
                <td>{info.timestamp}</td>
                <td>{info.state}</td>
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

// let branch = "مدينة نصر";
//             let date = "";
//             let time = "";
//             // console.log( <tr key={i}>
//             //   <td>{branch}</td>
//             //   <td>{info.timestamp}</td>
//             //   <td>{info.timestamp}</td>
//             //   <td>{info.state}</td>
//             // </tr>);
//             <tr key={i}>
//               <td>{branch}</td>
//               <td>{info.timestamp}</td>
//               <td>{info.timestamp}</td>
//               <td>{info.state}</td>
//             </tr>
