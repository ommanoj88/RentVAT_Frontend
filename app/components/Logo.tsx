export default function Logo() {
  return (
    <div className="flex items-center">
      <svg
        width="250"
        height="150"
        viewBox="0 0 400 250"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block" // Hide on mobile, show on medium screens and up
      >
        {/* Background */}
        <rect width="100%" height="100%" fill="none" />

        {/* Brand Text */}
        <text 
          x="50%" 
          y="35%" 
          fontFamily="Arial, sans-serif" 
          fontSize="70" 
          fontWeight="bold" 
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <tspan fill="#FF6347">Rent</tspan>
          <tspan fill="#4682B4">VAT</tspan>
        </text>
        <text 
          x="50%" 
          y="60%" 
          fontFamily="Arial, sans-serif" 
          fontSize="30" 
          fill="#D4CFC5"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Rent Smarter, Live Better
        </text>
      </svg>

      {/* Mobile version of logo */}
      <svg
        width="100"
        height="40"
        viewBox="0 0 400 250"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden" // Show only on mobile
      >
        {/* Background */}
        <rect width="100%" height="100%" fill="none" />

        {/* Brand Text */}
        <text 
          x="50%" 
          y="35%" 
          fontFamily="Arial, sans-serif" 
          fontSize="70" 
          fontWeight="bold" 
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <tspan fill="#FF6347">Rent</tspan>
          <tspan fill="#4682B4">VAT</tspan>
        </text>
        <text 
          x="50%" 
          y="60%" 
          fontFamily="Arial, sans-serif" 
          fontSize="30" 
          fill="#D4CFC5"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Rent Smarter, Live Better
        </text>
      </svg>
    </div>
  );
}