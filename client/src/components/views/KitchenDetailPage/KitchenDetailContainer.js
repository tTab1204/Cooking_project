import React, { useEffect, useState } from "react";
import { message } from "antd";
import Axios from "axios";
import Loading from "../../Loading";
import KitchenDetailPresenter from "./KitchenDetailPresenter";

function KitchenDetailContainer({ match }) {
  const kitchenId = match.params.kitchensId;
  const [loading, setloading] = useState(true);
  const [DetailKitchen, setDetailKitchen] = useState({});
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    Axios.get(`/api/kitchens/kitchens_by_id?id=${kitchenId}&type=single`)
      .then((response) => {
        setDetailKitchen(response.data.kitchen[0]);
        setloading(false);
      })
      .catch((err) => alert(err));
  }, []);

  const successMessage = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({
        content: "Success!",
        key,
        duration: 2,
      });
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <KitchenDetailPresenter
            DetailKitchen={DetailKitchen}
            ShowSuccess={ShowSuccess}
            successMessage={successMessage}
          />
        </>
      )}
    </>
  );
}
export default KitchenDetailContainer;
