import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbQuickRead from '../public/images/works/quickread_eyecatch.png'
import thumbRacklet from '../public/images/works/racklet_eyecatch.png'
import thumbSpotterWeb from '../public/images/works/spotterweb_eyecatch.png'
import thumbSpotterAdmin from '../public/images/works/spotteradmin_eyecatch.png'
import thumbSearch from '../public/images/works/search_eyecatch.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Notable projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section delay={0.1}>
          <WorkGridItem
            id="spotterweb"
            title="Spotter Web"
            thumbnail={thumbSpotterWeb}
          >
            A media-intensive web client for video management systems.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="spotteradmin" thumbnail={thumbSpotterAdmin} title="Spotter Admin">
            An access management web platform for large-complex camera systems.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="search" thumbnail={thumbSearch} title="Forensic Search">
            Computer Vision System to Search and Find Human/Vehicle by Characteristics.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="quickread" title="QuickRead" thumbnail={thumbQuickRead}>
            Enhancing summarizing capability of Google&apos;s Pegasus.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="racklet"
            title="Racklet"
            thumbnail={thumbRacklet}
          >
            Open source scale-model of Data Centers using commodity compute like Raspberry Pis.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

		{/* <Section delay={0.2}>
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
      </SimpleGrid> */}


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
