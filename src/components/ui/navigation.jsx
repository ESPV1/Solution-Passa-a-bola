import { Link } from 'react-router-dom';

const navigationLinks = [
    { to: '/', label: 'Home' },
    { to: '/player-list', label: 'Jogadoras' },
    { to: '/team-list', label: 'Times' },
    { to: '/courts', label: 'Quadras' }
];

export default function Navigation() {
    return (
        <ul className="flex gap-6 text-lg">
            {navigationLinks.map(({ to, label }) => (
                <li key={to}>
                    <Link 
                        to={to} 
                        className="hover:text-rose-200 transition-colors duration-200"
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}