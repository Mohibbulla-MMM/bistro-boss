import { useState } from "react";
import { FaDollarSign, FaListAlt, FaUsers } from "react-icons/fa";

const AdminState = ({ data }) => {
  const [date] = useState(new Date());
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 shadow text-gray-700">
        <div className="stat bg-purple-200">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl" />
          </div>
          <div className="font-bold ">Revenue</div>
          <div className="stat-value">{data?.revinue.toFixed(2)}</div>
          <div className="stat-desc">{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()} `}</div>
        </div>

        <div className="stat bg-green-200">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl" />
          </div>
          <div className=" ">Menu</div>
          <div className="stat-value">{data && data?.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-red-200">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl" />
          </div>
          <div className=" ">Users</div>
          <div className="stat-value">{data && data?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-yellow-200">
          <div className="stat-figure text-secondary">
            <FaListAlt />
          </div>
          <div className="stat-title text-black">Orders</div>
          <div className="stat-value">{data && data?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminState;
