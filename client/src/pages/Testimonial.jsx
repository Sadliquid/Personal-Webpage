/* eslint-disable react/no-unescaped-entities */
import { Box, Text, VStack, Heading, Button, Icon, Flex, Dialog, CloseButton, Portal, Image, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const MotionBox = motion.create(Box);

const Testimonial = () => {
	const [isOpen, setIsOpen] = useState(false);

	const testimonialContent = [
		"Joshua Long Yu Xuan was a student of Xinmin Secondary School from 2019 - 2022, where he pursued and completed a course leading to the GCE O-Level Examination in 2022.",
		"Joshua is a dependable young man with a strong sense of responsibility. He made plans to ensure that the deadlines for school projects, such as decorating the classroom for Chinese New Year, and the production of video for class graduation, were met. As the Class Vice-Chairman for his graduating class in 2022, he demonstrated effective time management when juggling his academics, CCA and his duties in the Class Committee.",
		"As a friend, he is a good listener and generous in providing his time and company during his friends' times of need. Joshua planned his revision for National Examinations early, and he encouraged his friends to do the same, often checking on their progress and rendering assistance if they encountered any difficulty in their revision.",
		"Joshua was an active member of his Co-Curricular Activity (CCA) - Media Club / Digital Media from 2019 - 2022. His skills with the stage equipment were heavily depended upon during various school performances and events, such as the Chinese New Year Celebration, Student Council Investiture Livestream and Mother Tongue Festival Livestream in 2022. Joshua took care to ensure the media equipement was set up and functioning prior, and during, each event. Should technical hiccups occured during the events, he was quick to rectify and provide solutions. After he had stepped down from his CCA in March 2022, he did not hesitate to offer his assistance to his juniors when they had to provide media support at National School Games Volleyball Championships. His juniors spoke highly of his dedication to his CCA and appreciated his guidance to them as they trained to take over his role.",
		"Over the years, Joshua had also found time to participate in various school-initiated community projects, such as volunteering at Thye Hua Kwan Nursing Home in Hougang, planning activities and befriending the elderly in our neighbourhood via XinminCares, distribution of pamphlets to raise awareness of the importance of recycling during Spring-it-up. Through all these projects, Joshua was observed to be patient and respectful in his interaction with the elderly. He was also a cooperative worker who followed his team leader's directions during Spring-it-Up.",
		"The abovementioned positive qualities will stand Joshua in good stead for the future. We believe Joshua will certainly be a valuable and contributing member to any organisation that he chooses to join."
	];

	return (
		<Box minH="100vh" pt={24} px={{ base: 4, md: 8, lg: 16 }} bg="gray.50" position="relative" overflowX="hidden">
			<MotionBox initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
				<VStack spacing={12} maxW="4xl" mx="auto" mb={8} align="start">
					{/* Testimonial Card */}
					<VStack w="full" bg="white" borderRadius="xl" border="1px solid" borderColor="gray.100" boxShadow="md" p={{ base: 6, md: 8 }} spacing={6} align="start">
						{/* Signature + Desktop Button */}
						<Flex direction={{ base: "column", md: "row" }} align={{ base: "start", md: "center" }} justify="space-between" w="full" pb={4} borderBottom="1px solid" borderColor="gray.100">
							<VStack align="start" spacing={0}>
								<Text fontSize="xl" fontWeight="600" color="gray.800">
									Mrs Annie Ng
								</Text>
								<Text fontSize="md" color="gray.500">
									Form Teacher, Xinmin Secondary School
								</Text>
								<Text fontSize="sm" color="gray.400" mt={1}>
									~2022
								</Text>
							</VStack>

							{/* Desktop-only trigger */}
							<Box display={{ base: "none", md: "block" }}>
								<Dialog.Root open={isOpen} onOpenChange={e => setIsOpen(e.open)}>
									<Dialog.Trigger asChild>
										<Button
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
										>
											View Official Print
										</Button>
									</Dialog.Trigger>
									<Portal>
										<Dialog.Backdrop />
										<Dialog.Positioner>
											<Dialog.Content borderRadius="xl">
												<Dialog.Header>
													<Dialog.Title fontSize="xl" fontWeight="600">
														Official Print
													</Dialog.Title>
												</Dialog.Header>
												<Dialog.Body>
													<Image
														src="/testimonial/testimonialP1.jpg"
														alt="Official testimonial document"
														borderRadius="md"
														w="full"
														border="1px solid"
														borderColor="gray.200"
													/>

													<Image
														src="/testimonial/testimonialP2.jpg"
														alt="Official testimonial document"
														borderRadius="md"
														w="full"
														border="1px solid"
														borderColor="gray.200"
													/>
												</Dialog.Body>

												<Dialog.Footer>
													<Dialog.ActionTrigger asChild>
														<Button>Close</Button>
													</Dialog.ActionTrigger>
												</Dialog.Footer>
											</Dialog.Content>
										</Dialog.Positioner>
									</Portal>
								</Dialog.Root>
							</Box>
						</Flex>

						{/* Testimonial Content */}
						<VStack spacing={6} align="start" w="full" pt={2}>
							{testimonialContent.map((paragraph, index) => (
								<Box key={index} mb={6}>
									<Text fontSize={{ base: "sm", md: "md" }} color="gray.500" lineHeight="tall" textAlign="justify">
										{paragraph}
									</Text>
								</Box>
							))}
						</VStack>

						<Box w="full" display={{ base: "block", md: "none" }} pt={4}>
							<Center>
								<Dialog.Root open={isOpen} onOpenChange={e => setIsOpen(e.open)}>
									<Dialog.Trigger asChild>
										<Button
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
										>
											View Official Print
										</Button>
									</Dialog.Trigger>
								</Dialog.Root>
							</Center>
						</Box>
					</VStack>
				</VStack>
			</MotionBox>
		</Box>
	);
};

export default Testimonial;