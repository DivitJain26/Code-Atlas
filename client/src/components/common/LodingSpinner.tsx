import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center text-gray-900">
            <div className="text-center">
                {/* Spinner */}
                <div className="inline-block animate-spin rounded-full h-14 w-14 border-4 border-gray-900 border-t-transparent mb-6"></div>

                {/* Text */}
                <h3 className="text-xl font-semibold mb-2">Loading CodeAtlas...</h3>
                <p className="text-gray-600">Please wait while we set things up</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;