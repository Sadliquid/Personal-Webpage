/* eslint-disable react/no-unescaped-entities */
import {
    Box, Text, Button, Flex, VStack, SimpleGrid, Icon, Heading, Link,
    Dialog, CloseButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaSwift } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFigma, SiFirebase, SiMongodb, SiNextdotjs, SiDotnet } from 'react-icons/si';
import { FiTerminal, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);
const MotionVStack = motion.create(VStack);

const skills = [
    { icon: FaReact, name: 'React.js', color: '#61DAFB', url: 'https://reactjs.org' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933', url: 'https://nodejs.org' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'black', url: 'https://nextjs.org' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', url: 'https://www.typescriptlang.org' },
    { icon: FaPython, name: 'Python 3', color: '#3776AB', url: 'https://www.python.org' },
    { icon: FaSwift, name: 'Swift', color: '#FA7343', url: 'https://swift.org' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248', url: 'https://www.mongodb.com' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28', url: 'https://firebase.google.com' },
    { icon: FaDatabase, name: 'SQL', color: '#00758F', url: 'https://www.mysql.com' },
    { icon: SiDotnet, name: 'ASP.NET', color: '#866BE1', url: 'https://dotnet.microsoft.com/en-us/apps/aspnet' },
    { icon: SiFigma, name: 'Figma', color: '#F24E1E', url: 'https://www.figma.com' }
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

    // State for selected skill and dialog
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [open, setOpen] = useState(false);

    // Handle opening the dialog with a specific skill
    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
        setOpen(true);
    };

    // Handle redirect to external site
    const handleRedirect = () => {
        if (selectedSkill) {
            window.open(selectedSkill.url, '_blank');
            setOpen(false);
        }
    };

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
                            &lt;Text&gt;Hello there! How're you today?&lt;/Text&gt;
                        </Text>

                        <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" lineHeight="1.1" mb={3}>
                            <Box as="span" color="gray.800" fontSize={"5xl"}>Hey 👋🏻 I'm {text}</Box>
                            <Cursor cursorStyle="|" cursorColor="grey" />
                        </Text>

                        <Text fontSize="xl" color="gray.600" maxW="2xl" mb={3}>
                            I have a passion for building robust Web Applications, developing innovative Discord Bots, and designing intuitive, modern User Interfaces. I love exploring Artificial Intelligence, Cloud Technologies and iOS Development.
                        </Text>

                        <MotionButton
                            rightIcon={<Icon as={FiTerminal} />}
                            colorScheme="teal"
                            size="lg"
                            px={8}
                            py={6}
                            whileTap={{ scale: 0.98 }}
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
                                    textAlign={"left"}
                                    key={skill.name}
                                    p={6}
                                    bg="white"
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        x: 0
                                    }}
                                    transition={{
                                        delay: index * 0.06,
                                        type: 'spring',
                                        stiffness: 90,
                                        damping: 15
                                    }}
                                    style={{
                                        transformOrigin: 'center',
                                        willChange: 'transform',
                                        position: 'relative'
                                    }}
                                >
                                    <Icon
                                        as={skill.icon}
                                        boxSize={8}
                                        mb={2}
                                        color={skill.color}
                                        filter={skill.color !== "black" ? "drop-shadow(0 0 8px currentColor)" : "drop-shadow(0 0 8px whitesmoke)"}
                                    />
                                    <Text
                                        fontWeight="500"
                                        color="gray.600"
                                        cursor="pointer"
                                        _hover={{ textDecoration: 'underline' }}
                                        onClick={() => handleSkillClick(skill)}
                                    >
                                        {skill.name}
                                    </Text>
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

            {selectedSkill && (
                <Dialog.Root
                    open={open}
                    onOpenChange={(e) => setOpen(e.open)}
                    placement={"center"}
                >
                    <Dialog.Backdrop />
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content maxW="md" w="90%">
                            <Dialog.Header>
                                <Dialog.Title>You are about to leave this site</Dialog.Title>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Header>
                            <Dialog.Body pb={4}>
                                <Box p={4} bg="gray.50" borderRadius="md" borderLeft="4px solid" borderColor={selectedSkill.color}>
                                    <Flex align="center" gap={3}>
                                        <Icon as={selectedSkill.icon} color={selectedSkill.color} boxSize={6} />
                                        <Text fontWeight="medium">{selectedSkill.name}</Text>
                                    </Flex>
                                    <Text mt={2} color="gray.600" fontSize="sm">
                                        {selectedSkill.url}
                                    </Text>
                                </Box>

                                <Text mt={4} fontSize="sm" color="gray.600">
                                    This link will take you to an external website. Are you sure you want to continue?
                                </Text>
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Button
                                    colorScheme="teal"
                                    onClick={handleRedirect}
                                    rightIcon={<FiExternalLink />}
                                >
                                    Proceed
                                </Button>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Dialog.Root>
            )}

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