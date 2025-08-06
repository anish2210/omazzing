import React from "react";
import { motion } from "framer-motion";
import {
  FaPersonPraying,
  FaSpa,
  FaClock
} from "react-icons/fa6";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyActivitiesPage = () => {
  const progress = 50;

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Meditation (min)",
        data: [15, 10, 14, 6, 24, 8, 13],
        backgroundColor: "#ab4ee1",
        borderRadius: 10,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f19ad2] via-[#ab4ee1] to-[#9743c8] py-10 px-4 text-white flex justify-center">
      <motion.div
        className="w-full max-w-4xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white text-black rounded-xl shadow-lg p-4 text-center">
          <div>
            <FaPersonPraying className="mx-auto text-[#9743c8] text-2xl" />
            <p className="text-xl font-bold">10</p>
            <p className="text-sm">Hours yoga</p>
          </div>
          <div>
            <FaSpa className="mx-auto text-[#9743c8] text-2xl" />
            <p className="text-xl font-bold">16</p>
            <p className="text-sm">Meditation</p>
          </div>
          <div>
            <FaClock className="mx-auto text-[#9743c8] text-2xl" />
            <p className="text-xl font-bold">5 hrs</p>
            <p className="text-sm">Exercise</p>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="bg-white text-black rounded-xl shadow-lg p-6">
          <div className="flex justify-between text-sm text-gray-600 font-semibold mb-2">
            <span>Today yoga time</span>
            <span className="text-[#ab4ee1]">Remaining</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width="160" height="80" viewBox="0 0 200 100">
              <path
                d="M20,100 A80,80 0 1,1 180,100"
                fill="none"
                stroke="#e5e5e5"
                strokeWidth="15"
              />
              <motion.path
                d="M20,100 A80,80 0 1,1 180,100"
                fill="none"
                stroke="#9743c8"
                strokeWidth="15"
                strokeDasharray="251"
                strokeDashoffset={251 - (251 * progress) / 100}
                strokeLinecap="round"
                initial={{ strokeDashoffset: 251 }}
                animate={{ strokeDashoffset: 251 - (251 * progress) / 100 }}
                transition={{ duration: 1 }}
              />
            </svg>
            <div className="text-center -mt-2">
              <p className="text-2xl font-bold">{progress}%</p>
              <p className="text-sm text-gray-600">Total time: 30 min</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white text-black rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">Progress</p>
              <h4 className="font-semibold text-lg">Meditation progress</h4>
            </div>
            <select className="bg-[#f19ad2] text-white px-2 py-1 rounded text-sm">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <Bar data={barData} options={barOptions} />
        </div>
      </motion.div>
    </div>
  );
};

export default MyActivitiesPage;
