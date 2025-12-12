import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function StatisticsCharts() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const chartCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const chartVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.3
      }
    }
  };

  const countryBadgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      y: 10
    },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  const legendItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      x: -20
    },
    visible: (i) => ({ 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    })
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };
  // Color palette matching the image
  const colors = {
    '2014-15': '#FF6B9D', // Light red/pink
    '2015-16': '#4ECDC4', // Light green/teal
    '2016-17': '#FFE66D', // Yellow
    '2017-18': '#FF8C42', // Orange
    '2018-19': '#95E1D3', // Light blue/teal
    '2019-20': '#C7CEEA', // Light purple
    '2020-21': '#A8E6CF', // Light mint
    '2021-22': '#FFD3A5', // Light peach
    '2022-23': '#CAB8FF', // Light lavender
    '2023-24': '#FFAAA5', // Light coral
    '2024-25': '#B8E6B8', // Light green
  };

  // Outgoing data - Total: 91 (from 2014-15 onwards: 89, excluding 2013-14: 2)
  // Calculating percentages: 2014-15: 9, 2015-16: 2, 2016-17: 15, 2017-18: 17, 2018-19: 12, 2019-20: 1, 2020-21: 2, 2021-22: 6, 2022-23: 4, 2023-24: 8, 2024-25: 13
  // Total from 2014: 9+2+15+17+12+1+2+6+4+8+13 = 89
  const outgoingTotal = 89;
  const outgoingData = {
    labels: ['2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
    datasets: [
      {
        data: [
          Math.round((9 / outgoingTotal) * 100),   // 2014-15: 10%
          Math.round((2 / outgoingTotal) * 100),   // 2015-16: 2%
          Math.round((15 / outgoingTotal) * 100),  // 2016-17: 17%
          Math.round((17 / outgoingTotal) * 100),  // 2017-18: 19%
          Math.round((12 / outgoingTotal) * 100),  // 2018-19: 13%
          Math.round((1 / outgoingTotal) * 100),   // 2019-20: 1%
          Math.round((2 / outgoingTotal) * 100),    // 2020-21: 2%
          Math.round((6 / outgoingTotal) * 100),   // 2021-22: 7%
          Math.round((4 / outgoingTotal) * 100),   // 2022-23: 4%
          Math.round((8 / outgoingTotal) * 100),    // 2023-24: 9%
          Math.round((13 / outgoingTotal) * 100),  // 2024-25: 15%
        ],
        backgroundColor: [
          colors['2014-15'],
          colors['2015-16'],
          colors['2016-17'],
          colors['2017-18'],
          colors['2018-19'],
          colors['2019-20'],
          colors['2020-21'],
          colors['2021-22'],
          colors['2022-23'],
          colors['2023-24'],
          colors['2024-25'],
        ],
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverBorderWidth: 4,
      },
    ],
  };

  // Incoming data - Total: 129
  // 2014-15: 11, 2015-16: 8, 2016-17: 24, 2017-18: 28, 2018-19: 21, 2019-20: 3, 2020-21: 2, 2021-22: 2, 2022-23: 1, 2023-24: 9, 2024-25: 20
  const incomingTotal = 129;
  const incomingData = {
    labels: ['2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
    datasets: [
      {
        data: [
          Math.round((11 / incomingTotal) * 100),  // 2014-15: 9%
          Math.round((8 / incomingTotal) * 100),   // 2015-16: 6%
          Math.round((24 / incomingTotal) * 100),  // 2016-17: 19%
          Math.round((28 / incomingTotal) * 100),  // 2017-18: 22%
          Math.round((21 / incomingTotal) * 100),  // 2018-19: 16%
          Math.round((3 / incomingTotal) * 100),   // 2019-20: 2%
          Math.round((2 / incomingTotal) * 100),    // 2020-21: 2%
          Math.round((2 / incomingTotal) * 100),    // 2021-22: 2%
          Math.round((1 / incomingTotal) * 100),    // 2022-23: 1%
          Math.round((9 / incomingTotal) * 100),   // 2023-24: 7%
          Math.round((20 / incomingTotal) * 100),  // 2024-25: 16%
        ],
        backgroundColor: [
          colors['2014-15'],
          colors['2015-16'],
          colors['2016-17'],
          colors['2017-18'],
          colors['2018-19'],
          colors['2019-20'],
          colors['2020-21'],
          colors['2021-22'],
          colors['2022-23'],
          colors['2023-24'],
          colors['2024-25'],
        ],
        borderColor: '#ffffff',
        borderWidth: 3,
        hoverBorderWidth: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We'll create custom legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        }
      },
      datalabels: {
        display: true,
        color: '#ffffff',
        font: {
          weight: 'bold',
          size: 10
        },
        formatter: (value) => {
          return value + '%';
        }
      }
    },
    cutout: '60%', // Makes it a donut chart
  };

  // Country data for each year
  const outgoingCountries = {
    '2014-15': ['Iran', 'Lebanon', 'Oman'],
    '2015-16': ['Germany', 'Iran'],
    '2016-17': ['Germany', 'Nepal', 'Kenya', 'Poland', 'Belgium', 'Czech Republic'],
    '2017-18': ['Poland', 'Vietnam', 'Kazakhstan', 'Turkey', 'Portugal'],
    '2018-19': ['Nepal', 'Germany', 'Thailand', 'Brazil', 'Poland', 'Turkey'],
    '2019-20': ['Turkey'],
    '2020-21': ['Bangladesh'],
    '2021-22': ['Saudi Arabia'],
    '2022-23': ['Various'],
    '2023-24': ['UAE', 'Tanzania', 'Iran', 'Kenya', 'Canada', 'Oman'],
    '2024-25': ['Vietnam', 'Iran', 'Tanzania', 'Brazil', 'Oman', 'Kazakhstan', 'Ghana'],
  };

  const incomingCountries = {
    '2014-15': ['Germany', 'Argentina', 'Tunisia', 'Turkey', 'Croatia', 'Oman', 'Thailand'],
    '2015-16': ['USA', 'Croatia', 'Belarus', 'Norway', 'Hungary', 'Germany'],
    '2016-17': ['UK', 'Spain', 'Indonesia', 'Greece', 'Kenya', 'Czech Republic', 'Vietnam', 'Saudi Arabia', 'Poland', 'Belgium', 'Thailand', 'Slovak Republic', 'Colombia'],
    '2017-18': ['Germany', 'Tunisia', 'Nepal', 'Norway', 'Oman', 'Indonesia', 'Nigeria', 'Poland', 'Turkey', 'Slovakia', 'Belarus', 'Austria', 'Belgium', 'Vietnam', 'Ireland', 'Hungary'],
    '2018-19': ['Spain', 'Argentina', 'Brazil', 'Czech Republic', 'Iran', 'Poland', 'Tunisia', 'Thailand', 'Colombia', 'Germany', 'UK', 'Serbia', 'Turkey'],
    '2019-20': ['Bolivia', 'Colombia', 'Peru'],
    '2020-21': ['Bangladesh', 'Yemen'],
    '2021-22': ['Vietnam', 'Ghana'],
    '2022-23': ['Iran'],
    '2023-24': ['Tunisia', 'Ghana', 'Tanzania', 'Iran', 'Palestine', 'Belarus'],
    '2024-25': ['Mexico', 'Canada', 'Austria', 'Norway', 'Czech Republic', 'Palestine', 'Tunisia', 'Jordan', 'Spain', 'Iran', 'Bangladesh'],
  };

  // Legend items - starting from 2014-15
  const legendItems = [
    { year: '2014-15', color: colors['2014-15'] },
    { year: '2015-16', color: colors['2015-16'] },
    { year: '2016-17', color: colors['2016-17'] },
    { year: '2017-18', color: colors['2017-18'] },
    { year: '2018-19', color: colors['2018-19'] },
    { year: '2019-20', color: colors['2019-20'] },
    { year: '2020-21', color: colors['2020-21'] },
    { year: '2021-22', color: colors['2021-22'] },
    { year: '2022-23', color: colors['2022-23'] },
    { year: '2023-24', color: colors['2023-24'] },
    { year: '2024-25', color: colors['2024-25'] },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white pt-4 sm:pt-6 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Statistics
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our exchange program participation over the years
          </motion.p>
        </motion.div>

        {/* Charts Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8"
        >
          {/* Outgoing Chart */}
          <motion.div
            variants={chartCardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="bg-[#003F68] text-white px-6 py-3 rounded-lg mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold">Outgoing</h3>
            </motion.div>
            <motion.div 
              className="relative h-64 sm:h-80 mb-6"
              variants={chartVariants}
            >
              <Doughnut data={outgoingData} options={chartOptions} plugins={[ChartDataLabels]} />
            </motion.div>
            
            {/* Countries List */}
            <motion.div 
              className="mb-4 bg-gray-50 rounded-lg p-3 max-h-44 overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.h4 
                className="text-xs font-semibold text-[#003F68] mb-2 text-center"
                whileHover={{ scale: 1.05 }}
              >
                Participating Countries:
              </motion.h4>
              <div className="space-y-2">
                {Object.entries(outgoingCountries).map(([year, countries], yearIdx) => (
                  <motion.div 
                    key={year} 
                    className="border-l-2 border-[#003F68]/30 pl-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + yearIdx * 0.05 }}
                  >
                    <p className="text-xs font-semibold text-[#003F68] mb-1">{year}:</p>
                    <div className="flex flex-wrap gap-1">
                      {countries.map((country, idx) => (
                        <motion.span 
                          key={idx} 
                          className="text-xs text-gray-700 bg-white px-2 py-0.5 rounded border border-gray-200 cursor-default"
                          custom={idx}
                          variants={countryBadgeVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "#003F68",
                            color: "white",
                            borderColor: "#003F68",
                            transition: { type: "spring", stiffness: 400 }
                          }}
                        >
                          {country}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/testimonials/outgoing"
                  className="inline-flex items-center px-6 py-2.5 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Outgoing
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Incoming Chart */}
          <motion.div
            variants={chartCardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="bg-[#003F68] text-white px-6 py-3 rounded-lg mb-6 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold">Incoming</h3>
            </motion.div>
            <motion.div 
              className="relative h-64 sm:h-80 mb-6"
              variants={chartVariants}
            >
              <Doughnut data={incomingData} options={chartOptions} plugins={[ChartDataLabels]} />
            </motion.div>
            
            {/* Countries List */}
            <motion.div 
              className="mb-4 bg-gray-50 rounded-lg p-3 max-h-44 overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.h4 
                className="text-xs font-semibold text-[#003F68] mb-2 text-center"
                whileHover={{ scale: 1.05 }}
              >
                Participating Countries:
              </motion.h4>
              <div className="space-y-2">
                {Object.entries(incomingCountries).map(([year, countries], yearIdx) => (
                  <motion.div 
                    key={year} 
                    className="border-l-2 border-[#003F68]/30 pl-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + yearIdx * 0.05 }}
                  >
                    <p className="text-xs font-semibold text-[#003F68] mb-1">{year}:</p>
                    <div className="flex flex-wrap gap-1">
                      {countries.map((country, idx) => (
                        <motion.span 
                          key={idx} 
                          className="text-xs text-gray-700 bg-white px-2 py-0.5 rounded border border-gray-200 cursor-default"
                          custom={idx}
                          variants={countryBadgeVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "#003F68",
                            color: "white",
                            borderColor: "#003F68",
                            transition: { type: "spring", stiffness: 400 }
                          }}
                        >
                          {country}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/testimonials/incoming"
                  className="inline-flex items-center px-6 py-2.5 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Incoming
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="bg-white rounded-xl p-6 sm:p-8 shadow-md"
          whileHover={{ 
            boxShadow: "0 20px 40px -10px rgba(0, 63, 104, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h4 
            className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Academic Years
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legendItems.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex items-center space-x-2 cursor-pointer group"
                custom={index}
                variants={legendItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15,
                  y: -3,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ 
                    scale: 1.3,
                    boxShadow: `0 0 10px ${item.color}`,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                />
                <motion.span 
                  className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-[#003F68] transition-colors"
                  whileHover={{ fontWeight: "bold" }}
                >
                  {item.year}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

