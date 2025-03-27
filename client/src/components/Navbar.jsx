/* eslint-disable react/no-unescaped-entities */
import { Flex, Link, Icon, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';

const MotionFlex = motion(Flex);
const MotionLink = motion(Link);

const links = [
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    return (
        <MotionFlex
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 40, damping: 10 }}
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
                    bgGradient="linear(to-r, teal.600, blue.500)"
                    bgClip="text"
                    color={"black"}
                >
                    Joshua's Portfolio
                </Box>
            </Link>

            <Flex gap={8}>
                {links.map((link) => (
                    <MotionLink
                        key={link.name}
                        href={link.href}
                        fontWeight="500"
                        color="gray.600"
                        position="relative"
                        _hover={{ textDecoration: 'none' }}
                        initial={{ color: '#4A5568' }}
                        whileHover={{ color: 'black' }}
                        transition={{ duration: 0.3 }}
                    >
                        {link.name}
                    </MotionLink>
                ))}
            </Flex>
        </MotionFlex>
    );
};

export default Navbar;