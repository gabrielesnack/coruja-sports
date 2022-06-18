import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from './fetcher'
import { CollaboratorsResponse } from './interface'

export const useCollaborators = () => {
  const { data, error, mutate } = useSWR(
    `employees?category_ids=2`,
    (url: string) => fetcher(url)
  )

  return {
    collaborators: data,
    isLoading: data && !error,
    mutate,
  }
}
