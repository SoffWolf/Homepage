import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout>
    <Container>
      <Title>
        Therapist chatbot<Badge>2021</Badge>
      </Title>
      <P>
        We integrate the Facebook&apos;s sentimental chatbot with our own implementation of the depression,
		suicidal, self-harm handling module to take over when the user&apos;s texts have those tendency.
		The latter module was build using Rasa. We hosted the model on Google Cloud to serve the users but have to 
		take it down due to the bills.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repo</Meta>
          <Link href="https://github.com/SoffWolf/Therapist-bot">
            Therapist chatbot
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, Rasa, PyTorch, GCP</span>
        </ListItem>
      </List>


    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
