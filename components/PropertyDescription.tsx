import React, { useState } from "react";
import "./PropertyDescription.css";
import { CardItem } from "./types";
import { Row, Col } from "react-bootstrap";
import FormModal from "./FormModal";

function PropertyDescription({ data }: { data: CardItem }) {
  const [show, setShow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section className="customContainer mt-5">
      <Row>
        {/* DESCRIPTION */}
        <Col md={6} sm={12}>
          <h2 className="ip_description_heading">DESCRIPTION</h2>

          {/* Short description */}
          <div
            className="ip_description_text"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          {/* Read More */}
          {data?.description_extended && !showDescription && (
            <button
              type="button"
              className="readMoreLink"
              onClick={() => setShowDescription(true)}
            >
              Read More
            </button>
          )}
        </Col>

        {/* KEY DETAILS */}
        <Col md={6} sm={12} className="ip_blue_card p-4">
          <Row>
            <Col md={6} sm={12}>
              <p className="ip_blue_card_heading">KEY DETAILS</p>
            </Col>
            <Col md={6} sm={12}>
              <button
                className="btn-primary-alternative-custom"
                onClick={() => setShow(true)}
              >
                Contact for pricing
                <i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
              </button>
              <FormModal show={show} onClose={() => setShow(false)} />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={6}>
              <ul>
                <li className="ip_blue_card_point_normal">
                  <b className="ip_blue_card_point_bold">Project Area&nbsp;&nbsp;</b>
                  {data?.area}
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li className="ip_blue_card_point_normal">
                  <b className="ip_blue_card_point_bold">Certifications&nbsp;&nbsp;</b>
                  {data?.certifications}
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <ul>
                <li className="ip_blue_card_point_normal">
                  <b className="ip_blue_card_point_bold">Building Type&nbsp;&nbsp;</b>
                  {data?.building_type}
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li className="ip_blue_card_point_normal">
                  <b className="ip_blue_card_point_bold">Developer&nbsp;&nbsp;</b>
                  {data?.developer}
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* EXTENDED DESCRIPTION */}
      {showDescription && (
        <Row>
          <Col md={12} className="mt-4 ip_description_text">
            <div
              className="ip_description_text"
              dangerouslySetInnerHTML={{
                __html: data?.description_extended,
              }}
            />

            {/* Read Less */}
            <button
              type="button"
              className="readMoreLink"
              onClick={() => setShowDescription(false)}
            >
              Read Less
            </button>
          </Col>
        </Row>
      )}
    </section>
  );
}

export default PropertyDescription;
