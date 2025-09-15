import { Table } from "antd";
import Reacr, { useEffect, useState } from "react";
import axios from "axios";

const ManageCar = () => {
  const [cars, setCars] = useState([]);
  const column = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "Brand",
      key: "Brand",
    },
    {
      title: "Desciption",
      dataIndex: "Description",
      key: "Description",
    },
  ];
  const fetchCar = async () => {
    const respone = await axios.get(
      "https://68c7ae0b5d8d9f51473290a9.mockapi.io/data"
    );
    console.log(respone.data);
    setCars(respone.data);
  };
  useEffect(() => {
    fetchCar();
  }, []);
  return (
    <>
      <Table dataSource={cars} columns={column} />
    </>
  );
};
export default ManageCar;
