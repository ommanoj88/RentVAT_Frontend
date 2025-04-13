import React from "react";

interface ProfileTabProps {
  isEditing: boolean;
  profileData: {
    displayName: string;
    email: string;
    phone: string;
    address: string;
    bio: string;
  };
  setIsEditing: (value: boolean) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleProfileUpdate: () => void;
}

export default function ProfileTab({
  isEditing,
  profileData,
  setIsEditing,
  handleInputChange,
  handleProfileUpdate,
}: ProfileTabProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Profile Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-medium transition"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="displayName"
              value={profileData.displayName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded h-32"
            />
          </div>
          <button
            onClick={handleProfileUpdate}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-gray-600 font-medium">Name</h3>
            <p className="text-gray-800">{profileData.displayName || "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium">Email</h3>
            <p className="text-gray-800">{profileData.email}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium">Phone</h3>
            <p className="text-gray-800">{profileData.phone || "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium">Address</h3>
            <p className="text-gray-800">{profileData.address || "-"}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium">Bio</h3>
            <p className="text-gray-800">{profileData.bio || "-"}</p>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <div className="border rounded-lg divide-y">
          <div className="p-4 flex items-center text-gray-700">
            <div className="mr-4">📦</div>
            <div>
              <p>You listed a new item</p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
          </div>
          <div className="p-4 flex items-center text-gray-700">
            <div className="mr-4">🔍</div>
            <div>
              <p>You searched for "Camera equipment"</p>
              <p className="text-sm text-gray-500">3 days ago</p>
            </div>
          </div>
          <div className="p-4 flex items-center text-gray-700">
            <div className="mr-4">👤</div>
            <div>
              <p>You updated your profile</p>
              <p className="text-sm text-gray-500">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}