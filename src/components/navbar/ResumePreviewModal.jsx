import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

function ResumePreviewModal ({ isOpen, close }) {
      
const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setShow(false), 200);
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!show) return null;
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm ${isOpen ? "animate-fade-in" : "animate-fade-out"}`}>

            {/* Modal Box */}
             
                <div className={`relative w-[95%] max-w-4xl h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden ${isOpen ? "animate-scale-in" : "animate-scale-out"}`}>

                {/* Close Button */}
                <button
                    onClick={close}
                    className="absolute bottom-3 right-7 z-10 bg-black/70 text-white
                    rounded-full w-9 h-9 flex items-center justify-center hover:bg-black"
                    aria-label="Close"
                >
                    ✕
                </button>

                {/* Resume Preview */}
                <iframe
                    src="/public/TeymourCharles-Resume.pdf"
                    title="Resume Preview"
                    className="w-full h-full"
                />
                </div>
        </div>
       
    );
}

export default ResumePreviewModal