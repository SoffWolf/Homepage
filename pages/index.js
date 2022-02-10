import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoMailSharp, IoLogoInstagram, IoLogoGithub, IoPaperPlaneSharp} from 'react-icons/io5'

const Home = () => (
  <Layout title="Home">
    <Container>
	<Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        You can drag to move and scroll to zoom!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tung Nguyen
          </Heading>
          <p>Aalto&apos;s Undergraduate </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/tung.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Brief me
        </Heading>
        <Paragraph>
		  I am Tung, a final year bachelor&apos;s student at Aalto University. 
		  My degree is in Digital Systems and Design. I focus my study largely 
		  on Machine Learning and Web technologies. I am actively looking for a job right now!
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Da Nang (Đà Nẵng), Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
		  Went to Aalto pursuing Bachelor&apos;s Degree in Digital Systems and Design.
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          I basically finished my bachelor&apos;s degree, attempting to finish 1 year of my Master&apos;s Degree this spring.
        </BioSection>
        <BioSection>
          <BioYear>Near future</BioYear>
          Finish my master&apos;s study at Aalto.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technical stacks:
        </Heading>
		I don&apos;t really know how to order these so I will just put all of them down here.
		The tech I spent more time with will appear first on the lists.
		<BioSection>
          <BioYear>Machine Learning</BioYear>
			PyTorch, HuggingFace, numpy, pandas, matplotlib, Rasa, openCV
        </BioSection>

        <BioSection>
          <BioYear>Web Development</BioYear>
			ReactJS, TailwindCSS, NodeJS, ExpressJS, relational databases, hands-on PostgreSQL and MongoDB
        </BioSection>

		<BioSection>
          <BioYear>Programming language</BioYear>
			Python, JavaScript, C/C++, Bash
        </BioSection>

          <BioYear>Others</BioYear>
		    Linux, git, vim, tmux, Latex, Docker
      </Section>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My projects
            </Button>
          </NextLink>
        </Box>
        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1ph1t0Kr0D5brmQlzLZqEt1cWHtRCeQnG/view?usp=sharing">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My résumé
            </Button>
          </NextLink>
        </Box>

      <Section delay={0.3}>
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
          <ListItem>
            <Link href="https://instagram.com/soffwolf" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
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
