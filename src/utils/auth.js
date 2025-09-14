export function getSession() {
    try {
        const raw = localStorage.getItem('app_session')
        return raw ? JSON.parse(raw) : null
    } catch {
        return null
    }
}

export function isAuthenticated() {
    const s = getSession()
    return Boolean(s?.isAuthenticated)
}

export function loginSession(user) {
    const session = {
        isAuthenticated: true,
        user,
        loginAt: new Date().toISOString(),
    }
    localStorage.setItem('app_session', JSON.stringify(session))
    return session
}

export function logoutSession() {
    localStorage.removeItem('app_session')
}
