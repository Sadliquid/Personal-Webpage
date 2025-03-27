/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Button, Flex, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiDocker } from 'react-icons/si';
import { FiTerminal } from 'react-icons/fi';

const MotionBox = motion.create(Box);
const MotionButton = motion.create(Button);
const MotionVStack = motion.create(VStack);

const skills = [
    { icon: FaReact, name: 'React', color: 'teal.500' },
    { icon: FaNodeJs, name: 'Node.js', color: 'green.500' },
    { icon: FaPython, name: 'Python', color: 'blue.500' },
    { icon: FaDatabase, name: 'SQL', color: 'purple.500' },
    { icon: SiTypescript, name: 'TypeScript', color: 'blue.600' },
    { icon: SiDocker, name: 'Docker', color: 'blue.400' },
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
                minH="100vh"
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

                        <Text fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold" lineHeight="1.1">
                            <Box as="span" color="gray.800" fontSize={"5xl"}>Hey 👋🏻 I'm {text}</Box>
                            <Cursor cursorStyle="|" cursorColor="grey" />
                        </Text>

                        <Text fontSize="xl" color="gray.600" maxW="2xl">
                            Building robust solutions with modern technologies. Specializing in full-stack
                            development with a focus on clean architecture and user-centric design.
                        </Text>

                        <MotionButton
                            rightIcon={<Icon as={FiTerminal} />}
                            colorScheme="teal"
                            size="lg"
                            px={8}
                            py={6}
                        >
                            Explore Projects
                        </MotionButton>
                    </MotionVStack>

                    <MotionVStack
                        w="full"
                        pt={16}
                        spacing={6}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6} w="full">
                            {skills.map((skill, index) => (
                                <MotionBox
                                    key={skill.name}
                                    p={6}
                                    bg="white"
                                    borderRadius="lg"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    textAlign="center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    m={2}
                                >
                                    <Icon
                                        as={skill.icon}
                                        w={12}
                                        h={12}
                                        color={skill.color}
                                        mb={3}
                                    />
                                    <Text fontWeight="500" color="gray.700">{skill.name}</Text>
                                </MotionBox>
                            ))}
                        </SimpleGrid>
                    </MotionVStack>
                </VStack>
            </Flex>

            {/* Animated Background Elements */}
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