/* eslint-disable react/no-unescaped-entities */
import { Box, Text, VStack, Heading, Grid, GridItem, Image, Dialog, Link, Flex, Avatar, Button, useDisclosure, CloseButton, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const MotionBox = motion.create(Box);
const MotionGridItem = motion.create(GridItem);

const awards = [
	{
		title: "Python Certification",
		description: "Certified Python Developer from Python Institute",
		image: "https://via.placeholder.com/400x300",
		date: "2023"
	},
	{
		title: "Swift Excellence Award",
		description: "Recognized for outstanding Swift development skills",
		image: "https://via.placeholder.com/400x300",
		date: "2024"
	}
];

const Portfolio = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedAward, setSelectedAward] = useState(null);

	const handleAwardClick = award => {
		setSelectedAward(award);
		onOpen();
	};

	return (
		<Box minH="100vh" pt={24} px={{ base: 4, md: 8, lg: 16 }} position="relative" overflowX="hidden">
			{/* Hero Section */}
			<VStack spacing={8} textAlign="center" mb={20}>
				<MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<Box borderRadius="50%" boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)" display="inline-block" overflow="hidden" transition="transform 0.2s ease, box-shadow 0.2s ease">
						<Avatar.Root shape="full" width="150px" height="150px" border="4px solid" borderColor="blue.100">
							<Avatar.Fallback name="Joshua Long" />
							<Avatar.Image src="/profilePhoto.jpeg" />
						</Avatar.Root>
					</Box>

					<Heading fontSize={{ base: "4xl", md: "5xl" }} mb={4} fontWeight="semibold">
						Joshua Long
					</Heading>
					<Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="2xl" mx="auto" mt={5}>
						Full-Stack Developer • AI & Cloud Enthusiast
					</Text>
				</MotionBox>
			</VStack>

			{/* About Section */}
			<Box mb={20}>
				<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={12} alignItems="center">
					<MotionGridItem height={"100%"} order={{ base: 2, md: 1 }} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						{/* placeholder card */}
						<Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.100" shadow="md" p={6} height="100%" overflow="hidden" transition="all 0.3s ease">
							<VStack spacing={4} align="start">
								<Heading fontSize="lg" color="blue.600">
									Tech Stack Radar
								</Heading>
								<Flex wrap="wrap" gap={3}>
									{["TypeScript", "Python", "React", "Node.js", "Swift", "AWS", "PostgreSQL", "Docker"].map((tech, index) => (
										<MotionBox key={index} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
											<Box px={3} py={1} bg="blue.50" borderRadius="full" border="1px solid" borderColor="blue.100" fontSize="sm">
												{tech}
											</Box>
										</MotionBox>
									))}
								</Flex>

								<Box mt={4} w="full">
									<Heading fontSize="md" mb={2} color="gray.600">
										Current Focus
									</Heading>
									<Flex align="center" gap={2}>
										<Box w={2} h={2} bg="green.400" borderRadius="full" />
										<Text fontSize="sm">AI Integration Patterns</Text>
									</Flex>
									<Flex align="center" gap={2}>
										<Box w={2} h={2} bg="purple.400" borderRadius="full" />
										<Text fontSize="sm">Cloud Native Architectures</Text>
									</Flex>
								</Box>
							</VStack>
						</Box>
					</MotionGridItem>

					<MotionGridItem marginX={3} order={{ base: 1, md: 2 }} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<VStack spacing={6} align="start" px={{ md: 8 }}>
							<Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600">
								Hey, I'm Joshua!
							</Heading>
							<Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
								I am a Full-Stack Developer. I have a passion for building robust Web Applications, developing innovative Discord Bots, and designing intuitive, modern User Interfaces. I love exploring Artificial Intelligence, Cloud
								Technologies and iOS Development.
							</Text>
							<Flex gap={3} mt={4} wrap="wrap">
								<Link href="https://linkedin.com" isExternal _hover={{ textDecoration: "none" }}>
									<Button
										leftIcon={<FaLinkedin />}
										variant="outline"
										borderRadius="full"
										border="2px solid"
										borderColor="gray.800"
										bg="white"
										color="gray.800"
										px={6}
										py={5}
										fontWeight="600"
										fontSize="md"
										transition="all 0.3s ease"
										_hover={{
											bgGradient: "linear(to-r, #0077B5, #00A0DC)",
											borderColor: "transparent",
											transform: "translateY(-2px)",
											boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
										}}
										_active={{
											transform: "translateY(0)"
										}}
									>
										LinkedIn
									</Button>
								</Link>

								<Link href="https://github.com" isExternal _hover={{ textDecoration: "none" }}>
									<Button
										leftIcon={<FaGithub />}
										variant="outline"
										borderRadius="full"
										border="2px solid"
										borderColor="gray.800"
										bg="white"
										color="gray.800"
										px={6}
										py={5}
										fontWeight="600"
										fontSize="md"
										transition="all 0.3s ease"
										_hover={{
											bgGradient: "linear(to-r, #333, #000)",
											borderColor: "transparent",
											transform: "translateY(-2px)",
											boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)"
										}}
										_active={{
											transform: "translateY(0)"
										}}
									>
										GitHub
									</Button>
								</Link>
							</Flex>
						</VStack>
					</MotionGridItem>
				</Grid>
			</Box>

			{/* Awards Section */}
			<Box mb={20} px={{ md: 8 }}>
				<VStack spacing={12} w="full">
					<Heading fontSize={{ base: "2xl", md: "3xl" }} textAlign="center" fontWeight="600" mb={5}>
						Achievements & Certifications
					</Heading>

					<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} w="full">
						{awards.map((award, index) => (
							<Dialog.Root size={"md"} open={isOpen} onOpenChange={onClose} key={index}>
								<Dialog.Trigger asChild>
									<MotionGridItem initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
										<Box
											p={6}
											bg="white"
											borderRadius="xl"
											border="1px solid"
											borderColor="gray.100"
											_hover={{
												transform: "translateY(-4px)",
												shadow: "lg",
												cursor: "pointer"
											}}
											transition="all 0.3s ease"
											onClick={() => handleAwardClick(award)}
										>
											<Text fontSize="sm" color="gray.500" mb={2}>
												{award.date}
											</Text>
											<Heading fontSize="xl" mb={2} fontWeight="500">
												{award.title}
											</Heading>
											<Text color="gray.600" fontSize="md">
												{award.description}
											</Text>
										</Box>
									</MotionGridItem>
								</Dialog.Trigger>
								<Portal>
									<Dialog.Backdrop />
									<Dialog.Positioner>
										<Dialog.Content>
											<Dialog.Header>
												<Dialog.Title>{award.title}</Dialog.Title>
											</Dialog.Header>
											<Dialog.Body>
												<Text fontStyle={"italic"} mb={2}>
													{award.description}
												</Text>
												{selectedAward && <Image src={selectedAward.image} alt={selectedAward.title} borderRadius="md" w="full" />}
											</Dialog.Body>
											<Dialog.Footer>
												<Dialog.ActionTrigger asChild>
													<Button>Close</Button>
												</Dialog.ActionTrigger>
											</Dialog.Footer>
											<Dialog.CloseTrigger asChild>
												<CloseButton size="sm" />
											</Dialog.CloseTrigger>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog.Root>
						))}
					</Grid>
				</VStack>
			</Box>
		</Box>
	);
};

export default Portfolio;
