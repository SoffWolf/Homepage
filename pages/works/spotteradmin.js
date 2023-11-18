import {
  Container,
  Link,
  List,
  ListItem,
  Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Spotter Admin">
    <Container>
      <Title>
        Spotter Admin <Badge>March 2023 - December 2023</Badge> <Badge>@Mirasys Oy</Badge>
      </Title>
      <P>
        Application for Users and Devices Management for SpotterWeb<br/> 
        • Implemented a web application focused on administering user access and device
        permissions within extensive camera systems.<br/>
        • Engineered a suite of microservices to manage intricate data relationships.<br/>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link>
            Unfortunately, this website is not available to public.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, TailwindCSS, Docker, Kubernetes</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
