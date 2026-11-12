import { type WithAuthorizationProps } from '../types';

interface AdminPanelProps extends WithAuthorizationProps {
    title?: string;
}

export default function AdminPanel({ title = 'Админская панель', currentUser }: AdminPanelProps) {
    return (
        <div className="admin-panel">
            <h3>{title}</h3>
            <p>Роли пользователя: {currentUser?.roles.join(', ')}</p>
        </div>
    );
}
