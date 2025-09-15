import { Table } from "antd";
import React, { use, useEffect, useState } from "react";
import axios from "axios";

const ManageOrder = () => {
  const [orders, setOrder] = useState([]);
  const column = [
    {
      title: "OrderCode",
      dataIndex: "OrderCode",
      key: "orderCode",
    },
    {
      title: "CustomerName",
      dataIndex: "CustomerName",
      key: "customerName",
    },
    {
      title: "CarId",
      dataIndex: "CarId",
      key: "carId",
    },
    {
      title: "CreateAt",
      dataIndex: "CreateAt",
      key: "createAt",
    },
  ];
  const fetchOrder = async () => {
    const response = await axios.get(
      "https://68c7ae0b5d8d9f51473290a9.mockapi.io/order"
    );
    console.log(response.data);
    setOrder(response.data);
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <>
      <Table dataSource={orders} columns={column} />
    </>
  );
};
export default ManageOrder;
