import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../../../commons/helpers/fetchApi'
import { SubmitProductProps } from './interface'

export const useCreateProduct = () => {
  const [isLoading, setLoading] = useState(false)
  const toast = useToast()

  const submit = async ({
    name,
    description,
    price,
    isHighlight,
    provider,
    image,
    categories,
    sizes,
  }: SubmitProductProps) => {
    try {
      setLoading(true)
      const payload = {
        name,
        description,
        is_highlight: !!isHighlight,
        product_providers: [
          {
            provider_id: provider[0].value,
            api_code: 'BRA#1',
            price,
            product_provider_variations: sizes.map((e) => ({
              variation_id: e.value,
            })),
          },
        ],
        images: [{ url: image }],
      }
      const response = await fetchAPI.post('products', {
        body: payload,
      })

      toast({
        title: 'Produto criado com sucesso.',
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
      toast({
        title: 'Não foi possível criar o produto.',
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
