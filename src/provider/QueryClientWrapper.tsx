'use client'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { FC, ReactNode } from 'react';

interface QueryClientWrapperProps {
  children: ReactNode
}

const QueryClientWrapper: FC<QueryClientWrapperProps> = ( {children}) => {

const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryClientWrapper