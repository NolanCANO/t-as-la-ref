import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="relative w-screen h-16 bg-blue-300 flex items-center justify-between px-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-red-600 h-3/4 w-48 flex items-center justify-center rounded-lg">
                <h1 className="text-2xl font-bold text-white">T'as la ref</h1>
            </div>

            <button className="w-12 h-12 bg-green-600 rounded-full ml-auto" />
        </div>
    );
};

export default Header;
