export default function Logo() {
  return (
    <svg
      width="250"
      height="150"
      viewBox="0 0 400 250"
      xmlns="http://www.w3.org/2000/svg"
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
  );
}
