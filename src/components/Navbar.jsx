import { Flex, Link, Icon, Box, Button, Drawer, Portal, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const MotionFlex = motion.create(Flex);
const MotionLink = motion.create(Link);
const MotionBox = motion.create(Box);

const links = [
	{ name: "Home", href: "/" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Testimonial", href: "/testimonial" },
	{ name: "Projects", href: "/projects" }
];

const Navbar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<MotionFlex
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 150, damping: 15 }}
			position="fixed"
			w="100%"
			bg="white"
			px={8}
			py={4}
			justify="space-between"
			align="center"
			zIndex="999"
			borderBottom="1px solid"
			borderColor="gray.100"
			boxShadow="sm"
			minH="69px"
		>
			<Link href="#" display="flex" alignItems="center" gap={2} textDecoration="none">
				<Icon as={FiTerminal} w={6} h={6} color="teal.500" />
				<Flex hideFrom="base" display={{ base: "none", md: "flex" }} align="center" gap={2}>
					<MotionBox
						as="span"
						fontSize="xl"
						fontWeight="bold"
						position="relative"
						color="black"
						css={{
							"&:hover::after": {
								transform: "scaleX(1)",
								opacity: 1
							},
							"&::after": {
								content: '""',
								position: "absolute",
								width: "100%",
								height: "2px",
								bottom: "-4px",
								left: "0",
								backgroundColor: "rgba(49, 151, 149, 0.7)",
								transform: "scaleX(0)",
								transformOrigin: "center",
								opacity: 0,
								transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease"
							}
						}}
					>
						Joshua's Webpage
					</MotionBox>
				</Flex>
			</Link>

			{/* Desktop nav links */}
			<Flex gap={8} hideBelow="md">
				{links.map(link => {
					const isActive = location.pathname === link.href;
					return (
						<MotionLink
							key={link.name}
							href={link.href}
							fontWeight={isActive ? "600" : "500"}
							color={isActive ? "black" : "gray.600"}
							position="relative"
							_hover={{ textDecoration: "none" }}
							initial={{ color: isActive ? "#000000" : "#4A5568" }}
							whileHover={{ color: "#000000" }}
							transition={{ duration: 0.3 }}
						>
							{link.name}
							{isActive && <Box as="span" position="absolute" bottom="-4px" left="0" right="0" height="2px" bg="teal.500" borderRadius="sm" />}
						</MotionLink>
					);
				})}
			</Flex>

			{/* Mobile hamburger & drawer */}
			<Drawer.Root placement="top">
				<Drawer.Trigger asChild>
					<Button variant="ghost" size="sm" display={{ base: "flex", md: "none" }}>
						<Icon as={FiMenu} w={6} h={6} />
					</Button>
				</Drawer.Trigger>
				<Portal>
					<Drawer.Backdrop />
					<Drawer.Positioner>
						<Drawer.Content roundedBottom="l3">
							<Drawer.Header>
								<Text fontSize="lg" fontFamily="mono" color="green.500" fontWeight="500" letterSpacing="0.05em" bg="blackAlpha.50" p={2} borderRadius="sm" display="inline-block">
									&lt;Text&gt;Joshua's Webpage&lt;/Text&gt;
								</Text>
							</Drawer.Header>
							<Drawer.Body>
								<Flex direction="column" gap={1}>
									{links.map(link => {
										const isActive = location.pathname === link.href;
										return (
											<Drawer.ActionTrigger key={link.name} asChild>
												<Button
													onClick={() => navigate(link.href)}
													display="block"
													w="100%"
													h={12}
													my={1}
													borderRadius="md"
													fontWeight={isActive ? "600" : "500"}
													color={isActive ? "white" : "gray.700"}
													bg={isActive ? "rgba(49, 151, 149, 0.7)" : "transparent"}
													transition="all 0.2s"
													textAlign={"left"}
													_hover={{
														textDecoration: "none",
														bg: "white", // white background on hover
														borderColor: "white", // keep gray.800 outline
														bgGradient: "linear(to-r, #0077B5, #00A0DC)", // gradient overlay
														color: "gray.800",
														position: "relative",
														transform: "translateY(-2px)",
														boxShadow: "0 4px 12px rgba(0, 119, 181, 0.25)"
													}}
													_focusVisible={{
														outline: "none",
														boxShadow: "none"
													}}
												>
													{link.name}
												</Button>
											</Drawer.ActionTrigger>
										);
									})}
								</Flex>
							</Drawer.Body>
							<Drawer.Footer style={{ display: "flex", justifyContent: "center" }}>
								<Drawer.ActionTrigger asChild>
									<Button w="100%" variant="outline" _focusVisible={{
										outline: "none",
										boxShadow: "none"
									}}>
										Close
									</Button>
								</Drawer.ActionTrigger>
							</Drawer.Footer>
						</Drawer.Content>
					</Drawer.Positioner>
				</Portal>
			</Drawer.Root>
		</MotionFlex>
	);
};

export default Navbar;
