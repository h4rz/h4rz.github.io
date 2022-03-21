import React, { Component } from "react";

class Publication extends Component {
  render() {
    if (this.props.resumePublications && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.publications;
      var publications = this.props.resumePublications.map(function (publication, i) {
        return (
          <>
            <h3>
              {publication.title}
              {publication.url ? (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <br/>
            <h4>Published by: {publication.publication}</h4>
            <h4>Authors: {publication.authors}</h4>
            <br/>
            {publication.description}
          </>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12">
            <h1 className="section-title" style={{ color: "white" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-12 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    {publications}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Publication;
