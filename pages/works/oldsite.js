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
  <Layout title="Old Site">
    <Container>
      <Title>
        My old website <Badge>Feb 2021</Badge>
      </Title>
      <P>
        I created this website in Feb, 2021. It&apos;s my first complete website.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://soffwolf.github.io/TungWebsite/">
            soffwolf.github.io/TungWebsite/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
