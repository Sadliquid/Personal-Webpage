/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, SimpleGrid, GridItem, Image, Button, Icon, Flex, Dialog, CloseButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

const MotionBox = motion.create(Box);
const MotionGridItem = motion.create(GridItem);

const projects = [
	{
		title: "Verdex",
		description: "Verdex is a Web Platform designed to help Singapore's tourists generate sustainable itineraries. This project was nominated for the Outstanding Project Presentation!",
		image: "/projects/verdex.jpg",
		githubUrl: "https://github.com/Verdex-Project/Verdex",
		tech: ["Flask", "Cloud", "Gen-AI"]
	},
	{
		title: "MakanMatch",
		description:
			"MakanMatch is a revolutionary Web Platform that connects people of a shared community together, fostering a space for residents to share delectable meals together in a sustainable manner by reducing food wastage. This was our 2nd project to be nominated for the Outstanding Project Presentation!",
		image: "/projects/makanmatch.jpg",
		githubUrl: "https://github.com/MakanMatch",
		tech: ["ReactJS", "NodeJS", "Cloud", "Framer"]
	},
	{
		title: "Recyclify",
		description:
			"Recyclify is a sustainable Classroom Management Platform designed to tackle the growing issue of low-engagement rates from students towards contributing to the evnvironment. This was our 3rd project to be nominated for the Outstanding Project Presentation!",
		image: "/projects/recyclify.jpg",
		githubUrl: "https://github.com/RecyclifyApp",
		tech: ["ReactJS", "ASP.NET Web Core", "Cloud", "Computer Vision", "Framer"]
	},
	{
		title: "ChatNinja",
		description: "ChatNinja is a Discord AI Assistant built using the DJS library which brings the power of Generative AI to your Discord servers.",
		image: "/projects/chatninja.jpg",
		githubUrl: "https://github.com/Sadliquid/ChatNinja",
		tech: ["DiscordJS", "NodeJS", "Gen-AI", "Vision"]
	},
	{
		title: "MushroomPocket",
		description: "MushroomPocket is a Gamified Console Application built using C# which allows players to collect in-game characters and participate in PvP battles.",
		image: "/projects/mushroompocket.jpg",
		githubUrl: "https://github.com/Sadliquid/MushroomPocket",
		tech: ["Microsoft EF Core", "Object-Oriented Programming"]
	},
	{
		title: "CatFace",
		description: "CatFace is a Microsoft Visual Studio Code Extension that displays varying cat faces that correspond to the bugs in your code. CatFace is now used by over 3000 developers worldwide!",
		image: "/projects/catface.jpg",
		githubUrl: "https://github.com/Sadliquid/CatFace",
		tech: ["WebView", "Typescript"]
	},
	{
		title: "Meteo Data",
		description: "Meteo Data is a Web Application designed to provide real-time weather data and statistics which features an intuitive UI and comprehensive data visualization tools.",
		image: "/projects/meteoData.jpg",
		githubUrl: "https://github.com/MeteoDataApp",
		tech: ["ReactJS", "Flask", "Cloud", "Data Visualization"]
	},
	{
		title: "FilmManager",
		description: "FilmManager is a Web Application designed to streamline the Warehouse Inventory Management for Film Equipment. RFIDManager was built to enable RFID I/O on compatible handheld devices.",
		image: "/projects/filmManager.jpg",
		githubUrl: "https://github.com/FilmManagerProd",
		tech: ["React Native", "NodeJS", "Expo", "Cloud", "RFID", "Android"]
	}
];

const Projects = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [externalLinkOpen, setExternalLinkOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		const timeout = setTimeout(() => setIsLoading(false), 1000);
		const preloadImages = async () => {
			await Promise.all(
				projects.map(p => {
					return new Promise(resolve => {
						const img = new Image();
						img.src = p.image;
						img.onload = img.onerror = resolve;
					});
				})
			);
			clearTimeout(timeout);
			setIsLoading(false);
		};

		preloadImages();
	}, []);

	const handleGitHubClick = (project) => {
		setSelectedProject(project);
		setExternalLinkOpen(true);
	};

	const handleExternalRedirect = () => {
		if (selectedProject) {
			window.open(selectedProject.githubUrl, "_blank");
			setExternalLinkOpen(false);
		}
	};

	if (isLoading) {
		return (
			<Flex minH="100vh" align="center" justify="center" bg="gray.50">
				<Bouncy size="45" speed="1.75" color="rgba(49, 151, 149, 0.7)" />
			</Flex>
		);
	}

	return (
		<Box minH="100vh" pt={24} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50">
			<SimpleGrid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8} w="full">
				{projects.map((proj, index) => (
					<MotionGridItem key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
						<Box bg="white" borderRadius="xl" border="1px solid" borderColor="gray.100" overflow="hidden" shadow="md" transition="all 0.3s ease">
							<Image src={proj.image} alt={proj.title} w="full" h="200px" objectFit="cover" />
							<Box p={6}>
								<Heading fontSize="xl" mb={2} color="gray.800">
									{proj.title}
								</Heading>
								<Text color="gray.600" mb={4} fontSize="md">
									{proj.description}
								</Text>
								<Flex wrap="wrap" gap={2} mb={4}>
									{proj.tech.map(tech => (
										<Box key={tech} px={3} py={1} bg="blue.50" borderRadius="full" fontSize="sm" border="1px solid" borderColor="blue.100">
											{tech}
										</Box>
									))}
								</Flex>

								<Flex justify="space-between" mt={4} width="100%">
									<Button
										onClick={() => handleGitHubClick(proj)}
										variant="outline"
										colorScheme="gray"
										width="100%"
										justifyContent="center"
										borderRadius="full"
										_hover={{
											bg: "white",
											bgGradient: "linear(to-r, #0077B5, #00A0DC)",
											color: "gray.800",
											position: "relative",
											transform: "translateY(-2px)",
											boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
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
											<Icon as={FiGithub} display="block" mx="auto" />
										</MotionBox>
										View on GitHub
									</Button>
								</Flex>
							</Box>
						</Box>
					</MotionGridItem>
				))}
			</SimpleGrid>

			{selectedProject && (
				<Dialog.Root open={externalLinkOpen} onOpenChange={(e) => setExternalLinkOpen(e.open)} placement="center">
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
								<Box p={4} bg="gray.50" borderRadius="md" borderLeft="4px solid" borderColor="gray.800">
									<Flex align="center" gap={3}>
										<Icon as={FaGithub} color="gray.800" boxSize={6} />
										<Text fontWeight="medium">{selectedProject.title} - GitHub Repository</Text>
									</Flex>
									<Text mt={2} color="gray.600" fontSize="sm">
										{selectedProject.githubUrl}
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

export default Projects;