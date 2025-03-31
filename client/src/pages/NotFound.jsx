/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Button, Flex, VStack, Icon, Link, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiAlertTriangle, FiTerminal } from 'react-icons/fi';

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionHeading = motion.create(Heading);

function NotFound() {
    const [text] = useTypewriter({
        words: ['404 Page Not Found.'],
        typeSpeed: 50,
        delaySpeed: 0,
        loop: 1,
    });

    return (
        <Box minH="100vh" bg="gray.50" position="relative" overflow="hidden">
            <Flex
                minH="100vh"
                align="center"
                justify="center"
                px={8}
                position="relative"
                zIndex="1"
            >
                <VStack spacing={12} align="center" textAlign="center">
                    <MotionBox
                        mb={2}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                            // Add these to pin the position
                            x: 0,
                            y: 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.8
                        }}
                        // Add these styles to ensure stable positioning
                        style={{
                            transformOrigin: 'center',
                            willChange: 'transform',
                            position: 'relative'
                        }}
                    >
                        <Icon
                            as={FiAlertTriangle}
                            boxSize={{ base: 24, md: 32 }}
                            color="orange.400"
                            filter="drop-shadow(0 0 12px rgba(251, 176, 59, 0.5))"
                            // Ensure icon stays centered
                            display="block"
                            mx="auto"
                        />
                    </MotionBox>

                    <MotionHeading
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="bold"
                        bgGradient="linear(to-r, teal.400, blue.500)"
                        bgClip="text"
                        color={"gray"}
                        mb={2}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {text}
                        <Cursor cursorStyle="|" cursorColor="gray.400" />
                    </MotionHeading>

                    <MotionText
                        fontSize={{ base: "xl", md: "2xl" }}
                        color="gray.600"
                        maxW="xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Oops! The page you're looking for seems to have wandered off into the digital wilderness...
                    </MotionText>

                    <Link href="/" _hover={{ textDecoration: 'none' }}>
                        <Box
                            position="relative"
                            overflow="hidden"
                            width="fit-content"
                            margin="0 auto"
                        >
                            <MotionBox
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                            >
                                <Button
                                    rightIcon={<Icon as={FiTerminal} />}
                                    colorScheme="teal"
                                    size="lg"
                                    px={8}
                                    py={6}
                                    mt={5}
                                    bgGradient="linear(to-r, teal.400, blue.400)"
                                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                                >
                                    Return to Home
                                </Button>
                            </MotionBox>
                        </Box>
                    </Link>
                </VStack>
            </Flex>

            <MotionBox
                position="absolute"
                w="600px"
                h="600px"
                bgGradient="linear(to-br, teal.100, blue.100)"
                borderRadius="full"
                filter="blur(80px)"
                opacity="0.4"
                right="-10%"
                top="20%"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            <MotionBox
                position="absolute"
                w="500px"
                h="500px"
                bgGradient="linear(to-tr, orange.100, pink.100)"
                borderRadius="full"
                filter="blur(80px)"
                opacity="0.3"
                left="-10%"
                bottom="10%"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            />

            {[...Array(6)].map((_, i) => (
                <MotionBox
                    key={i}
                    position="absolute"
                    w={{ base: "40px", md: "60px" }}
                    h={{ base: "40px", md: "60px" }}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    opacity="0.1"
                    left={`${Math.random() * 100}%`}
                    top={`${Math.random() * 100}%`}
                    initial={{ y: 0 }}
                    animate={{
                        y: ["-20px", "20px"],
                        x: [`${Math.random() * 20 - 10}px`, `${Math.random() * 20 - 10}px`],
                        rotate: [0, Math.random() * 360]
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}
        </Box>
    );
}

export default NotFound;