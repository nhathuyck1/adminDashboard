import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function RentingManagement() {
  const [rentings, setRenting] = useState([]);
  const column = [
    {
      title: "RentingID",
      dataIndex: "RentingID",
      key: "rentingID",
    },
    {
      title: "CreatedAt",
      dataIndex: "CreatedAt",
      key: "createdAt",
    },
    {
      title: "CarModel",
      dataIndex: "CarModel",
      key: "carModel",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "price",
    },
    {
      title: "CustomerName",
      dataIndex: "CustomerName",
      key: "customerName",
    },
  ];
  const fetchRenting = async () => {
    const response = await axios.get(
      "https://68c5624fa712aaca2b689fc4.mockapi.io/bike/Renting"
    );
    console.log(response.data);
    setRenting(response.data);
  };
  useEffect(() => {
    fetchRenting();
  }, []);

  return (
    <>
      <Table dataSource={rentings} columns={column} />
    </>
  );
}
export default RentingManagement;
