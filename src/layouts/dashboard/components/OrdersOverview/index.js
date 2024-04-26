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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import PropTypes from "prop-types";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview({ courseName }) {
  const renderOverview = (courseName) => {
    switch (courseName) {
      case "ReactJs":
        return (
          <>
            <MDTypography variant="h6" fontWeight="medium">
              React Overview
            </MDTypography>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  React is a JavaScript library for building user interfaces. Here is a basic
                  roadmap for learning React:
                  <ul>
                    <li>Learn the fundamentals of JavaScript</li>
                    <li>Understand JSX syntax and how it integrates HTML in JavaScript</li>
                    <li>Learn React components, props, and state management</li>
                    <li>Explore React Router for navigation in single-page applications</li>
                    <li>Learn about React Hooks for functional components</li>
                    <li>Master Redux or Context API for global state management</li>
                    <li>Practice by building small to complex applications</li>
                  </ul>
                </MDTypography>
              </MDBox>
            </Card>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Here is a paragraph on basic JavaScript array methods: JavaScript array methods
                  are powerful tools for manipulating arrays. Some of the basic array methods
                  include:
                  <ul>
                    <li>
                      <code>map()</code>: Creates a new array populated with the results of calling
                      a provided function on every element in the calling array.
                    </li>
                    <li>
                      <code>filter()</code>: Creates a new array with all elements that pass the
                      test implemented by the provided function.
                    </li>
                    <li>
                      <code>reduce()</code>: Applies a function against an accumulator and each
                      element in the array to reduce it to a single value.
                    </li>
                    <li>
                      <code>forEach()</code>: Executes a provided function once for each array
                      element.
                    </li>
                    <li>
                      <code>push()</code>: Adds one or more elements to the end of an array and
                      returns the new length of the array.
                    </li>
                    <li>
                      <code>pop()</code>: Removes the last element from an array and returns that
                      element.
                    </li>
                  </ul>
                  These are just a few examples of array methods that can be incredibly useful when
                  working with data in JavaScript.
                </MDTypography>
              </MDBox>
            </Card>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Here are some common React interview questions:
                  <ul>
                    <li>What is React and what are its main features?</li>
                    <li>What is JSX and how does it differ from HTML?</li>
                    <li>Explain the concept of Virtual DOM in React.</li>
                    <li>What are React components? Explain the different types of components.</li>
                    <li>What is state in React? How is it used?</li>
                    <li>
                      What are props in React? How do you pass data from parent to child components?
                    </li>
                    <li>What are React Hooks? List some built-in React Hooks.</li>
                    <li>
                      Explain the purpose of React Router. How do you implement routing in a React
                      application?
                    </li>
                  </ul>
                  These questions will help you prepare for React-related interviews.
                </MDTypography>
              </MDBox>
            </Card>
          </>
        );

      case "Flutter":
        return (
          <>
            <MDTypography variant="h6" fontWeight="medium">
              Flutter Overview
            </MDTypography>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Flutter is an open-source UI software development kit created by Google. Here is a
                  basic roadmap for learning Flutter:
                  <ul>
                    <li>Learn Dart programming language fundamentals</li>
                    <li>Understand Flutter widgets and layout principles</li>
                    <li>Explore state management solutions like Provider or Riverpod</li>
                    <li>Master Flutter animations and custom widget creation</li>
                    <li>Learn about navigation in Flutter apps using Navigator</li>
                    <li>Practice by building small to complex applications</li>
                  </ul>
                </MDTypography>
              </MDBox>
            </Card>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Designing UIs in Flutter involves using widgets to create layouts and components.
                  Flutter provides a rich set of Material Design and Cupertino widgets for building
                  beautiful and responsive UIs. You can also customize your UI using custom painting
                  and animations.
                </MDTypography>
              </MDBox>
            </Card>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Here are some common Flutter interview questions:
                  <ul>
                    <li>
                      What is Flutter and how does it differ from other mobile development
                      frameworks?
                    </li>
                    <li>Explain the widget concept in Flutter.</li>
                    <li>What is stateful and stateless widget in Flutter?</li>
                    <li>Explain the main features of Dart language.</li>
                    <li>What are Flutter packages and how do you use them?</li>
                    <li>Explain Flutter navigation and routing.</li>
                    <li>What is Flutter animation? How do you create animations in Flutter?</li>
                    <li>Explain the Flutter layout system.</li>
                  </ul>
                  These questions will help you prepare for Flutter-related interviews.
                </MDTypography>
              </MDBox>
            </Card>
          </>
        );

      case "Design":
        return (
          <>
            <MDTypography variant="h6" fontWeight="medium">
              Design Overview
            </MDTypography>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Designing using Figma provides a collaborative interface design tool. Here is a
                  basic roadmap for learning design using Figma:
                  <ul>
                    <li>Learn the basics of UI/UX design principles</li>
                    <li>Explore Figma interface and basic tools</li>
                    <li>Practice wireframing and prototyping with Figma</li>
                    <li>Understand collaborative design workflows in Figma</li>
                    <li>Explore advanced features like component libraries and design systems</li>
                    <li>Practice by designing real-world projects</li>
                  </ul>
                </MDTypography>
              </MDBox>
            </Card>
            <Card sx={{ height: "100%" }}>
              <MDBox p={5}>
                <MDTypography variant="body1">
                  Integrating design with development involves close collaboration between designers
                  and developers. Tools like Figma allow designers to create design prototypes that
                  can be easily shared and implemented by developers. This collaboration ensures
                  that the final product meets both design and functionality requirements.
                </MDTypography>
              </MDBox>
            </Card>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox p={2}>
        <MDBox pt={3} px={3}>
          {renderOverview(courseName)}
        </MDBox>
      </MDBox>
    </Card>
  );
}
OrdersOverview.propTypes = {
  courseName: PropTypes.string,
};
export default OrdersOverview;
