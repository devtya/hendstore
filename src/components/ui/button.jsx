// src/components/ui/Button.jsx
export const Button = ({ children, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ${className}`}
      >
        {children}
      </button>
    );
  };
  