import React, {
  useEffect,
  useState,
} from "react";
import {
  useParams,
  useLocation,
} from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstance";

function ProductDetails() {
  const location =
    useLocation();
  const params =
    useParams();
  const [
    product,
    setProduct,
  ] =
    useState(
      {},
    );
  console.log(
    "location",
    location,
  );
  console.log(
    "params",
    params,
  );

  useEffect(() => {
    axiosInstance
      .get(
        `products/${params.id}`,
        {
          params:
            {
              id: params.id,
            },
        },
      )
      .then(
        (
          res,
        ) => {
          console
            .log(
              res.data,
            )
            .catch(
              (
                err,
              ) => {
                console.log(
                  err,
                );
                setProduct(
                  res.data,
                );
              },
            );
        },
      );
  }, [
    params.id,
  ]);

  return (
    <div>
      {/* <h1>Product Details {props.match.params.id}</h1> */}
      <img
        src={
          product.image
        }
        alt={
          product.title
        }
      />
      <h1>
        {
          product.title
        }
      </h1>
      <p>
        {
          product.description
        }
      </p>
      <p>
        {
          product.price
        }
      </p>
    </div>
  );
}

export default ProductDetails;
