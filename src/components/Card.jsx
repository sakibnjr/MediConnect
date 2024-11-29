import React from "react";

const Card = ({ image, title, description, actions, footer }) => {
  return (
    <div className="card bg-base-100 shadow-lg">
      {/* Image Section */}
      {image && (
        <figure>
          <img src={image} alt={title} className="rounded-t-md" />
        </figure>
      )}

      {/* Content Section */}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {description && <p>{description}</p>}

        {/* Actions Section */}
        {actions && (
          <div className="card-actions justify-end">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`btn ${action.className || "btn-primary"}`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      {footer && <div className="card-footer p-4 bg-base-200">{footer}</div>}
    </div>
  );
};

export default Card;
