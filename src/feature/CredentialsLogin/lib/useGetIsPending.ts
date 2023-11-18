import { useLoginContext } from './useLoginContext'

export const useGetIsPending = () => {
    const context = useLoginContext()

    return context 
        ? context.state.status === 'pending'
        : false
}