import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout>
    <Container>
      <Title>
        Vietnamese Students at Aalto Community <Badge>Summer 2020 -</Badge>
      </Title>
      <P>
        I created this community on summer 2020. The community grows strong after 2 years in operation with more than 300 members (including alumni). 
		This project is my attempt to learn skills outside the technical world.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.facebook.com/vietnamesestudentsatAalto">
            Facebook page{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
