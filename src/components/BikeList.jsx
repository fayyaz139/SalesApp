import { BikeItem } from "./BikeItem";
import { bikes } from "../services/bikes";
import { Row, Col, Button } from "react-bootstrap";
import { width } from "dom-helpers";

export const BikeList = () => {
  console.log(bikes);
  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "700px" }}
          ></input>
        </Col>
        <Col lg={2}>
          <Button>Search</Button>
        </Col>
      </Row>
      <Row>
        {bikes.map((item, index) => (
          <Col>
            <BikeItem item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
