import { useState, useCallback } from 'react'

export default function useAuthModel() {
    const [user, setUser] = useState<{ phone: string, username: string } | null>(null)

    const signin = useCallback((account, password) => {
        // signin implementation
        // setUser(user from signin API)
        setUser({ phone: '18608915221', username: '卢俊星' })
    }, [])

    const signout = useCallback(() => {
        // signout implementation
        // setUser(null)
        setUser(null)
    }, [])

    return {
        user,
        signin,
        signout
    }
}