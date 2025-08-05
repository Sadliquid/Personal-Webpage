/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Button, Flex, VStack, SimpleGrid, Icon, Heading, Link, Dialog, CloseButton, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaSwift } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiFigma, SiFirebase, SiMongodb, SiNextdotjs, SiDotnet } from "react-icons/si";
import { FiTerminal, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const MotionBox = motion.create(Box);
const MotionSimpleGrid = motion.create(SimpleGrid);
const MotionGridItem = motion.create(GridItem);

// Variants for staggered animations
const containerVariants = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.06,
			delayChildren: 0.2
		}
	}
};
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		x: 0, // lock final x
		transition: { type: "spring", stiffness: 100, damping: 20 }
	}
};

const skills = [
	{ icon: FaReact, name: "React.js", color: "#61DAFB", url: "https://reactjs.org" },
	{ icon: FaNodeJs, name: "Node.js", color: "#339933", url: "https://nodejs.org" },
	{ icon: SiNextdotjs, name: "Next.js", color: "black", url: "https://nextjs.org" },
	{ icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ icon: SiTypescript, name: "TypeScript", color: "#3178C6", url: "https://www.typescriptlang.org" },
	{ icon: FaPython, name: "Python 3", color: "#3776AB", url: "https://www.python.org" },
	{ icon: FaSwift, name: "Swift", color: "#FA7343", url: "https://swift.org" },
	{ icon: SiMongodb, name: "MongoDB", color: "#47A248", url: "https://www.mongodb.com" },
	{ icon: SiFirebase, name: "Firebase", color: "#FFCA28", url: "https://firebase.google.com" },
	{ icon: FaDatabase, name: "SQL", color: "#00758F", url: "https://www.mysql.com" },
	{ icon: SiDotnet, name: "ASP.NET", color: "#866BE1", url: "https://dotnet.microsoft.com/en-us/apps/aspnet" },
	{ icon: SiFigma, name: "Figma", color: "#F24E1E", url: "https://www.figma.com" }
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
		excerpt: "Discover TypeScript's type system and how it improves...",
		date: "Apr 2, 2024",
		link: "#"
	},
	{
		title: "Mobile Development with Swift UI",
		excerpt: "Getting started with SwiftUI for beautiful iOS applications...",
		date: "Apr 20, 2024",
		link: "#"
	}
];

const Homepage = () => {
	const [text] = useTypewriter({ words: ["Joshua.", "an aspiring Full-Stack Developer"], loop: true, typeSpeed: 60, deleteSpeed: 40 });
	const [selectedSkill, setSelectedSkill] = useState(null);
	const [open, setOpen] = useState(false);

	const handleSkillClick = skill => {
		setSelectedSkill(skill);
		setOpen(true);
	};
	const handleRedirect = () => {
		if (selectedSkill) {
			window.open(selectedSkill.url, "_blank");
			setOpen(false);
		}
	};

	return (
		<Box minH="100vh" bg="gray.50" position="relative" overflow="hidden">
			<Flex minH="90vh" align="center" px={8} pt={24} pb={16} zIndex="1" maxW="6xl" mx="auto">
				<VStack align="start" spacing={8} w="full">
					{/* Intro Section */}
					<MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
						<Text fontSize="lg" fontFamily="mono" color="green.400" fontWeight="500" letterSpacing="0.05em" bg="blackAlpha.50" px={2} borderRadius="sm" display="inline-block">
							&lt;Text&gt;Welcome!&lt;/Text&gt;
						</Text>
						<Text fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" lineHeight="1.1" mb={3}>
							<Box as="span" color="gray.800" fontSize="5xl">
								Hey 👋🏻 I'm {text}
							</Box>
							<Cursor cursorStyle="|" cursorColor="grey" />
						</Text>
						<Text fontSize="xl" color="gray.600" maxW="2xl" mb={3}>
							I have a passion for building robust Web Applications, developing innovative Discord Bots, and designing intuitive, modern User Interfaces.
						</Text>
						<Button rightIcon={<Icon as={FiTerminal} />} colorScheme="teal" size="lg" px={8} py={6} whileTap={{ scale: 0.98 }}>
							Explore Projects
						</Button>
					</MotionBox>

					{/* Skills Grid */}
					<MotionSimpleGrid variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} columns={{ base: 2, md: 3, lg: 6 }} gap={2} w="full" pt={8}>
						{skills.map(skill => (
							<MotionBox
								key={skill.name}
								variants={itemVariants}
								p={6}
								bg="white"
								borderRadius="lg"
								border="1px solid"
								borderColor="gray.100"
								cursor="pointer"
								onClick={() => handleSkillClick(skill)}
								style={{
									transformOrigin: "center", // lock pivot
									willChange: "transform",
									position: "relative"
								}}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0, x: 0 }} // fix shifting
								transition={{ type: "spring", stiffness: 100, damping: 20 }}
							>
								<Icon
									as={skill.icon}
									boxSize={8}
									mb={2}
									display="block" // fixes inline shift
									mx="auto"
									color={skill.color}
									filter={skill.color !== "black" ? "drop-shadow(0 0 8px currentColor)" : "drop-shadow(0 0 8px whitesmoke)"}
								/>
								<Text fontWeight="500" color="gray.600" display="block" textAlign="center">
									{skill.name}
								</Text>
							</MotionBox>
						))}
					</MotionSimpleGrid>

					{/* Latest Posts */}
					<Heading fontSize="3xl" fontWeight="700" color="gray.800" mb={5} mt={16}>
						Latest Posts
					</Heading>
					<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} w="full">
						{blogPosts.map((post, index) => (
							<MotionGridItem key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
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
								>
									<Text fontSize="sm" color="gray.500" mb={2}>
										{post.date}
									</Text>
									<Heading fontSize="xl" mb={2}>
										{post.title}
									</Heading>
									<Text color="gray.600" mb={4}>
										{post.excerpt}
									</Text>
									<Link href={post.link} color="teal.500" fontWeight="600" _hover={{ textDecoration: "underline" }}>
										Read more →
									</Link>
								</Box>
							</MotionGridItem>
						))}
					</Grid>
				</VStack>
			</Flex>

			{/* Skill Dialog */}
			{selectedSkill && (
				<Dialog.Root open={open} onOpenChange={e => setOpen(e.open)} placement="center">
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
								<Button colorScheme="teal" onClick={handleRedirect} rightIcon={<FiExternalLink />}>
									Proceed
								</Button>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Positioner>
				</Dialog.Root>
			)}

			{/* Decorative Background */}
			<MotionBox
				position="absolute"
				w="800px"
				h="800px"
				bgGradient="linear(to-br, teal.100, blue.100)"
                pointerEvents="none"
				borderRadius="full"
				filter="blur(80px)"
				opacity="0.4"
				right="-20%"
				top="20%"
				animate={{ rotate: 360 }}
				transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
			/>
		</Box>
	);
};

export default Homepage;
