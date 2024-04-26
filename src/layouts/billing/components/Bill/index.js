import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import MDInput from "components/MDInput";
import axios from "axios";
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import logo from "../../../../assets/images/12.png";

// Styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 100, // adjust as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    alignItems: "justify",
    fontSize: 14,
    marginBottom: 5,
  },
});

function Bill({ id, name, company, email, pendingFees, totalFees, onDelete, fetchData }) {
  const [editable, setEditable] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedCompany, setEditedCompany] = useState(company);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPendingFees, setEditedPendingFees] = useState(pendingFees);
  const [editedTotalFees, setEditedTotalFees] = useState(totalFees);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const handleEditToggle = () => {
    setEditable(!editable);
  };

  const handleUpdate = () => {
    axios
      .patch(
        `https://pawanputratechnology-48873-default-rtdb.firebaseio.com/allUsersList/${id}.json`,
        {
          name: editedName,
          courseName: editedCompany,
          email: editedEmail,
          pendingFees: editedPendingFees,
          studentFees: editedTotalFees,
        }
      )
      .then(() => {
        // Update successful, toggle editable state
        setEditable(false);
        fetchData();
      })
      .catch((error) => {
        console.error("Error updating record:", error);
        // Handle error
      });
  };

  return (
    <MDBox>
      <MDBox
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        bgColor={darkMode ? "transparent" : "grey-100"}
        borderRadius="lg"
        p={3}
        mb={1}
        mt={2}
      >
        <MDBox width="100%" display="flex" flexDirection="column">
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            mb={2}
          >
            <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
              {name}
            </MDTypography>

            <MDBox
              display="flex"
              alignItems="center"
              mt={{ xs: 2, sm: 0 }}
              ml={{ xs: -1.5, sm: 0 }}
            >
              {["admin", "hr"].includes(
                JSON.parse(localStorage.getItem("User"))?.at(0)?.roleCode
              ) && (
                <>
                  <MDBox mr={1}>
                    <MDButton variant="text" color="error" onClick={onDelete}>
                      <Icon>delete</Icon>&nbsp;delete
                    </MDButton>
                  </MDBox>
                  <MDButton
                    variant="text"
                    color={darkMode ? "white" : "dark"}
                    onClick={handleEditToggle}
                  >
                    <Icon>{editable ? "" : "edit"}</Icon>&nbsp;{editable ? "" : "edit"}
                  </MDButton>
                </>
              )}
              <MDBox
                display="flex"
                alignItems="center"
                lineHeight={1}
                ml={3}
                sx={{ cursor: "pointer" }}
              >
                <PDFDownloadLink
                  document={
                    <Document>
                      <Page size="A4" style={styles.page}>
                        <Image src={logo} style={styles.logo} />
                        <Text style={styles.title}>Pawanputra Technology</Text>
                        <Text style={styles.text}>Name: {name}</Text>
                        <Text style={styles.text}>Course Name: {company}</Text>
                        <Text style={styles.text}>Email: {email}</Text>
                        <Text style={styles.text}>Pending Fees: {pendingFees}</Text>
                        <Text style={styles.text}>Total Fees: {totalFees}</Text>
                      </Page>
                    </Document>
                  }
                  fileName={`bill_${id}.pdf`}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : <MDButton>Download PDF</MDButton>
                  }
                </PDFDownloadLink>
              </MDBox>
            </MDBox>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
              Course Name:&nbsp;&nbsp;&nbsp;
              {editable ? (
                <MDInput
                  type="text"
                  value={editedCompany}
                  onChange={(e) => setEditedCompany(e.target.value)}
                />
              ) : (
                <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                  {company}
                </MDTypography>
              )}
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
              Email:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium">
                {email}
              </MDTypography>
            </MDTypography>
          </MDBox>
          <MDBox mb={1} lineHeight={0}>
            <MDTypography variant="caption" color="text">
              Pending Fees:&nbsp;&nbsp;&nbsp;
              {editable ? (
                <MDInput
                  type="number"
                  value={editedPendingFees}
                  onChange={(e) => setEditedPendingFees(e.target.value)}
                />
              ) : (
                <MDTypography variant="caption" fontWeight="medium">
                  {pendingFees}
                </MDTypography>
              )}
            </MDTypography>
          </MDBox>
          <MDTypography variant="caption" color="text">
            Total Fees:&nbsp;&nbsp;&nbsp;
            {editable ? (
              <MDInput
                type="number"
                value={editedTotalFees}
                onChange={(e) => setEditedTotalFees(e.target.value)}
              />
            ) : (
              <MDTypography variant="caption" fontWeight="medium">
                {totalFees}
              </MDTypography>
            )}
          </MDTypography>
          {editable && (
            <MDButton variant="contained" onClick={handleUpdate}>
              Update
            </MDButton>
          )}
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

Bill.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pendingFees: PropTypes.string.isRequired,
  totalFees: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Bill;
