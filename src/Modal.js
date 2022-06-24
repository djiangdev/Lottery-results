import { Button, Modal } from "antd";
import { useState } from "react";
import { InfoCircleFilled } from "@ant-design/icons";

import Details from "./Details";

const OpenModal = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const Data = props.detail.split("|");
    const OpenTime = Data[0];
    const TurnNum = Data[1];
    const Detail = Data[2];

    return (
        <>
            <Button type="primary" onClick={showModal}>
                <InfoCircleFilled /> Chi tiết
            </Button>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
                centered={true}
            >
                <p>
                    Ngày xổ: <strong>{OpenTime}</strong>
                    <br />
                    Lượt xổ: <strong>{TurnNum}</strong>
                </p>
                <Details details={Detail} />
            </Modal>
        </>
    );
};

export default OpenModal;
