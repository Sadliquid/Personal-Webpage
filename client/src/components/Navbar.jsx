/* eslint-disable react/no-unescaped-entities */
import { Flex, Link, Icon, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';

const MotionFlex = motion.create(Flex);
const MotionLink = motion.create(Link);
const MotionBox = motion.create(Box);

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
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
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
            <Link href="#" display="flex" alignItems="center" gap={2} textDecoration={"none"}>
                <Icon as={FiTerminal} w={6} h={6} color="teal.500" />
                <MotionBox
                    as="span"
                    fontSize="xl"
                    fontWeight="bold"
                    position="relative"
                    color="black"
                    css={{
                        '&:hover::after': {
                            transform: 'scaleX(1)',
                            opacity: 1
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            bottom: '-4px',
                            left: '0',
                            backgroundColor: 'rgba(49, 151, 149, 0.7)',
                            transform: 'scaleX(0)',
                            transformOrigin: 'center',
                            opacity: 0,
                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
                        }
                    }}
                >
                    Joshua's Portfolio
                </MotionBox>
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
                            initial={{ color: isActive ? '#000000' : '#4A5568' }}
                            whileHover={{ color: '#000000' }}
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