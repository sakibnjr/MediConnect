import React, { useState } from "react";

const Form = ({ onSubmit, children, className }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit().finally(() => setIsSubmitting(false));
  };

  const handleReset = () => {
    // Additional logic can be added here if needed.
    document.getElementById("form").reset(); // Reset the form fields.
  };

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
    >
      {children}

      {/* Submit and Reset Buttons */}
      <div className="flex justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn btn-primary ${isSubmitting ? "opacity-50" : ""}`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {/* Custom Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
