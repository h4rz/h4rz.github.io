import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var education = this.props.resumeEducation.map(function (education, i) {

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<h3>{education.years}</h3>}
            iconStyle={{
              background: "#d7effe",
              color: "#000",
              textAlign: "center",
            }}
            icon={<i className="fas fa-university experience-icon"></i>}
            key={i}
          >
            {education.is_current ? (
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              <Badge pill className="main-badge mr-2 mb-2" key={i}>
                Current
              </Badge>
            </div>): null}
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {education.title}
            </h3>
            <br/>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {education.school}
            </h4>
            <br/>
            <h5>
              {education.location}
            </h5>
            <br/>
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              <Badge pill className="main-badge mr-2 mb-2" key={i}>
                {education.gpa}
              </Badge>
            </div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "white" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {education}
            <VerticalTimelineElement
              iconStyle={{
                background: "#d7effe",
                color: "#000",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
