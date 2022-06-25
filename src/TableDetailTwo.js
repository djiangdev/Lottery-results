import { Table } from "antd";

const duoi_styles = {
    fontSize: "22px",
};

const columns = [
    {
        title: "",
        dataIndex: "dau",
        key: "dau",
        align: "center",
    },
    {
        title: "",
        dataIndex: "duoi",
        key: "duoi",
        align: "center",
        render: (duoi) => <strong style={duoi_styles}>{duoi}</strong>,
    },
];

const TableDetailTwo = (props) => {
    let arrays = [];
    JSON.parse(props.details)?.forEach((values) => {
        const arr = values?.split(",");
        arrays.push(...arr);
    });
    let dataSource = [
        {
            key: -1,
            dau: "Đầu",
            duoi: "Đuôi",
        },
    ];
    for (let i = 0; i < 10; i++) {
        dataSource.push({
            key: i,
            dau: i,
            duoi: arrays
                .map((x) => {
                    if (Number(String(x).slice(-2, -1)) === i) {
                        return String(x).slice(-1);
                    }
                    return false;
                })
                .filter(Boolean)
                .join(","),
        });
    }

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

export default TableDetailTwo;
