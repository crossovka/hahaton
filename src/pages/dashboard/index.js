import React, { useState } from 'react';
import styles from './dashboard.module.scss';

function Dashboard() {
  const [selectedClinic, setSelectedClinic] = useState('');

  const handleSelectChange = (event) => {
    setSelectedClinic(event.target.value);
  };

  const clinics = [
    {
      id: 'clinic1',
      name: 'Clinic 1',
      positions: ['', ''],
      statuses: ['Профицит', 'Inactive'],
    },
    {
      id: 'clinic2',
      name: 'Clinic 2',
      positions: ['Position 3', 'Position 4'],
      statuses: ['Active', 'Inactive'],
    },
    {
      id: 'clinic3',
      name: 'Clinic 3',
      positions: ['Position 5', 'Position 6'],
      statuses: ['Active', 'Inactive'],
    },
  ];

  const renderTable = () => {
    const selectedClinicData = clinics.find((clinic) => clinic.id === selectedClinic);

    if (selectedClinicData) {
      return (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Position</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {selectedClinicData.positions.map((position, index) => (
              <tr key={index}>
                <td>{position}</td>
                <td>{selectedClinicData.statuses[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return null;
  };

  return (
    <div className={styles.__container}>
      <select value={selectedClinic} onChange={handleSelectChange}>
        <option value="">Select a clinic</option>
        {clinics.map((clinic) => (
          <option key={clinic.id} value={clinic.id}>
            {clinic.name}
          </option>
        ))}
      </select>
      {renderTable()}
    </div>
  );
}

export default Dashboard;