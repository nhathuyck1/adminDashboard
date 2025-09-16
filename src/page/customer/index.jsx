import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const ManageCustomer = () => {
  const [customers, setCustomer] = useState([]);
  const column = [
    {
      title: "CustomerID",
      dataIndex: "CustomerID",
      key: "customerID",
    },
    {
      title: "CustomerName",
      dataIndex: "CustomerName",
      key: "customerName",
    },
    {
      title: "PhoneNumber",
      dataIndex: "PhoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
    },
  ];
  const fetchCustomer = async () => {
    const response = await axios.get(
      "https://68c5624fa712aaca2b689fc4.mockapi.io/bike/customer"
    );
    console.log(response.data);
    setCustomer(response.data);
  };
  useEffect(() => {
    fetchCustomer();
  }, []);
  return (
    <>
      <Table dataSource={customers} columns={column} />
    </>
  );
};

export default ManageCustomer;
