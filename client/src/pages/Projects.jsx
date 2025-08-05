/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Heading, SimpleGrid, GridItem, Image, Button, Icon, Flex, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const MotionGridItem = motion.create(GridItem);

const projects = [
	{
		title: "Portfolio Website",
		description: "A personal portfolio built with React, Chakra UI, and Framer Motion showcasing my projects and skills.",
		image: "/portfolio-screenshot.png",
		githubUrl: "https://your-domain.com",
		codeUrl: "https://github.com/username/portfolio",
		tech: ["React", "Chakra UI", "Framer Motion"]
	},
	{
		title: "Task Manager App",
		description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates.",
		image: "/task-manager.png",
		githubUrl: "https://your-domain.com",
		tech: ["Next.js", "Node.js", "MongoDB"]
	},
	{
		title: "E-commerce Platform",
		description: "An online store with product listings, shopping cart, and payment integration using Stripe.",
		image: "/ecommerce.png",
		githubUrl: "https://your-domain.com",
		tech: ["Next.js", "Stripe API", "Firebase"]
	},
	{
		title: "Portfolio Website",
		description: "A personal portfolio built with React, Chakra UI, and Framer Motion showcasing my projects and skills.",
		image: "/portfolio-screenshot.png",
		githubUrl: "https://your-domain.com",
		codeUrl: "https://github.com/username/portfolio",
		tech: ["React", "Chakra UI", "Framer Motion"]
	},
	{
		title: "Task Manager App",
		description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates.",
		image: "/task-manager.png",
		githubUrl: "https://your-domain.com",
		tech: ["Next.js", "Node.js", "MongoDB"]
	},
	{
		title: "E-commerce Platform",
		description: "An online store with product listings, shopping cart, and payment integration using Stripe.",
		image: "/ecommerce.png",
		githubUrl: "https://your-domain.com",
		tech: ["Next.js", "Stripe API", "Firebase"]
	}
];

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const Projects = () => {
	return (
		<Box minH="100vh" pt={24} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50" position="relative" overflow="hidden">
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
									<Link href={proj.githubUrl} isExternal _hover={{ textDecoration: "none" }} width="100%">
										<Button
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
											<Icon as={FiGithub} display="inline-block" />
											View on GitHub
										</Button>
									</Link>
								</Flex>
							</Box>
						</Box>
					</MotionGridItem>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Projects;
