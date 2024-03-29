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
        Racklet <Badge>Jan 2020 - June 2021</Badge> <Badge>@Aalto Uni.</Badge>
      </Title>
      <P>
        Open Source scale model of Data Centers using commodity compute like Raspberry Pis.<br/>
		This is a research project in my first and second bachelor year
    . My role was to create a friendly UI for the end-user
		and benchmark the various aspect of Raspberry Pi 3 and 4. I learnt a lot about cloud native technologies 
    via this project.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://racklet.io">
            racklet.io{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Begin Web Dev, Cloud Computing, lots of Linux, Networking</span>
        </ListItem>
      </List>

   </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
