import { Heading, List, ListItem } from '@chakra-ui/react'
import { FooterListProps } from './inteface'

function FooterList({ title, items }: FooterListProps) {
  return (
    <List mr="1rem">
      <Heading size="lg" color="whiteAlpha.900">
        {title}
      </Heading>
      {items.map((item, idx) => (
        <ListItem key={idx} fontSize="md" color="whiteAlpha.800">
          {item}
        </ListItem>
      ))}
    </List>
  )
}

export default FooterList
