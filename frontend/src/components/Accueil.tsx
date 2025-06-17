import React from 'react';
import Header from './Header';

const Accueil: React.FC = () => {
    return (
        <div className="h-screen bg-customdark flex flex-col">
            <Header />
            <div className="flex flex-1">
                <div className="bg-blue-200 w-4/6 h-full px-5 py-4 space-y-5">
                    <div className="bg-green-200 w-full h-1/6 rounded-lg p-4 space-x-4 mx-auto flex items-center justify-between">
                        <button className="w-1/6 h-3/4 bg-green-600 rounded-lg">
                            <p className="text-xl font-bold text-white">Créer une partie</p>
                        </button>

                        <input type="text" placeholder="Code partie" className="flex-1 h-2/4 rounded-lg px-4 text-lg" />

                        <button className="w-1/6 h-2/4 bg-green-600 rounded-lg">
                            <p className="text-xl font-bold text-white">Rejoindre</p>
                        </button>
                    </div>
                    <div className="bg-green-200 w-full h-4/5 flex-1 rounded-lg p-2 overflow-auto">
                    </div>
                </div>
                <div className="bg-blue-400 w-2/6 h-full p-2 overflow-auto">
                    Bienvenue sur notre application !
                </div>
            </div>
        </div>
    );
};

export default Accueil;
