import React, { useState } from 'react';

const Form = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
  });

  // State to manage form submission status
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Make a POST request using fetch
      const response = await fetch('http://localhost:5000/requirements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to submit requirement');
      }

      // If successful, show success message
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        requirement: '',
      });
    } catch (err) {
      // Handle error
      setError(err.message || 'Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Submit Your Requirement</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Your requirement has been submitted successfully!</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="requirement">Requirement:</label>
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Requirement'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
