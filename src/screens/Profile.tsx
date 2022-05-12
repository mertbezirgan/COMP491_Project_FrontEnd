import React, { useEffect, useState } from "react";
import { getCurrentUser, getUserProfile } from "../services/auth.service";
import IUser from "../types/user.type";
import "../css/profile.css";
import { Spinner } from "react-bootstrap";

const Profile: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserProfile().then((data) => {
      if (data) {
        console.log(data);
        setUser(data);
      }
      setLoading(false);
    });
  }, []);

  const handleUserName = (): string => {
    if (!user) return "";
    let initials = "";
    user.name
      .split(" ")
      .filter((w) => !!w)
      .forEach((w) => {
        initials += w.charAt(0).toUpperCase();
      });

    return initials;
  };

  return (
    <div id="profile">
      <div className="container col-md-7">
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <h1>Profile</h1>
            <div id="user-data-c">
              <div className="pp-round">
                <span>{handleUserName()}</span>
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "0px 15px",
                }}
              >
                {user?.name}
              </h3>
            </div>
            <hr style={{ width: "100%" }} />
            <h3>My Orders</h3>
            <div className="order-list-c">
              {user!.orders && user!.orders.length > 0 ? (
                user!.orders.map((order) => (
                  <div className="order-item" key={order.id}>
                    <div className="col-md-2">
                      <img
                        src={
                          order.stockKeepingUnit.product.productImages[0]
                            .image_url
                        }
                        alt="order"
                      />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3 align-items-center">
                      <p>
                        <b>Order No: {order.id}</b>
                      </p>
                      <p>{new Date(order.createdAt).toDateString()}</p>
                    </div>
                    <div className="col-md-3">
                      <p style={{ fontSize: '20px' }}>
                        <b>{order.total_price}$</b>
                      </p>
                    </div>
                    <div className="col-md-3">
                    {order.status === 1 ? (
                      <p style={{ color: "green" }}>
                        <i className="fa fa-check"></i>
                        {"  "}
                        <b>Status Delivered</b>
                      </p>
                    ) : (
                      <p style={{ color: "gray" }}>
                        <b>Status Pending</b>
                      </p>
                    )}
                      
                    </div>
                  </div>
                  
                ))
              ) : (
                <>No orders yet</>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
