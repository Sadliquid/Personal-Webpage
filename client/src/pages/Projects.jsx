/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, SimpleGrid, GridItem, Image, Button, Icon, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

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
		title: "BrawlTrackr",
		description: "BrawlTrackr is a statistics tracker for the Brawl Stars Mobile Game.",
		image: "/projects/brawltrackr.jpg",
		githubUrl: "https://github.com/Sadliquid/BrawlTrackr",
		tech: ["Flask", "Brawl Stars"]
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
		image: "/projects/meteodata.jpg",
		githubUrl: "https://github.com/MeteoDataApp",
		tech: ["ReactJS", "Flask", "Cloud", "Data Visualization"]
	},
	{
		title: "FilmManager",
		description: "FilmManager is a Web Application designed to streamline the Warehouse Inventory Management for Film Equipment. RFIDManager was built to enable RFID I/O on compatible handheld devices.",
		image: "/projects/filmmanager.jpg",
		githubUrl: "https://github.com/FilmManagerProd",
		tech: ["React Native", "NodeJS", "Expo", "Cloud", "RFID", "Android"]
	}
];

const Projects = () => {
	return (
		<Box minH="100vh" pt={24} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50" position="relative" overflow="hidden">
			<Box
				columnCount={{ base: 1, md: 2, lg: 3 }}
				columnGap="24px"
				sx={{
					columnCount: [1, 2, 3],
					columnGap: "24px"
				}}
			>
				{projects.map((proj, index) => (
					<MotionBox key={proj.title} breakInside="avoid" mb="24px" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
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
								<Link href={proj.githubUrl} isExternal _hover={{ textDecoration: "none" }} width="100%">
									<Button
										variant="outline"
										colorScheme="gray"
										width="100%"
										borderRadius="full"
										_hover={{
											bg: "white",
											bgGradient: "linear(to-r, #0077B5, #00A0DC)",
											color: "gray.800",
											transform: "translateY(-2px)",
											boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
										}}
									>
										<Icon as={FiGithub} mr={2} />
										View on GitHub
									</Button>
								</Link>
							</Box>
						</Box>
					</MotionBox>
				))}
			</Box>
		</Box>
	);
};

export default Projects;