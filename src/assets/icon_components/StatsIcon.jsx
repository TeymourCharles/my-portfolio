// MyLogo.jsx

function StatsIcon({ size = 20, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        className={className}>
          <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
          <path d="m19 9-5 5-4-4-3 3"/>
    </svg>

  );
}

export default StatsIcon;
