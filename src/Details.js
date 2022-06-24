import { Table } from "antd";

const styles = {
    borderBottom: "2px solid #cdcdcd",
    borderRight: "2px solid #cdcdcd",
    padding: '5px 15px',
    display: 'inline-block',
    fontSize: '20px'
};

const columns = [
    {
        title: "",
        dataIndex: "ten_giai",
        key: "ten_giai",
        width: 150,
        align: 'center'
    },
    {
        title: "",
        dataIndex: "ket_qua",
        key: "ket_qua",
        align: 'center',
        render: (_, { ket_qua }) => (
            <>
                {ket_qua?.split(",").map((item, i) => {
                    return (
                        <span style={styles} key={i}>
                            <strong>{item}</strong>
                        </span>
                    );
                })}
            </>
        ),
    },
];

let dataSource = [
    {
        key: 1,
        ten_giai: "Giải Đặc Biệt",
        ket_qua: "",
    },
    {
        key: 2,
        ten_giai: "Giải nhất",
        ket_qua: "",
    },
    {
        key: 3,
        ten_giai: "Giải nhì",
        ket_qua: "",
    },
    {
        key: 4,
        ten_giai: "Giải ba",
        ket_qua: "",
    },
    {
        key: 5,
        ten_giai: "Giải tư",
        ket_qua: "",
    },
    {
        key: 6,
        ten_giai: "Giải năm",
        ket_qua: "",
    },
    {
        key: 7,
        ten_giai: "Giải sáu",
        ket_qua: "",
    },
    {
        key: 8,
        ten_giai: "Giải bảy",
        ket_qua: "",
    },
    {
        key: 9,
        ten_giai: "Giải tám",
        ket_qua: "",
    },
];

const Details = (props) => {
    const data = JSON.parse(props.details);
    data.forEach((value, i) => {
        dataSource[i].key = i;
        dataSource[i].ket_qua = value;
    });
    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                bordered
                showHeader={false}
            />
        </>
    );
};

export default Details;
