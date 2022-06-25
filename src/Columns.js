import type { ColumnsType } from "antd/lib/table";
import { Badge } from "antd";
import OpenModal from "./Modal";

const openNum_styles = {
    border: "1px solid #cdcdcd",
    borderRadius: "50%",
    padding: "5px 15px",
    display: "inline-block",
    fontSize: "20px",
    margin: "3px",
};

interface DataType {
    key: string;
    no: number;
    openTime: string;
    turnNum: string;
    openNum: string[];
    detail: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no",
        render: (no) => no++,
    },
    {
        title: "Ngày xổ",
        dataIndex: "openTime",
        key: "openTime",
        render: (_, { openTime }) => (
            <>
                <Badge
                    size="default"
                    count={
                        ("0" + openTime.getDate()).slice(-2) +
                        "/" +
                        ("0" + (openTime.getMonth() + 1)).slice(-2)
                    }
                    style={{
                        backgroundColor: "#52c41a",
                    }}
                />
            </>
        ),
    },
    {
        title: "Lượt xổ",
        dataIndex: "turnNum",
        key: "turnNum",
    },
    {
        title: "Kết quả",
        dataIndex: "openNum",
        key: "openNum",
        render: (_, { openNum }) => (
            <>
                {openNum?.split(",").map((item, i) => {
                    return (
                        <span style={openNum_styles} key={i}>
                            <strong>{item}</strong>
                        </span>
                    );
                })}
            </>
        ),
    },
    {
        title: "Chi tiết",
        dataIndex: "detail",
        key: "detail",
        render: (_, { detail }) => (
            <>
                <OpenModal detail={detail} />
            </>
        ),
    },
];

export default columns;
