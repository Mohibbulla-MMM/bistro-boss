import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { PieChart, Pie } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink" , 'purple'];

const AdminHomeChert = ({ chertData }) => {
  // console.log(chertData);
  // bar chart ---------------------------------
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie chart --------------------

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData =
    chertData &&
    chertData?.map((item) => {
      return {
        name: item.category,
        value: item.revenue,
      };
    });
  console.log(pieChartData);
  return (
    <div className="flex lg:flex-row flex-col justify-between ">
      {/* bar chart -------------- */}
      <div className="flex-1">
        <BarChart
          width={500}
          height={300}
          data={chertData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar
            dataKey="quantity"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {chertData &&
              chertData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 8]} />
              ))}
          </Bar>
        </BarChart>
      </div>

      {/* pie chart -------------- */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%" className={`bg-gray-200`}>
          <PieChart width={700} height={700}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={140}
              fill="#000"
              dataKey="value"
            >
              {pieChartData &&
                pieChartData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
            </Pie>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHomeChert;
