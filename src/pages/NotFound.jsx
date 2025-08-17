/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Button, Flex, VStack, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionButton = motion.create(Button);

function NotFound() {
	return (
		<Box minH="100vh" bg="gray.50" position="relative" overflow="hidden">
			<Flex minH="100vh" align="center" justify="center" px={8} position="relative" zIndex="1">
				<VStack spacing={12} align="center" textAlign="center">
					<MotionBox
						mb={2}
						initial={{ scale: 0.5, rotate: 0, opacity: 0 }}
						animate={{ scale: 1, rotate: 360, opacity: 1 }}
						transition={{
							type: "tween",
							ease: "easeInOut",
							duration: 0.6
						}}
						style={{
							transformOrigin: "center",
							willChange: "transform",
							position: "relative"
						}}
					>
						<Icon as={FiAlertTriangle} boxSize={{ base: 24, md: 32 }} color="orange.400" filter="drop-shadow(0 0 12px rgba(251, 176, 59, 0.5))" display="block" mx="auto" />
					</MotionBox>

					<MotionText minH="60px" fontSize={{ base: "xl", md: "2xl" }} color="gray.600" maxW="xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
						Oops! The page you're looking for seems to have wandered off into the digital wilderness...
					</MotionText>

					<Link href="/" isExternal _hover={{ textDecoration: "none" }}>
						<MotionButton
							variant="outline"
							borderRadius="full"
							border="2px solid"
							borderColor="gray.800"
							bg="gray.800"
							color="white"
							px={6}
							py={5}
							mt={3}
							fontWeight="600"
							fontSize="md"
							transition="all 0.2s ease"
							_hover={{
								bg: "white", // white background on hover
								borderColor: "gray.800", // keep gray.800 outline
								bgGradient: "linear(to-r, #0077B5, #00A0DC)", // gradient overlay
								color: "gray.800",
								position: "relative",
								transform: "translateY(-2px)",
								boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
							}}
							_active={{
								transform: "translateY(0)"
							}}
						>
							Return to Home
						</MotionButton>
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
				transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
				transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
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