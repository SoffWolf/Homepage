import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/quickread_eyecatch.png'
import thumbWalknote from '../public/images/works/racklet_eyecatch.png'
import thumbFourPainters from '../public/images/works/therapist_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/sac_eyecatch.jpg'
import thumbModeTokyo from '../public/images/works/oldsite_eyecatch.jpg'
import thumbStyly from '../public/images/works/sisweb_eyecatch.jpg'
import thumbVsa from '../public/images/works/vsa_eyecatch.jpg'

const Works = () => (
  <Layout title="">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Notable projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="quickread" title="QuickRead" thumbnail={thumbInkdrop}>
            A web-extension that auto-summaries long text into a few sentences.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="racklet"
            title="Racklet"
            thumbnail={thumbWalknote}
          >
            Open source scale-model of Data Centers using commodity compute like Raspberry Pis.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="therapist"
            title="Therapist chatbot"
            thumbnail={thumbFourPainters}
          >
            A chatbot that you can share happiness and sorrow with.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="sac" thumbnail={thumbMenkiki} title="SAC algorithm implementation in PyTorch">
            My implementation of the state-of-the-art reinforcement learning paper.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Websites I made
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="oldsite"
            thumbnail={thumbModeTokyo}
            title="My old portfolio site"
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sisweb" thumbnail={thumbStyly} title="Website for my sister">
          </WorkGridItem>
        </Section>
      </SimpleGrid>

		<Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Others
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="vsa"
            thumbnail={thumbVsa}
            title="Founder of VSA"
          >
			VSA is short for Vietnamese Students at Aalto.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
        </Section>
      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
