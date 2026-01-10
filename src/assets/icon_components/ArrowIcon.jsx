// MyLogo.jsx

function ArrowIcon({ size = 20, className = "" }) {
  return (
   <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size}
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        class={`lucide lucide-chevron-right-icon lucide-chevron-right ${className}`}>
            <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}

export default ArrowIcon;
