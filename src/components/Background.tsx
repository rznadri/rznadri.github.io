import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/50 to-transparent"></div> */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        {/* <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent"></div> */}
      </div>
  );
};

export default Background;