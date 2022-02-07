import {
  Container,
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
        Soft Actor Critic Pytorch implementation
      </Title>
      <P>
        We digged deep into this reinforcement learning paper and write the implementation for it in PyTorch.
		We also implement the different state-of-the-art reinforcement learning algorithms before this, TD3 and PPO.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PyTorch, numpy, pandas</span>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link href="https://github.com/SoffWolf/Soft-Actor-Critic-Pytorch-implementation">
            Soft-Actor-Critic-Pytorch-implementation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
         </List>

        </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
