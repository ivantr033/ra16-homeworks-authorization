import { useState } from 'react';
import { withAuthorization } from './hoc/withAuthorization';
import AdminPanel from './components/AdminPanel';
import { type CurrentUser } from './types';
import './App.css';

// Защищаем компонент, разрешая доступ только для роли 'admin'
const AdminPanelWithAuth = withAuthorization(AdminPanel, ['admin']);

export default function App() {
  const [userType, setUserType] = useState<'admin' | 'user' | 'guest'>('admin');

  const getCurrentUser = (): CurrentUser | null => {
    if (userType === 'admin') return { roles: ['admin', 'user'] };
    if (userType === 'user') return { roles: ['user'] };
    return null;
  };

  return (
    <div className="app-container">
      <h2>Контроль доступа (HOC)</h2>

      <div className="role-controls">
        <button
          className={`role-btn ${userType === 'admin' ? 'active' : ''}`}
          onClick={() => setUserType('admin')}
        >
          Админ (admin)
        </button>
        <button
          className={`role-btn ${userType === 'user' ? 'active' : ''}`}
          onClick={() => setUserType('user')}
        >
          Юзер (user)
        </button>
        <button
          className={`role-btn ${userType === 'guest' ? 'active' : ''}`}
          onClick={() => setUserType('guest')}
        >
          Гость (null)
        </button>
      </div>

      <AdminPanelWithAuth currentUser={getCurrentUser()} />
    </div>
  );
}
