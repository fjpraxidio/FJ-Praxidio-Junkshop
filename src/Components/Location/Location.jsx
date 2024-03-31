import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div>
      <div className="location container">
        <div>
          {/* Column for City 1 */}
          <div>
            <h2>PASAY CITY</h2>
            <h4>2499 Taft Avenue, Brgy 90, Zone 9, Pasay City</h4>
            {/* Embed Google Maps for City 1 */}
            <div className="map-container">
              <iframe
                title="Pasay City Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6576427335854!2d120.9966122!3d14.5447061!2m3!1f0!2f0!3f0!3m2!1i1200!2i900!4f13.1!3m3!1m2!1s0x3397c942b5402873%3A0x5791ae9dadf32dac!2sFJ%20PRAXIDIO%20JUNKSHOP!5e0!3m2!1sen!2sus!4v1647145305737!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Column for City 2 */}
          <div>
            <h2>QUEZON CITY</h2>
            <h4>Project 4, 104 Kalantiaw St. Brgy Masagana, Quezon City</h4>
            {/* Embed Google Maps for City 2 */}
            <div className="map-container">
              <iframe
                title="Quezon City Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4583399947883!2d121.0658511!3d14.6188202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b78d53cd84cb%3A0x68ffbec4f2b3ca72!2sFJ%20Junk%20Shop!5e0!3m2!1sen!2sus!4v1647145305737!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Column for City 3 */}
          <div>
            <h2>ANTIPOLO CITY</h2>
            <h4>Brgy Dalig Uno, Manuel L. Quezon Ext, Antipolo, Rizal</h4>
            {/* Embed Google Maps for City 3 */}
            <div className="map-container">
            <iframe
                title="Antipolo City Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.85570625063!2d121.1862459!3d14.5619709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c0b8e1539333%3A0xb47b064fc723e1b8!2sF.J.%20Praxidio%20Trading%20Junk%20Shop!5e0!3m2!1sen!2sus!4v1647145305737!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
