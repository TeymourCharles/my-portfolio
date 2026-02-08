import { useState } from "react";

function ProjectCard ({ img, name, description, techStack = [], link, githubLink  }) {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleLinkClick = (e, type) => {
        if ((type === 'live' && !link) || (type === 'github' && !githubLink)) {
            e.preventDefault();
            setModalType(type);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="flex flex-col hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                
                <div className="mt-auto p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((item, index) => (
                            <span key={index} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                {item}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-3">
                        <a 
                            href={link || "#"} 
                            target={link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            onClick={(e) => handleLinkClick(e, 'live')}
                            className={`flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium transition-opacity ${
                                link 
                                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90"
                                    : "bg-gray-400 dark:bg-gray-600 text-gray-200 dark:text-gray-400 hover:opacity-80"
                            }`}
                        >
                            View Live
                        </a>
                        <a 
                            href={githubLink || "#"} 
                            target={githubLink ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            onClick={(e) => handleLinkClick(e, 'github')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                githubLink
                                    ? "border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800"
                                    : "border border-gray-300 dark:border-neutral-700 text-gray-400 dark:text-gray-600 hover:bg-gray-100 dark:hover:bg-neutral-700"
                            }`}
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Simple Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-sm w-full p-6 border border-gray-200 dark:border-neutral-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {modalType === 'live' ? 'Coming Soon!' : 'Private Repository'}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {modalType === 'live' 
                                    ? 'This project is still under development. The live demo will be available soon!'
                                    : 'This project is protected for company privacy. The source code cannot be shared publicly.'
                                }
                            </p>
                        </div>

                        <button
                            onClick={closeModal}
                            className="w-full px-4 py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                            Understood
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;