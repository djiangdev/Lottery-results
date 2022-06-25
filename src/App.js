import "antd/dist/antd.min.css";
import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import qs from "qs";
import Columns from "./Columns";

let dataSource: DataType[] = [];

function App() {
    const [loading, setLoading] = useState(false);
    const [nextPageSize, changePageSize] = useState(false);
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 10,
        gameCode: "st45g",
    });

    useEffect(() => {
        changePageSize(true);

        if (nextPageSize) {
            setLoading(true);
            const getData = () => {
                fetch(
                    `https://sodo678.com/api/front/open/lottery/history/high/page?${qs.stringify(
                        pagination
                    )}`
                )
                    .then((res) => res.json())
                    .then((json) => {
                        setLoading(false);
                        dataSource = json.rows?.map((item, i) => {
                            i = i + 1;
                            return {
                                key: i,
                                no: i++,
                                turnNum: item.turnNum,
                                openNum: item.openNum,
                                openTime: new Date(item.openTime),
                                detail: `${item.openTime}|${item.turnNum}|${item.detail}`,
                            };
                        });
                    });
            };

            getData({ pagination });
        }
    }, [pagination, nextPageSize]);

    const onChangePageSize = (size, event) => {
        setPagination({
            ...pagination,
            pageSize: size,
        });
    };

    return (
        <div className="App">
            <h1>Siêu Tốc 45 Giây | Lịch sử</h1>

            <Button onClick={(e) => onChangePageSize(10, e)}>10 Lượt Xổ</Button>
            <Button onClick={(e) => onChangePageSize(30, e)}>30 Lượt Xổ</Button>
            <Button onClick={(e) => onChangePageSize(50, e)}>50 Lượt Xổ</Button>

            <Table
                dataSource={dataSource}
                columns={Columns}
                pagination={false}
                loading={loading}
            />
        </div>
    );
}

export default App;
