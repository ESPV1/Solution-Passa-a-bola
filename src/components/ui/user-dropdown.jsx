import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import defaultAvatar from '../../assets/default-avatar.webp';

export default function UserDropdown() {
    const { user, logout, deleteAccount } = useAuth();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fechar dropdown quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        const result = logout();
        if (result.success) {
            setTimeout(() => navigate('/'), 0);
        }
        setIsDropdownOpen(false);
    };

    const handleGoToProfile = () => {
        const profilePath = user?.type === 'player' ? '/player-profile' : '/fan-profile';
        navigate(profilePath);
        setIsDropdownOpen(false);
    };

    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm(
            'Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.'
        );
        
        if (confirmDelete) {
            const result = deleteAccount();
            if (result.success) {
                alert('Conta deletada com sucesso!');
                setTimeout(() => navigate('/'), 0);
            } else {
                alert(result.message || 'Erro ao deletar conta');
            }
        }
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 hover:bg-rose-600 p-2 rounded-lg transition-colors duration-200"
            >
                <img
                    src={user?.profileURL || defaultAvatar}
                    alt={`Foto de perfil de ${user?.name}`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <span className="text-lg font-medium">{user?.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                        <button
                            onClick={handleGoToProfile}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Meu Perfil
                        </button>
                        <hr className="border-gray-200" />
                        <button
                            onClick={handleDeleteAccount}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Deletar Conta
                        </button>
                        <hr className="border-gray-200" />
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sair
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}