import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="QuickRead">
    <Container>
      <Title>
        QuickRead <Badge>Sep 2021 - June 2022</Badge> <Badge>@Aalto Uni.</Badge>
      </Title>
      <P>
        A web extension that can auto-summaries long text into a few sentences. The project has two main parts.
		Part 1 is to build a language model on the summarization task. We will enhance the summarization 
	capability of
		Google&apos;s Pegasus language model by fine-tuning it with the PPO algorithm on the human-feedback data, the same approach used to trained ChatGPT.<br/>
		Part 2 is to launch the model on the internet with a user-friendly UI. The project is currently at
		the end of part 1. We intend to launch the app at the end of May this year.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/SoffWolf/QuickRead">
            github.com/SoffWolf/QuickRead <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Publication</Meta>
          <Link href="https://aaltodoc.aalto.fi/handle/123456789/115301">
            aaltodoc.aalto.fi/handle/123456789/115301<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Chrome, Brave browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PPO, PyTorch, HuggingFace, Flask, Docker, Kubenetes</span>
        </ListItem>
      </List>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
