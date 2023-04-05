import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { reportsUrl } from "../../../../../../url";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


function CustomChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");

    axios
      .get(
        `${reportsUrl}/api/Transactions/get-last-month-transactions-per-day`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const transactionsPerDay = response.data.payload.transactionsPerDay;
        const chartData = transactionsPerDay.map((transaction) => {
          return {
            name: transaction.timeframe,
            transactions: transaction.count,
          };
        });
        setData(chartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <React.Fragment>
      {data.length === 0 && <h1>No data is availabale</h1>}
      {data.length !== 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="transactions" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </React.Fragment>
  );
}

export default CustomChart;
