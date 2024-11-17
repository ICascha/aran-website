import React, { useState } from 'react';

const initialData = [
  {
    rank: 1,
    method: "Densenet121",
    authors: "Mohammedkhan et al.",
    heightMAE: 2.54,
    weightMAE: 1.51,
    waistMAE: 2.53,
    headMAE: 1.52
  },
  {
    rank: 2,
    method: "Linear baseline",
    authors: "Mohammedkhan et al.", 
    heightMAE: 4.89,
    weightMAE: 2.20,
    waistMAE: 3.00,
    headMAE: 1.66
  }
 ];

export const Leaderboard = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return (
        <span className={`inline-block ml-1 transform ${
          sortConfig.direction === 'desc' ? 'rotate-180' : ''
        }`}>
          ↑
        </span>
      );
    }
    return '↕';
  };

  const renderSortableHeader = (key, label) => (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
      onClick={() => sortData(key)}
    >
      <div className="flex items-center gap-1">
        <span>{label}</span>
        <span className="text-gray-400 ml-1">{getSortIndicator(key)}</span>
      </div>
    </th>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Leaderboard</h2>
      <div className="bg-white shadow overflow-hidden rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Authors
              </th>
              {renderSortableHeader('heightMAE', 'MAE Height (cm)')}
              {renderSortableHeader('weightMAE', 'MAE Weight (kg)')}
              {renderSortableHeader('waistMAE', 'MAE Waist (cm)')}
              {renderSortableHeader('headMAE', 'MAE Head Circ. (cm)')}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((entry) => (
              <tr key={entry.rank} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {entry.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    {entry.method}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.authors}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.heightMAE.toFixed(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.weightMAE.toFixed(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.waistMAE.toFixed(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.headMAE.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};