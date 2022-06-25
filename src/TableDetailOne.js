import { Table } from "antd";

const ket_qua_styles = {
    border: "1px solid #f1f1f1",
    display: "inline-block",
    padding: "2px 18px",
    fontSize: "22px",
    margin: "3px",
};

const columns = [
    {
        title: "",
        dataIndex: "ten_giai",
        key: "ten_giai",
        width: 150,
        align: "center",
    },
    {
        title: "",
        dataIndex: "ket_qua",
        key: "ket_qua",
        align: "center",
        render: (_, { ket_qua }) => (
            <>
                {ket_qua?.split(",").map((item, i) => {
                    return (
                        <span style={ket_qua_styles} key={i}>
                            <strong>{item}</strong>
                        </span>
                    );
                })}
            </>
        ),
    },
];

const TableDetailOne = (props) => {
    let dataSource = [
        {
            key: 1,
            ten_giai: "Giải Đặc Biệt",
            ket_qua: 0,
        },
        {
            key: 2,
            ten_giai: "Giải nhất",
            ket_qua: 0,
        },
        {
            key: 3,
            ten_giai: "Giải nhì",
            ket_qua: 0,
        },
        {
            key: 4,
            ten_giai: "Giải ba",
            ket_qua: 0,
        },
        {
            key: 5,
            ten_giai: "Giải tư",
            ket_qua: 0,
        },
        {
            key: 6,
            ten_giai: "Giải năm",
            ket_qua: 0,
        },
        {
            key: 7,
            ten_giai: "Giải sáu",
            ket_qua: 0,
        },
        {
            key: 8,
            ten_giai: "Giải bảy",
            ket_qua: 0,
        },
        {
            key: 9,
            ten_giai: "Giải tám",
            ket_qua: 0,
        },
    ];

    const data = JSON.parse(props.details);
    data?.forEach((value, i) => {
        dataSource[i].key = i;
        dataSource[i].ket_qua = value;
    });
    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                showHeader={false}
                bordered
            />
        </>
    );
};

export default TableDetailOne;
