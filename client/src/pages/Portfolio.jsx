/* eslint-disable react/no-unescaped-entities */
import { Box, Text, VStack, Heading, Grid, GridItem, Image, Dialog, Flex, Avatar, Button, useDisclosure, CloseButton, Portal, Icon, Center } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const MotionBox = motion.create(Box);
const MotionGridItem = motion.create(GridItem);

const techStack = ["DiscordJS", "ReactJS", "NodeJS", "Flask", "Google Cloud", "Swift", "C#", "Netlify"];

const currentFocus = [
	{ text: "Cloud Architectures & System Design", color: "purple.400" },
	{ text: "Deep Learning", color: "green.400" }
];

const awards = [
	{
		title: "Certified Entry-Level Python Programmer",
		description: "Completed a course allowing me to master the fundamentals of basic computing with Python",
		image: "/portfolio/entryLevelPython.jpg",
		date: "2023"
	},
	{
		title: "Certified Swift Programmer",
		description: "Completed a course allowing me to master the fundamentals of basic computing with Swift",
		image: "/portfolio/swift.jpg",
		date: "2023"
	},
	{
		title: "Code Overflow Hackathon 2nd Finalist",
		description: "Achieved 2nd place with my team in Code Overflow Hackathon 2023, organised by SIT Club’s Ambassador department.",
		image: "/portfolio/codeOverflow.jpg",
		date: "2023"
	},
	{
		title: "Director's List AY2024/25 Semester 1",
		description: "Admitted to the Director's List for outstanding academic performance in the 1st Semester",
		image: "/portfolio/DList24S1.jpg",
		date: "2024"
	},
	{
		title: "Director's List AY2024/25 Semester 2",
		description: "Admitted to the Director's List for outstanding academic performance in the 2nd Semester",
		image: "/portfolio/DList24S2.jpg",
		date: "2025"
	},
	{
		title: "ABRSM Grade 3 Piano (Merit)",
		description: "Awarded the ABRSM Level 1 Award in Music Performance (Grade 3) and passed with Merit in 2021",
		image: "/portfolio/grade3Piano.jpg",
		date: "2021"
	},
	{
		title: "Music Ensemble (Merit)",
		description: "Achieved a Merit in Music Performance (LCM) Ensemble - Level 2 in 2017 @ School of the Arts, Singapore",
		image: "/portfolio/ensemble.jpg",
		date: "2017"
	}
];

const externalLinks = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/joshua-long-1a21ba257",
		icon: FaLinkedin,
		color: "#0077B5",
		hoverGradient: "linear(to-r, #0077B5, #00A0DC)"
	},
	{
		name: "GitHub",
		url: "https://github.com/Sadliquid",
		icon: FaGithub,
		color: "#333",
		hoverGradient: "linear(to-r, #0077B5, #00A0DC)"
	}
];

const Portfolio = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedAward, setSelectedAward] = useState(null);

	const [externalLinkOpen, setExternalLinkOpen] = useState(false);
	const [selectedExternalLink, setSelectedExternalLink] = useState(null);

	const handleAwardClick = award => {
		setSelectedAward(award);
		onOpen();
	};

	const handleExternalLinkClick = linkData => {
		setSelectedExternalLink(linkData);
		setExternalLinkOpen(true);
	};

	const handleExternalRedirect = () => {
		if (selectedExternalLink) {
			window.open(selectedExternalLink.url, "_blank");
			setExternalLinkOpen(false);
		}
	};

	return (
		<Box minH="100vh" pt={24} px={{ base: 4, md: 8, lg: 16 }} position="relative" overflowX="hidden">
			{/* Hero Section */}
			<VStack spacing={8} textAlign="center" mb={20}>
				<MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<Box borderRadius="50%" boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)" display="inline-block" overflow="hidden" transition="transform 0.2s ease, box-shadow 0.2s ease">
						<Avatar.Root shape="full" width="150px" height="150px" border="4px solid" borderColor="blue.100">
							<Avatar.Fallback name="Joshua Long" />
							<Avatar.Image src="/portfolio/profilePhoto.jpg" />
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
						<Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.100" shadow="md" p={6} height="100%" overflow="hidden" transition="all 0.3s ease">
							<VStack spacing={4} align="start">
								<Heading fontSize="lg" color="blue.600">
									My Tech Stack
								</Heading>
								<Flex wrap="wrap" gap={3}>
									{techStack.map((tech, index) => (
										<MotionBox key={index} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
											<Box px={3} py={1} bg="blue.50" borderRadius="full" border="1px solid" borderColor="blue.100" fontSize="sm">
												{tech}
											</Box>
										</MotionBox>
									))}
								</Flex>

								<Box mt={4} w="full">
									<Heading fontSize="md" mb={2} color="green.500">
										Current Focus
									</Heading>
									{currentFocus.map((item, index) => (
										<Flex key={index} align="center" gap={2}>
											<Box w={2} h={2} bg={item.color} borderRadius="full" />
											<Text fontSize="sm">{item.text}</Text>
										</Flex>
									))}
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
								I am a Full-Stack Developer. I have a passion for building modern Web Applications, developing innovative tools and designing intuitive User Interfaces. I love exploring Artificial Intelligence, Cloud Technologies and
								iOS Development.
							</Text>
							<Flex gap={3} mt={4} wrap="wrap">
								{externalLinks.map(linkData => (
									<Button
										key={linkData.name}
										onClick={() => handleExternalLinkClick(linkData)}
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
											bgGradient: linkData.hoverGradient,
											borderColor: "transparent",
											transform: "translateY(-2px)",
											boxShadow: `0 4px 12px ${linkData.color}40`
										}}
										_active={{
											transform: "translateY(0)"
										}}
									>
										<MotionBox
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
											transition={{ duration: 0.3 }}
											style={{
												transformOrigin: "center",
												willChange: "transform",
												position: "relative"
											}}
											mr={2}
										>
											<Icon as={linkData.icon} display="block" mx="auto" />
										</MotionBox>
										{linkData.name}
									</Button>
								))}
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
						{[...awards]
							.sort((a, b) => parseInt(b.date) - parseInt(a.date))
							.map((award, index) => (
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
													<Center w="full">
														<Dialog.CloseTrigger asChild position="static">
															<Button
																variant="outline"
																borderRadius="full"
																border="2px solid"
																borderColor="gray.800"
																bg="white"
																color="black"
																width={"100%"}
																mb={2}
																px={6}
																py={5}
																mt={-3}
																fontWeight="600"
																fontSize="md"
																transition="all 0.2s ease"
																_hover={{
																	bg: "white", // white background on hover
																	borderColor: "white",
																	bgGradient: "linear(to-r, #0077B5, #00A0DC)", // gradient overlay
																	color: "gray.800",
																	transform: "translateY(-2px)",
																	boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
																}}
																_active={{
																	transform: "translateY(0)"
																}}
															>
																Close
															</Button>
														</Dialog.CloseTrigger>
													</Center>
												</Dialog.Footer>
											</Dialog.Content>
										</Dialog.Positioner>
									</Portal>
								</Dialog.Root>
							))}
					</Grid>
				</VStack>
			</Box>

			{selectedExternalLink && (
				<Dialog.Root open={externalLinkOpen} onOpenChange={e => setExternalLinkOpen(e.open)} placement="center">
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
								<Box p={4} bg="gray.50" borderRadius="md" borderLeft="4px solid" borderColor={selectedExternalLink.color}>
									<Flex align="center" gap={3}>
										<Icon as={selectedExternalLink.icon} color={selectedExternalLink.color} boxSize={6} />
										<Text fontWeight="medium">{selectedExternalLink.name}</Text>
									</Flex>
									<Text mt={2} color="gray.600" fontSize="sm">
										{selectedExternalLink.url}
									</Text>
								</Box>
								<Text mt={4} fontSize="sm" color="gray.600">
									This link will take you to an external website. Are you sure you want to continue?
								</Text>
							</Dialog.Body>
							<Dialog.Footer>
								<Button colorScheme="teal" onClick={handleExternalRedirect} rightIcon={<FiExternalLink />}>
									Proceed
								</Button>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Positioner>
				</Dialog.Root>
			)}
		</Box>
	);
};

export default Portfolio;
