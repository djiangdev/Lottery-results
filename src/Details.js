import { Col, Row } from "antd";
import TableDetailOne from "./TableDetailOne";
import TableDetailTwo from "./TableDetailTwo";

const Details = (props) => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <TableDetailOne details={props.details} />
                </Col>
                <Col span={12}>
                    <TableDetailTwo details={props.details} />
                </Col>
            </Row>
        </>
    );
};

export default Details;
