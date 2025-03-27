/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Button, Flex, VStack, SimpleGrid, Icon, Heading, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaSwift, FaCode } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFigma, SiFirebase, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { FiTerminal } from 'react-icons/fi';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);
const MotionVStack = motion.create(VStack);

const skills = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'black' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaSwift, name: 'Swift', color: '#FA7343' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: FaDatabase, name: 'SQL', color: '#00758F' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
    { icon: FaCode, name: 'HTML5 & CSS3', color: '#E34F26' }
];

const blogPosts = [
    {
        title: "Building a Full-Stack React Application",
        excerpt: "Learn how to create a modern web app with React and Node.js...",
        date: "Mar 15, 2024",
        link: "#"
    },
    {
        title: "Mastering TypeScript for Better Code",
        excerpt: "Discover TypeScript's powerful type system and how it improves...",
        date: "Apr 2, 2024",
        link: "#"
    },
    {
        title: "Mobile Development with Swift UI",
        excerpt: "Getting started with SwiftUI for beautiful iOS applications...",
        date: "Apr 20, 2024",
        link: "#"
    },
];

const Homepage = () => {
    const [text] = useTypewriter({
        words: ["Joshua.", "an aspiring Full-Stack Developer"],
        loop: true,
        typeSpeed: 60,
        deleteSpeed: 40,
    });

    return (
        <Box minH="100vh" bg="gray.50" position="relative" overflow="hidden">
            <Flex
                minH="90vh"
                align="center"
                px={8}
                pt={24}
                pb={16}
                position="relative"
                zIndex="1"
                maxW="6xl"
                mx="auto"
            >
                <VStack align="start" spacing={8} w="full">
                    <MotionVStack
                        align="start"
                        spacing={6}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Text
                            fontSize="lg"
                            fontFamily="mono"
                            color="green.400"
                            fontWeight="500"
                            letterSpacing="0.05em"
                            bg="blackAlpha.50"
                            px={2}
                            borderRadius="sm"
                            display="inline-block"
                        >
                            &lt;Text&gt;Welcome to my digital space&lt;/Text&gt;
                        </Text>

                        <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" lineHeight="1.1" mb={3}>
                            <Box as="span" color="gray.800" fontSize={"5xl"}>Hey 👋🏻 I'm {text}</Box>
                            <Cursor cursorStyle="|" cursorColor="grey" />
                        </Text>

                        <Text fontSize="xl" color="gray.600" maxW="2xl" mb={3}>
                            Building robust solutions with modern technologies. Specializing in full-stack
                            development with a focus on clean architecture and user-centric design.
                        </Text>

                        <MotionButton
                            rightIcon={<Icon as={FiTerminal} />}
                            colorScheme="teal"
                            size="lg"
                            px={8}
                            py={6}
                            bgGradient="linear(to-r, teal.400, blue.400)"
                            _hover={{ bgGradient: "linear(to-r, teal.500, blue.500)" }}
                            whileHover={{
                                y: -2,
                                scale: 1.02,
                                boxShadow: '0 5px 20px rgba(0, 128, 128, 0.3)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            Explore Projects
                        </MotionButton>
                    </MotionVStack>

                    <MotionVStack
                        w="full"
                        pt={8}
                        spacing={6}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.6 }}
                        mb={5}
                    >
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6} w="full" gap={2}>
                            {skills.map((skill, index) => (
                                <MotionBox
                                    key={skill.name}
                                    p={6}
                                    bg="white"
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: 'spring',
                                        stiffness: 90,
                                        damping: 15
                                    }}
                                >
                                    <Icon
                                        as={skill.icon}
                                        boxSize={8}
                                        mb={2}
                                        color={skill.color}
                                        filter={skill.color !== "black" ? "drop-shadow(0 0 8px currentColor)" : "drop-shadow(0 0 8px whitesmoke)"}
                                    />
                                    <Text fontWeight="500" color="gray.600">{skill.name}</Text>
                                </MotionBox>
                            ))}
                        </SimpleGrid>
                    </MotionVStack>

                    <MotionVStack
                        w="full"
                        spacing={8}
                        mb={32}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "0px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading fontSize="3xl" fontWeight="700" color="gray.800" mb={5}>
                            Latest Posts
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full" gap={6}>
                            {blogPosts.map((post) => (
                                <MotionBox
                                    key={post.title}
                                    p={6}
                                    bg="white"
                                    borderRadius="xl"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 20,
                                    }}
                                >
                                    <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
                                    <Heading fontSize="xl" mb={2}>{post.title}</Heading>
                                    <Text color="gray.600" mb={4}>{post.excerpt}</Text>
                                    <Link
                                        href={post.link}
                                        color="teal.500"
                                        fontWeight="600"
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        Read more →
                                    </Link>
                                </MotionBox>
                            ))}
                        </SimpleGrid>

                    </MotionVStack>
                </VStack>
            </Flex>

            <MotionBox
                position="absolute"
                w="800px"
                h="800px"
                bgGradient="linear(to-br, teal.100, blue.100)"
                borderRadius="full"
                filter="blur(80px)"
                opacity="0.4"
                right="-20%"
                top="20%"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
        </Box>
    );
};

export default Homepage;