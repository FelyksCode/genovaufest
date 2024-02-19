import React, { useState, useEffect } from 'react';

const Alert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowAlert(window.innerWidth <= 768); // Adjust the width as per your requirement
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dismissAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">For better experience, please switch to a larger device.</p>
            <button onClick={dismissAlert} className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
