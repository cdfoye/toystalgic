import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import "./OrderStyles.css";

function OrderHistory() {
  const { data, loading } = useQuery(QUERY_USER);
  let user;
  if (data) {
    user = data.user;
  }
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>
        {user ? (
          <>
            <h1>
              Order History for {user.firstName} {user.lastName}
            </h1>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h1>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h1>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1>No Order history</h1>
        )}
      </div>
    </>
  );
}
export default OrderHistory;
