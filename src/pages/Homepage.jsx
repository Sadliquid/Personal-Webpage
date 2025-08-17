/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Button, Flex, VStack, SimpleGrid, Icon, Heading, Link, Dialog, CloseButton, Grid, GridItem, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaSwift } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiFigma, SiFirebase, SiMongodb, SiNextdotjs, SiDotnet } from "react-icons/si";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const MotionBox = motion.create(Box);
const MotionSimpleGrid = motion.create(SimpleGrid);
const MotionGridItem = motion.create(GridItem);

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
		title: "The impact of AI on our careers",
		body: `
            "AI will replace me someday." This is something you might have heard quite a lot recently. It does beg the obvious question, and the answer is not that simple either. Here is my take on it.

            Think of a really good cookbook you've seen recently. As someone with little to no experience in the field of culinary, a well-written cookbook could guide you in preparing delectable dishes after sufficient practice. You could even impress your friends and family with your newly acquired skills!

            But did the cookbook prepare that dish for you? Or were you the one who prepared it?

            Well, AI is very much like that cookbook. It can guide you, provide you with the necessary tools, and even help you improve your skills. However, it cannot replace the human touch, creativity, and intuition that goes into every task.

            The CEO of Nvidia, Jensen Huang, once said at a conference, "AI is not going to replace you, but people who use AI will replace you." Instead of replacing us, AI is very much likely to be heavily integrated into what we do. It may not necessarily be able to single-handedly replace our skillsets, but it is capable of helping us improve efficiency and ultimately produce better results.

            So the focus isn't really about which of our skills could similarly be replaced by AI, but rather how we can leverage AI to enhance our skills and become more efficient in our work.

            So, will you learn how to use your cookbook?
        `,
		date: "6th August, 2025"
	}
];

const useResponsiveFontSize = () => {
	const [config, setConfig] = useState({
		fontSize: "5xl",
		minHeight: "auto",
		containerWidth: 0
	});
	const containerRef = useRef(null);

	useEffect(() => {
		const updateConfig = () => {
			if (!containerRef.current) return;

			const containerWidth = containerRef.current.offsetWidth;

			if (containerWidth < 480) {
				setConfig({
					fontSize: "2xl",
					minHeight: "70px",
					containerWidth
				});
			} else if (containerWidth < 735) {
				setConfig({
					fontSize: "4xl",
					minHeight: "90px",
					containerWidth
				});
			} else if (containerWidth < 1024) {
				setConfig({
					fontSize: "4xl",
					minHeight: "auto",
					containerWidth
				});
			} else {
				setConfig({
					fontSize: "5xl",
					minHeight: "auto",
					containerWidth
				});
			}
		};

		updateConfig();
		window.addEventListener("resize", updateConfig);

		return () => window.removeEventListener("resize", updateConfig);
	}, []);

	return { ...config, containerRef };
};

const Homepage = () => {
	const [text] = useTypewriter({
		words: ["Joshua.", "an aspiring Full-Stack Developer.", "a passionate UI/UX Designer.", "an AI Enthusiast."],
		loop: true,
		typeSpeed: 60,
		deleteSpeed: 30
	});
	const [selectedSkill, setSelectedSkill] = useState(null);
	const [selectedPost, setSelectedPost] = useState(null);
	const [open, setOpen] = useState(false);
	const [postOpen, setPostOpen] = useState(false);

	const { fontSize, minHeight, containerRef, containerWidth } = useResponsiveFontSize();

	const handleSkillClick = skill => {
		setSelectedSkill(skill);
		setOpen(true);
	};

	const handlePostClick = post => {
		setSelectedPost(post);
		setPostOpen(true);
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
					<MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} ref={containerRef} w="full">
						<Text fontSize="lg" fontFamily="mono" color="green.400" fontWeight="500" letterSpacing="0.05em" bg="blackAlpha.50" px={2} borderRadius="sm" display="inline-block">
							&lt;Text&gt;Welcome!&lt;/Text&gt;
						</Text>

						{/* Fixed height container to prevent layout shift */}
						<Box
							minHeight={minHeight}
							display="flex"
							flexDirection="column"
							justifyContent="flex-start"
						>
							<Text fontSize={fontSize} fontWeight="bold" lineHeight="1.2" color="gray.800" wordBreak="break-word" hyphens="auto" mt={containerWidth < 480 ? 2 : minHeight === "auto" ? 2 : 0} mb={1}>
								Hey 👋🏻 I'm {text}
								<Cursor cursorStyle="|" cursorColor="grey" />
							</Text>
						</Box>

						<Text fontSize="xl" color="gray.600" maxW="2xl" mb={3}>
							I have a passion for building modern Web Applications, developing innovative tools and designing intuitive User Interfaces.
						</Text>
						<Link href="/projects" isExternal _hover={{ textDecoration: "none" }}>
							<Button
								variant="outline"
								borderRadius="full"
								border="2px solid"
								borderColor="gray.800"
								bg="gray.800"
								color="white"
								px={6}
								py={5}
								fontWeight="600"
								fontSize="md"
								transition="all 0.2s ease"
								_hover={{
									bg: "white", // white background on hover
									borderColor: "white", // keep gray.800 outline
									bgGradient: "linear(to-r, #0077B5, #00A0DC)", // gradient overlay
									color: "gray.800",
									position: "relative",
									transform: "translateY(-2px)",
									boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
								}}
								_active={{
									transform: "translateY(0)"
								}}
								_focusVisible={{
									outline: "none",
									boxShadow: "none"
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
									<Icon as={FiCode} display="block" mx="auto" />
								</MotionBox>
								Explore Projects
							</Button>
						</Link>
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
					<Heading fontSize="3xl" fontWeight="700" color="gray.800" mb={5} mt={10}>
						Latest Posts
					</Heading>
					<Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} style={{ minWidth: 0, maxWidth: "100%" }} width="100%">
						{blogPosts
							.slice()
							.sort((a, b) => new Date(b.date) - new Date(a.date))
							.map((post, index) => (
								<MotionGridItem key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ minWidth: 0, maxWidth: "100%" }}>
									<Box
										p={6}
										bg="white"
										borderRadius="xl"
										border="1px solid"
										borderColor="gray.100"
										transition="all 0.3s ease"
										style={{
											width: "100%",
											minWidth: 0,
											maxWidth: "100%",
											overflow: "hidden",
											display: "flex",
											flexDirection: "column"
										}}
									>
										<Text fontSize="sm" color="gray.500" mb={2}>
											{post.date}
										</Text>

										{/* Title */}
										<Heading
											as="h3"
											fontSize="xl"
											mb={2}
											style={{
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "ellipsis",
												flexShrink: 1,
												minWidth: 0
											}}
										>
											{post.title}
										</Heading>

										{/* Excerpt */}
										<Text
											as="p"
											color="gray.600"
											mb={4}
											fontSize="md"
											style={{
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "ellipsis",
												flexShrink: 1,
												minWidth: 0
											}}
										>
											{post.body}
										</Text>

										<Box onClick={() => handlePostClick(post)} color="teal.500" fontWeight="600" style={{ cursor: "pointer" }} _hover={{ textDecoration: "underline" }}>
											Read more →
										</Box>
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
								<Dialog.CloseTrigger asChild _focusVisible={{
									outline: "none",
									boxShadow: "none"
								}}>
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
									_focusVisible={{
										outline: "none",
										boxShadow: "none"
									}}
								>
									Proceed
								</Button>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Positioner>
				</Dialog.Root>
			)}

			{selectedPost && (
				<Dialog.Root open={postOpen} onOpenChange={e => setPostOpen(e.open)} placement="center">
					<Dialog.Backdrop />
					<Dialog.Positioner>
						<Dialog.Content maxW="100vw" h="100vh" overflowY="auto" borderRadius="none" bg="white" px={{ base: 6, md: 24 }} py={12}>
							<Dialog.Header>
								<Heading fontSize="4xl" fontWeight="bold" lineHeight={1.2}>
									{selectedPost.title}
								</Heading>
							</Dialog.Header>

							<Dialog.Body mt={6}>
								<Text color="gray.500" fontSize="sm" mb={6} fontFamily={"Georgia, serif"}>
									Published on {selectedPost.date}
								</Text>
								{selectedPost.body.split("\n\n").map((body, i) => (
									<Text key={i} color="gray.800" fontSize="lg" lineHeight="1.8" mb={4} fontFamily={"Georgia, serif"}>
										{body}
									</Text>
								))}
							</Dialog.Body>

							<Dialog.Footer>
								<Center w="full">
									<Dialog.CloseTrigger asChild position="static">
										<Button
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
												borderColor: "white",
												bgGradient: "linear(to-r, #0077B5, #00A0DC)", // gradient overlay
												color: "gray.800",
												transform: "translateY(-2px)",
												boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
											}}
											_active={{
												transform: "translateY(0)"
											}}
											_focusVisible={{
												outline: "none",
												boxShadow: "none"
											}}
										>
											Return to Home
										</Button>
									</Dialog.CloseTrigger>
								</Center>
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