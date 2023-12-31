/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {Col, Container, Row} from "reactstrap";

class Header extends React.Component {
  render() {
      const {title} = this.props || {};
      return (
          <>
              <div
                  className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center ml-2"
                  style={{width: "100vw"}}>
                  {/* Mask */}
                  <span className="mask bg-gradient-blue opacity-8"/>
                  {/* Header container */}
                  <Container className="d-flex align-items-center">
                      <Row>
                          <Col lg="12" md="12">
                              <h1 className="display-2 text-white">
                                  {title}
                              </h1>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </>
      );
  }
}

export default Header;
