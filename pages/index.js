import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoMailSharp,
  IoLogoGithub,
  IoPaperPlaneSharp
} from 'react-icons/io5'

const Home = () => (
  <Layout title="Home">
    <Container>
      <Box
        borderRadius="lg"
        mb={10}
        p={3}
        textAlign="center"
        // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        {/* You can drag to move and scroll to zoom! */}
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box mb={10} flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tung Nguyen
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          {/* <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/tung.jpg"
            alt="Profile image"
          /> */}
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          WHOAMI
        </Heading>
        <Paragraph>
          I am a young programmer with 2 years of experience in the software
          industry. I focus my work largely on Web Technology and Machine
          Learning. Currently doing my Master &apos;s degree at Aalto
          University.
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>

        <BioSection>
          <BioYear>2000</BioYear>
          Born in Da Nang (Đà Nẵng), Vietnam.
        </BioSection>

        <BioSection>
          <BioYear>2019</BioYear>
          Went to Aalto pursuing Bachelor&apos;s Programme in Digital Systems
          and Design
        </BioSection>

        <BioSection>
          <BioYear>2022</BioYear>
          Start working at Mirasys.
          <br />
          Finish my Bachelor&apos;s Degree.
          <br />
          Start my Master&apos;s Programme in Control, Robotics and Autonomous
          Systems
        </BioSection>

        <BioSection>
          <BioYear>2024</BioYear>
          Finish my Master&apos;s study at Aalto.
        </BioSection>
      </Section>

      <Section delay={1}>
        <Heading as="h3" variant="section-title" mb={4}>
          Technical Proficiencies:
        </Heading>
        Here are the core technologies I am working with at the moment:
        <BioSection mt={2}>
          <BioYear>Backend</BioYear>
          NodeJS, NestJS, Relational Database, GraphQL
        </BioSection>
        <BioSection>
          <BioYear>Frontend</BioYear>
          ReactJS, TypeScript, TailwindCSS, Apollo
        </BioSection>
        <BioSection>
          <BioYear>DevOps</BioYear>
          Docker, Kubernetes, CI/CD, Cloud Services
        </BioSection>
        <BioSection>
          <BioYear>Machine Learning</BioYear>
          PyTorch, NumPy, OpenCV, HuggingFace <br/>
          Supervised and Reinforcement methods.
        </BioSection>
        <BioYear>Others</BioYear>
        Microservices Architecture, Agile Practices, Linux, Git, Vim 
      </Section>

      <Box align="center" my={4}>
        <NextLink href="/works">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My notable projects
          </Button>
        </NextLink>
      </Box>
      <Box align="center" my={4}>
        <NextLink href="https://drive.google.com/file/d/1GHtOkDL4sWAY9hFofcYJg8Xx88lSnim-/view?usp=sharing">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My résumé
          </Button>
        </NextLink>
      </Box>

      <Section delay={1.5}>
        <Heading as="h3" variant="section-title">
          For more info
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/soffwolf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @soffwolf
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:tungnguyen21012000@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMailSharp} />}
              >
                tungnguyen21012000@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/soffwolf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoPaperPlaneSharp} />}
              >
                @soffwolf
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
