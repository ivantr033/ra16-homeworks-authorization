import { useMemo, type ComponentType } from 'react';
import AccessDenied from '../components/AccessDenied';
import { type WithAuthorizationProps } from '../types';

/**
 * HOC для контроля доступа на основе ролей пользователя.
 * @param WrappedComponent Защищаемый компонент.
 * @param allowedRoles Список разрешённых ролей.
 */
export function withAuthorization<P extends WithAuthorizationProps>(
    WrappedComponent: ComponentType<P>,
    allowedRoles: string[]
) {
    const ComponentWithAuth = (props: P) => {
        const { currentUser } = props;

        // Оптимизируем проверку прав, чтобы избежать лишних вычислений при ререндере
        const hasAccess = useMemo(() => {
            if (!currentUser || !Array.isArray(currentUser.roles)) {
                return false;
            }
            return currentUser.roles.some((role) => allowedRoles.includes(role));
        }, [currentUser]);

        if (!hasAccess) {
            return <AccessDenied />;
        }

        return <WrappedComponent {...props} />;
    };

    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ComponentWithAuth.displayName = `withAuthorization(${displayName})`;

    return ComponentWithAuth;
}
