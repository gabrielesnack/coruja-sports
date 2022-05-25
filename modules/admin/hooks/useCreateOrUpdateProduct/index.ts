import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { SubmitProductProps } from './interface'

export const useCreateOrUpdateProduct = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({
    id,
    name,
    description,
    price,
    isHighlight,
    provider,
    image,
    categories,
    sizes,
  }: SubmitProductProps) => {
    const isUpdating = !!id

    try {
      setLoading(true)

      const payload = {
        id,
        name,
        description,
        is_highlight: !!isHighlight,
        product_providers: [
          {
            provider_id: provider.value,
            api_code: 'BRA#1',
            price,
            product_provider_variations: sizes.map((e) => ({
              variation_id: e.value,
            })),
          },
        ],
        images: [{ url: image }],
      }

      const method = isUpdating ? 'put' : 'post'
      const url = isUpdating ? `products/${id}` : 'products'

      const response = await fetchAPI[method](url, {
        body: payload,
      })

      const title = isUpdating
        ? 'Produto atualizado com sucesso'
        : 'Produto criado com sucesso.'

      toast({
        title,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      setLoading(false)

      return { ok: true, ...response }
    } catch (err) {
      setLoading(false)
      const title = isUpdating
        ? 'Não foi possível atualizar o produto'
        : 'Não foi possível criar o produto.'

      toast({
        title,
        description:
          'Tente novamente mais tarde ou entre em contato com a nossa equipe.',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
        variant: 'left-accent',
      })

      return { ok: false }
    }
  }

  return {
    submit,
    isLoading,
  }
}
