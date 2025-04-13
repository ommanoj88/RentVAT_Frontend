import React from "react";

export default function SettingsTab() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Account Settings</h2>

      <div className="space-y-6">
        {/* Notifications Section */}
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-700 mb-3">Notifications</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-gray-600">Email notifications</label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-600">SMS notifications</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-600">Marketing emails</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-700 mb-3">Security</h3>
          <div className="space-y-3">
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Change Password
            </button>
            <div className="block w-full h-px bg-gray-200"></div>
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Two-factor Authentication
            </button>
            <div className="block w-full h-px bg-gray-200"></div>
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Login History
            </button>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-700 mb-3">Privacy</h3>
          <div className="space-y-3">
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Privacy Settings
            </button>
            <div className="block w-full h-px bg-gray-200"></div>
            <button className="text-gray-700 hover:text-gray-900 font-medium">
              Data & Personalization
            </button>
          </div>
        </div>

        {/* Danger Zone Section */}
        <div className="border rounded-lg p-4 bg-red-50">
          <h3 className="font-medium text-red-700 mb-3">Danger Zone</h3>
          <button className="text-red-700 hover:text-red-900 font-medium">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}