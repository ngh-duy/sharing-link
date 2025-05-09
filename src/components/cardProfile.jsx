import React from "react";

const ProfileCard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-purple-600 rounded-b-[50px] px-8 py-6 flex justify-between items-center shadow-md relative z-0">
        <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 text-lg rounded-md hover:bg-purple-100 transition font-semibold">
          Back to Editor
        </button>
        <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 text-lg rounded-md hover:bg-purple-100 transition font-semibold">
          Share Link
        </button>
      </div>

      {/* Card */}
      <div className="flex justify-center  z-10">
        <div className="bg-white rounded-[30px] shadow-2xl p-10 w-[400px] flex flex-col items-center">
          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/300?img=3"
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
          />
          {/* Name + Email */}
          <h2 className="text-2xl font-semibold mt-6">Ben Wright</h2>
          <p className="text-gray-500 text-lg mt-1">ben@example.com</p>

          {/* Buttons */}
          <div className="w-full mt-8 space-y-4">
            <a
              href="#"
              className="flex items-center justify-center bg-black text-white py-3 text-lg rounded-lg hover:bg-gray-900 transition font-medium"
            >
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-red-600 text-white py-3 text-lg rounded-lg hover:bg-red-700 transition font-medium"
            >
              YouTube
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 transition font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
