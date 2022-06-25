import { Button, Modal, Alert } from "antd";
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
    const title = `Ngày xổ: ${OpenTime} - Lượt xổ: ${TurnNum}`;
    return (
        <>
            <Button type="primary" onClick={showModal}>
                <InfoCircleFilled /> Chi tiết
            </Button>
            <Modal
                title={title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText="Đóng"
                centered={true}
                width={"100%"}
            >
                <Alert
                    style={{ marginBottom: "30px" }}
                    message="Cứ 45 giây là một kỳ quay, kỳ đầu tiên là 07:00:45. Có 18 vị
                    trí xổ số, giải đặc biệt đến giải tám. Mỗi chữ số của dãy số
                    trúng thưởng là một trong các số 0-9. Kết quả quay thưởng:
                    Có tổng cộng 18 bộ số được quay từ giải đặc biệt đến giải
                    tám. Kết quả của xổ số bao gồm 2-6 chữ số, và các số được
                    sắp xếp từ phải sang trái."
                    type="success"
                />
                <Details details={Detail} />
            </Modal>
        </>
    );
};

export default OpenModal;
