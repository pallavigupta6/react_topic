import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    alert(`Email: ${emailRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" ref={emailRef} required />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
