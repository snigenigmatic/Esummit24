"use client"
import React from 'react';
import { Modal } from '@/components/events'; // Import the Modal component

export function ModalGrid() {
  const modalData = [
    {
      title: 'Aarambh',
      description: 'Pitch your groundbreaking ideas and stand a chance to secure $200K in funding!',
      details: (
        <>
          <p><strong>Panelists:</strong> Mekin Maheshwari (ex-CPO, Flipkart), Prashanth Prakash (Managing Partner, Accel India), Ravindra Krishnappa (July Ventures)</p>
          <p><strong>VC Groups:</strong> CoCreate Ventures, Kae Capital, Capital A, Blume, Ideaspring, Accel India, Bold Cap, and Waterbridge</p>
          <p><strong>Prizes:</strong> $200K in funding for top pitches and finalists get all travel and accommodation covered.</p>
          <p><strong>Semi-finals Date:</strong> 19th October</p>
          <p><strong>Venue:</strong> PESU RR Campus</p>
        </>
      ),
    },
    {
      title: 'Best Manager',
      description: 'Competitive challenge testing leadership, decision-making, and managerial skills.',
      details: (
        <>
          <p><strong>Event Theme:</strong> Centered around the legal drama SUITS</p>
          <p><strong>Prize Pool:</strong> Rs.10,000</p>
          <p><strong>Team Size:</strong> 1 person</p>
          <p><strong>Date:</strong> 19th October</p>
        </>
      ),
    },
    {
      title: 'Sync It Up',
      description: 'Team up and pitch innovative product ideas in high-energy rounds!',
      details: (
        <>
          <p><strong>Prize Pool:</strong> Rs.15,000</p>
          <p><strong>Team Size:</strong> 2 members</p>
          <p><strong>Date:</strong> 19th October</p>
        </>
      ),
    },
    {
      title: 'Jeopardy',
      description: 'Solve complex problems in an intellectually demanding format.',
      details: (
        <>
          <p><strong>Prize Pool:</strong> Rs.25,000</p>
          <p><strong>Team Size:</strong> 4 members</p>
          <p><strong>Registration Fee:</strong> Rs.200 per team</p>
          <p><strong>Event Duration:</strong> 2 days (25 teams)</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-mainBlue grid grid-cols-1 sm:grid-cols-2 lg:m-10 lg:mr-10 lg:grid-cols-4 gap-6 p-4">
        {modalData.map((modal, index) => (
          <Modal
            key={index}
            title={modal.title}
            description={modal.description}
            details={modal.details}
          />
        ))}
      </div>
    </div>
  );
}

export default ModalGrid;