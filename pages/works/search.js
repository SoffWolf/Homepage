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
  <Layout title="Forensic Search">
    <Container>
      <Title>
        Forensic Search <Badge>May 2022 - November 2022</Badge> <Badge>@Mirasys Oy</Badge>
      </Title>
      <P>
        Search and Find Human/Vehicle by Characteristics <br />
        • Trained a machine learning model capable of classifying individuals and vehicles
        based on visual attributes such as clothing color and gender.<br />
        • Developed an intuitive web interface to facilitate the search process.<br />
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.mirasys.com/person-search">
            mirasys.com/person-search
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Reinforcement Learning with PyTorch, FastAPI, ReactJS</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
