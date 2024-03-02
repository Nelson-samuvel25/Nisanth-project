import React, { useState, useEffect } from 'react';

const UserUpdateForm = ({ initialUserData, onSubmit, fetchUser }) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (!initialUserData) {
          const response = await fetchUser(); // Fetch user data if not provided
          setFormData(response.data);
        } else {
          setFormData(initialUserData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchUser, initialUserData]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await onSubmit(formData); // Submit updated data
      console.log('User updated successfully:', response.data);
      // Handle successful update (e.g., display message)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-md px-4 py-8 bg-white rounded-md shadow-sm">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading user data...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Add more fields as needed (e.g., password, phone number) */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading} // Disable button while loading
            >
            Update form
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserUpdateForm;