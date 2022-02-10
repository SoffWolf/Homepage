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
  <Layout title="Sister's web">
    <Container>
      <Title>
        Chi&apos;s Portfolio website <Badge>Nov 2021</Badge>
      </Title>
      <P>
        I made this website as a birthday present for my sister.
		We will fill it when she starts looking for a job.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://soffwolf.github.io/ChiPortfolio/">
            soffwolf.github.io/ChiPortfolio/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
