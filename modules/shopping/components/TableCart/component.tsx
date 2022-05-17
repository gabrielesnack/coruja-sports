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
} from '@chakra-ui/react'

import { toCurrencyBRL } from '../../../commons/helpers/currency'
import { useCartContext } from '../../context/CartContext'

export const TableCart = () => {
  const { items, update } = useCartContext()

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
          </Tr>
        </Thead>
        <Tbody>
          {items.map(({ item, total }) => (
            <Tr key={`item-${item.name}`}>
              <Td>
                <Box w="64px" h="64px">
                  <Image src="/camiseta.jpeg" alt="camiseta" />
                </Box>
              </Td>
              <Td>{item.name}</Td>
              <Td>
                <Select
                  variant="flushed"
                  defaultValue={total}
                  onChange={(e) => update(item.id, Number(e.target.value))}
                >
                  {maxOptions.map((e, idx) => {
                    return (
                      <option
                        key={`quantidade-${idx + 1}`}
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
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
