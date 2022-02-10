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
  <Layout title="Racklet">
    <Container>
      <Title>
        Racklet <Badge>Jan 2020 -</Badge>
      </Title>
      <P>
        Open Source scale model of Data Centers using commodity compute like Raspberry Pis.
		This is more of a research project. My role was to create a friendly UI for the end-user
		and benchmark the various aspect of Raspberry Pi 3 and 4.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="racklet.io">
            racklet.io{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Cloud computing, a lot of Linux, networking, Web Dev</span>
        </ListItem>
      </List>

   </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
