/* eslint-disable react/no-unescaped-entities */
import { Flex, Link, Icon, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';

const MotionFlex = motion.create(Flex);
const MotionLink = motion.create(Link);

const links = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonial', href: '/testimonial' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
    const location = useLocation();

    return (
        <MotionFlex
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
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
        >
            <Link href="#" display="flex" alignItems="center" gap={2}>
                <Icon as={FiTerminal} w={6} h={6} color="teal.500" />
                <Box
                    as="span"
                    fontSize="xl"
                    fontWeight="bold"
                    bgColor={"teal.300"}
                    bgClip="text"
                    color={"black"}
                >
                    Joshua's Portfolio
                </Box>
            </Link>

            <Flex gap={8}>
                {links.map((link) => {
                    const isActive = location.pathname === link.href;
                    
                    return (
                        <MotionLink
                            key={link.name}
                            href={link.href}
                            fontWeight={isActive ? '600' : '500'}
                            color={isActive ? 'black' : 'gray.600'}
                            position="relative"
                            _hover={{ textDecoration: 'none' }}
                            initial={{ color: isActive ? 'black' : '#4A5568' }}
                            whileHover={{ color: 'black' }}
                            transition={{ duration: 0.3 }}
                        >
                            {link.name}
                            {isActive && (
                                <Box
                                    as="span"
                                    position="absolute"
                                    bottom="-4px"
                                    left="0"
                                    right="0"
                                    height="2px"
                                    bg="teal.500"
                                    borderRadius="sm"
                                />
                            )}
                        </MotionLink>
                    );
                })}
            </Flex>
        </MotionFlex>
    );
};

export default Navbar;