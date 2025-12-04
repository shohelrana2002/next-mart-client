function Logo() {
  return (
    <>
      <svg
        width="180"
        height="50"
        viewBox="0 0 220 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Icon Box */}{" "}
        <rect x="5" y="10" width="30" height="30" rx="6" fill="#2563EB" />
        ```
        {/* Smile Curve */}
        <path
          d="M12 20 C12 14, 28 14, 28 20"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        {/* Eyes */}
        <circle cx="16" cy="24" r="2" fill="white" />
        <circle cx="24" cy="24" r="2" fill="white" />
        {/* Logo Text */}
        <text
          x="50"
          y="32"
          fontSize="24"
          fontFamily="Arial, sans-serif"
          fill="#2563EB"
        >
          NextMart
        </text>
      </svg>
    </>
  );
}

export default Logo;
