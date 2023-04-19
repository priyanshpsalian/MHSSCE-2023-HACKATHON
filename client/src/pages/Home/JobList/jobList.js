import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

//Components Imports
import FeaturedJobs from "../JobList/FeaturedJobs";
import Freelancer from "../JobList/Freelancer.js";
import Fulltime from "../JobList/Fulltime.js";
import Parttime from "../JobList/Parttime.js";
import RecentJobs from "./RecentJobs";

const JobList = () => {
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <div className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title">New & Random Jobs</h4>
                <p className="text-muted mb-1">
                  Post a job to tell us about your project. We'll quickly match
                  you with the right freelancers.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Nav
                tabs
                className="job-list-menu  nav-pills nav-justified flex-column flex-sm-row mb-4"
                id="pills-tab"
                role="tablist"
              >
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      tabChange("1");
                    }}
                    id="recent-jobs-tab"
                    type="button"
                    role="tab"
                  >
                    Recent Jobs
                  </NavLink>
                </NavItem>

                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      tabChange("2");
                    }}
                    id="featured-jobs-tab"
                    type="button"
                    role="tab"
                  >
                    Featured Jobs
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      tabChange("3");
                    }}
                    id="freelancer-tab"
                    type="button"
                    role="tab"
                  >
                    Freelancer
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      tabChange("4");
                    }}
                    id="part-time-tab"
                    type="button"
                    role="tab"
                  >
                    Part Time
                  </NavLink>
                </NavItem>
                <NavItem role="presentation">
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      tabChange("5");
                    }}
                    id="full-time-tab"
                    type="button"
                    role="tab"
                  >
                    Full Time
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <RecentJobs />
                </TabPane>

                <TabPane tabId="2">
                  <FeaturedJobs />
                </TabPane>

                <TabPane tabId="3">
                  <Freelancer />
                </TabPane>

                <TabPane tabId="4">
                  <Parttime />
                </TabPane>

                <TabPane tabId="5">
                  <Fulltime />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default JobList;
