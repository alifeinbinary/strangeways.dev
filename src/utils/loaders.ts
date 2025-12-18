import { type LoaderFunction, type LoaderFunctionArgs } from 'react-router-dom'
import { portfolio } from '../data/portfolio'

const notFoundError = (statusText: string): Error => {
  const err = new Error('Not Found')
  ;(err as unknown as { status: number }).status = 404
  ;(err as unknown as { statusText: string }).statusText = statusText
  return err
}

export const appLoader: LoaderFunction = () => {
  return {}
}

export const postPageLoader: LoaderFunction = ({
  params,
}: LoaderFunctionArgs) => {
  const id = params.id
  if (!id) {
    throw notFoundError('Missing id')
  }
  const item = portfolio.find((p) => p.id === id)
  if (!item) {
    throw notFoundError(`No portfolio item for id: ${id}`)
  }
  return { item }
}
