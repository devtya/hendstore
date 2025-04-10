export function Card({ children, className }) {
    return (
      <div className={`bg-white dark:bg-gray-900 rounded-xl p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return (
      <div className={`text-gray-800 dark:text-white ${className}`}>
        {children}
      </div>
    );
  }
  