import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import BackgroundImg from "../assets/orderHistoryBackground.png";

import "./OrderStyles.css";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  // if (loading) {
  //   return <h1>loading</h1>;
  // }
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
      }}
    >
      <div>
        <div className="container-order">
          <Link to="/">← Back to Products</Link>
          {user ? (
            <>
              <h1 className="h1-order">
                Order History for {user.firstName} {user.lastName}
              </h1>
              {user.orders.map((order) => (
                <div key={order._id} className="my-2">
                  <h1 className="h1-order">
                    {new Date(
                      parseInt(order.purchaseDate)
                    ).toLocaleDateString()}
                  </h1>
                  <div className="flex-row-order">
                    {order.products.map(
                      ({ _id, image, name, price }, index) => (
                        <div key={index} className="card px-1 py-1">
                          <Link to={`/products/${_id}`}>
                            <img alt={name} src={`/images/${image}`} />
                            <p>{name}</p>
                          </Link>
                          <div>
                            <span>${price}</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h1>No Order history</h1>
          )}
        </div>
      </div>
    </div>
  );
}
export default OrderHistory;
