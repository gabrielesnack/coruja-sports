import {
  Heading,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Box,
  Image,
  IconButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { EyeIcon, TrashIcon } from '../../../commons/icons'
import { useCartContext } from '../../context/CartContext'

export const TableCart = () => {
  const { items, update, remove } = useCartContext()

  const router = useRouter()

  const maxOptions = new Array(100).fill(1)

  return (
    <TableContainer
      w={['100%', null, null, '70%']}
      bgColor="white"
      borderWidth="1px"
    >
      <Heading
        d={['block', null, null, 'none']}
        my="10"
        textAlign="center"
        fontWeight="semibold"
      >
        Meu Carrinho
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Produto</Th>
            <Th>Quantidade</Th>
            <Th>Preço</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map(({ item, total }) => (
            <Tr key={`item-${item.id}`}>
              <Td>
                <Box w="64px" h="64px">
                  <Image src={item.images[0].url} alt={item.name} />
                </Box>
              </Td>
              <Td>{item.name}</Td>
              <Td>
                <Select
                  variant="flushed"
                  defaultValue={total}
                  onChange={(e) =>
                    update && update(item.id, Number(e.target.value))
                  }
                >
                  {maxOptions.map((_, idx) => {
                    return (
                      <option
                        key={`${item.id}-qtd-${idx + 1}`}
                        value={idx + 1}
                        defaultChecked
                      >
                        {idx + 1} Unidade{idx > 1 ? 's' : ''}
                      </option>
                    )
                  })}
                </Select>
              </Td>
              <Td>{toCurrencyBRL(item.price)}</Td>
              <Td>
                <IconButton
                  color="danger"
                  variant="ghost"
                  aria-label="Remover produto do carrinho"
                  icon={<TrashIcon />}
                  onClick={() => remove && remove(item.id)}
                />
                <IconButton
                  color="info"
                  variant="ghost"
                  aria-label="Visualizar Produto"
                  icon={<EyeIcon />}
                  onClick={() => router.push(`product/${item.id}`)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
