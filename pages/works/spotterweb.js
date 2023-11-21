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
  <Layout title="Spotter Web">
    <Container>
      <Title>
        Spotter Web <Badge>March 2022 - March 2023</Badge> <Badge>@Mirasys Oy</Badge>
      </Title>
      <P>
        A robust web application that can handle media-heavy load from multiple live video streams. <br/>
        • The front-end of the application was written in ReactJS. <br/>
        • The back-end of the application comprises of multiple microservices written in NestJS and .NET.
        We deployed everything to Azure Cloud Service, with Docker and Kubernetes.
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
          <span>ReactJS, TailwindCSS, NestJS, .NET, Docker, Kubernetes</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
