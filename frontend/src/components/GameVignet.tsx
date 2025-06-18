import React from 'react';

const GameVignet: React.FC = () => {
    return (
        <div className="bg-blue-200 w-full h-full rounded-lg p-4 space-x-4 mx-auto flex items-center justify-between">
            <div className='flex items-center space-x-2'>
                 {/* nom par défault celui de l'utilisateur exemple : Partie de Namiou */}
                <p className="text-xl font-bold">Nom de la partie</p>
                <div className="w-12 h-5 flex items-center justify-center bg-white rounded-lg px-3 py-1">
                    <p className="text-sm text-black text-center">10/10</p>
                </div>

            </div>
            
            <button className="bg-green-600 rounded-lg px-4 py-2">
                <p className="text-white">Rejoindre</p>
            </button>
        </div>
    );
};

export default GameVignet;
