import { useContext } from 'react'
import { LoginContext } from '../model/context'

export const useLoginContext = () => useContext(LoginContext)