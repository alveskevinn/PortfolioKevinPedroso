import {
  Box,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  UnorderedList as List,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { IoBook, IoCafe, IoCall, IoHome, IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <Box bg="#fff" w="100%" boxShadow="lg">
      <Flex align="center" justify="space-between">
        <Image
          mr={2}
          boxSize="90px"
          objectFit="cover"
          src="../../../public/assets/images/Logo.png"
          alt="Logo Kevin"
        />
        <List
          listStyleType="none"
          sx={{
            "@media only screen and (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Flex gap="10" justify="end" mr="36px">
            <Link href="#">Inicio</Link>
            <Link href="#">Projetos</Link>
            <Link href="#">Contato</Link>
          </Flex>
        </List>
        <Menu>
          <MenuButton 
          as={IconButton} icon={<IoMenu size="sm" />} display='none' bg='#fff'  mr='18px'  sx={{
            "@media only screen and (max-width: 600px)": {
              display: 'flex',
            },
          }}/>
            
          <MenuList>
            <MenuItem>Inicio</MenuItem>
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Contato</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}
