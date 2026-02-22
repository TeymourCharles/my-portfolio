import { useState } from "react";

function ProjectCard ({ img, name, description, techStack = [], link, githubLink, gallery = [] }) {
    const [showModal, setShowModal] = useState(false);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const openGallery = () => {
        setShowGalleryModal(true);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setShowGalleryModal(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    // Limit description to first 15 words
    const limitWordsTitle = (text, limit = 15) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };
    const limitWords = (text, limit = 15) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    return (
        <>
            <div className="flex flex-col hover:-translate-y-1 hover:shadow-lg bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                
                <div className="mt-auto p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {limitWordsTitle(name, 3)}
                    </h3>
                    
                    {/* Limited Description with "Read more" */}
                    <div className="mb-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                            {limitWords(description, 15)}
                        </p>
                        <button 
                            onClick={openGallery}
                            className="text-blue-500 dark:text-blue-400 text-sm font-medium hover:underline"
                        >
                            Read more & View Gallery →
                        </button>
                    </div>
                    
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

            {/* Link Protection Modal */}
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

            {/* Gallery Modal */}
            {showGalleryModal && (
                <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={closeGallery}
                >
                    <div 
                        className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-neutral-800">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {name}
                                </h2>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {techStack.map((item, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button 
                                onClick={closeGallery}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                            {/* Image Gallery */}
                            {gallery && gallery.length > 0 && (
                                <div className="relative bg-gray-100 dark:bg-neutral-800">
                                    <img 
                                        src={gallery[currentImageIndex]} 
                                        alt={`${name} screenshot ${currentImageIndex + 1}`}
                                        className="w-full h-auto max-h-[400px] object-contain"
                                    />
                                    
                                    {/* Navigation Buttons */}
                                    {gallery.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-neutral-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
                                            >
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-neutral-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
                                            >
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                            
                                            {/* Image Counter */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                                                {currentImageIndex + 1} / {gallery.length}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Thumbnail Navigation */}
                            {gallery && gallery.length > 1 && (
                                <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50 dark:bg-neutral-800/50">
                                    {gallery.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                                currentImageIndex === index 
                                                    ? 'border-blue-500 ring-2 ring-blue-500/50' 
                                                    : 'border-gray-300 dark:border-neutral-600 hover:border-blue-400'
                                            }`}
                                        >
                                            <img 
                                                src={image} 
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Full Description */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    About This Project
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                                    {description}
                                </p>
                            </div>

                            {/* Action Buttons in Modal */}
                            <div className="p-6 pt-0 flex gap-3">
                                {link && (
                                    <a 
                                        href={link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                                    >
                                        View Live Demo
                                    </a>
                                )}
                                {githubLink && (
                                    <a 
                                        href={githubLink} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2.5 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-colors"
                                    >
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;