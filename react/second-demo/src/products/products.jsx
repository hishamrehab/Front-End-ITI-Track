import React, {
  useState,
} from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axios config/axiosInstance";

const Products =
  () => {
    const [
      products,
      setProducts,
    ] =
      useState(
        [],
      );

    useEffect(() => {
      axiosInstance
        .get(
          "products",
        )
        .then(
          (
            res,
          ) => {
            console.log(
              res.data,
            );
          },
        )
        .catch(
          (
            err,
          ) => {
            console.log(
              err,
            );
          },
        );
    }, []);

    return (
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {products.map(
          (
            product,
          ) => (
            <div
              className="col"
              key={
                product
              }
            >
              <div className="card">
                <img
                  src={
                    product.image
                  }
                  style={{
                    height:
                      "300px",
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {
                      product.title
                    }
                  </h5>
                  <p className="card-text">
                    {
                      product.description
                    }
                  </p>
                  <Link
                    to={`/details/${product.id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    );
  };

export default Products;
