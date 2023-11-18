import { useRegisterContext } from './useRegisterContext'

export const useGetIsPending = () => {
    const context = useRegisterContext()

    return context 
        ? context.state.status === 'pending'
        : false
}