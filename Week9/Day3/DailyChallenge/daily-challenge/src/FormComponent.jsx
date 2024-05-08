import React, { useState } from 'react';

function FormComponent({ formData, handleChange }) {
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Set the submitted data state with the form data
        setSubmittedData(formData);
    
        const formDataEntries = Object.entries(formData);
        const queryParams = new URLSearchParams();
        
        // Iterate over the form data entries and add them to the URLSearchParams
        formDataEntries.forEach(([key, value]) => {
            if (typeof value === 'boolean') {
                // For checkboxes, add only if checked
                if (value) {
                    queryParams.append(key, 'on');
                }
            } else {
                queryParams.append(key, value);
            }
        });
    
        // Construct the URL with query parameters
        const url = `http://localhost:5173/?${queryParams.toString()}`;
    
        // Redirect to the URL
        window.location.href = url;
    };

    return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
        <label>
            First Name:
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            />
        </label>
        <br />
        <label>
            Last Name:
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
        </label>
        <br />
        <label>
            Age:
            <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            />
        </label>
        <br />
        <label>
            Gender:
            <label>
            Male
            <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
            />
            </label>
            <label>
            Female
            <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
            />
            </label>
        </label>
        <br />
        <label>
            Destination:
            <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            >
            <option value="">--Please choose a destination--</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Sydney">Sydney</option>
            </select>
        </label>
        <br />
        <label>
            Dietary Restrictions:
            <label>
            Nuts Free
            <input
                type="checkbox"
                name="nutsFree"
                checked={formData.nutsFree}
                onChange={handleChange}
            />
            </label>
            <label>
            Lactose Free
            <input
                type="checkbox"
                name="lactoseFree"
                checked={formData.lactoseFree}
                onChange={handleChange}
            />
            </label>
            <label>
            Vegan
            <input
                type="checkbox"
                name="vegan"
                checked={formData.vegan}
                onChange={handleChange}
            />
            </label>
        </label>
        <button type="submit">Submit</button>
        </form>
        {submittedData && (
            <div className="submitted-data">
                    <h2>Submitted Data:</h2>
                    <p>Your name: {submittedData.firstName} {submittedData.lastName}</p>
                    <p>Your age: {submittedData.age}</p>
                    <p>Your gender: {submittedData.gender}</p>
                    <p>Your destination: {submittedData.destination}</p>
                    <p>Your dietary restrictions:</p>
                    <ul>
                        {submittedData.nutsFree && <li>Nuts Free</li>}
                        {submittedData.lactoseFree && <li>Lactose Free</li>}
                        {submittedData.vegan && <li>Vegan</li>}
                    </ul>
            </div>
        )}
        </div>
    ) ;
}

export default FormComponent;
