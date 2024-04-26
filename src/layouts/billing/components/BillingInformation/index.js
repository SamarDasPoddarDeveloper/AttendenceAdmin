/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import { useEffect, useState } from "react";

function BillingInformation() {
  const [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://pawanputratechnology-48873-default-rtdb.firebaseio.com/allUsersList.json")
  //     .then((res) => {
  //       let objlist = Object.entries(res.data).map(([id, data]) => ({
  //         id,
  //         ...data,
  //       }));
  //       setDataList(objlist.filter((ele) => ele.roleCode === "student"));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://pawanputratechnology-48873-default-rtdb.firebaseio.com/allUsersList.json")
      .then((res) => {
        const dataWithId = Object.entries(res.data).map(([id, data]) => ({
          id,
          ...data,
        }));
        setDataList(dataWithId.filter((ele) => ele.roleCode === "student"));
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://pawanputratechnology-48873-default-rtdb.firebaseio.com/allUsersList/${id}.json`
      )
      .then(() => {
        // After successful deletion, fetch data again to update the UI
        fetchData();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {dataList.map((dataItem) => (
            <Bill
              key={dataItem.id} // Assuming each data item has a unique ID
              id={dataItem.id}
              name={dataItem.name}
              company={dataItem.courseName}
              email={dataItem.email}
              pendingFees={dataItem.pendingFees}
              totalFees={dataItem.studentFees}
              onDelete={() => handleDelete(dataItem.id)} // Pass delete function
              onEdit={() => handleEdit(dataItem.id)} // Pass edit function
              fetchData={fetchData}
            />
          ))}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
