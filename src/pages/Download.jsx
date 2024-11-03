// src/pages/Download.jsx
import React from 'react';

export const Download = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">License Information</h2>
        <p className="text-gray-700">
          The ARAN dataset is released under the Creative Commons Attribution-NonCommercial 4.0 
          International License. By downloading this dataset, you agree to:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li>Use the dataset only for research purposes</li>
          <li>Not redistribute the dataset without permission</li>
          <li>Cite our paper in any resulting publications</li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Download Dataset (10GB)
        </a>
      </div>
    </div>
  );
};