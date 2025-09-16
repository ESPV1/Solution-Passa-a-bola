import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Navigation from './navigation';
import AuthButtons from './auth-buttons';
import UserDropdown from './user-dropdown';

export default function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <header className="w-full px-4 py-2 grid [grid-template-columns:0.5fr_1fr] items-center bg-rose-500 text-white">
            <h2 className="text-4xl">Passa a bola</h2>
            <nav className="flex items-center justify-around">
                <Navigation />
                {!isAuthenticated() ? <AuthButtons /> : <UserDropdown />}
            </nav>
        </header>
    );
}