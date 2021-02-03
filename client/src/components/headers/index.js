import HeaderSkeleton from "components/headers/HeaderSkeleton";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { MdHome, MdSettings, MdExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";

const CustomMenu = () => {
  const menuStyle = {
    color: "dark.300",
    border: "1px solid",
    padding: "8px",
    borderColor: "dark.300",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    _hover: {
      bg: "dark.200",
      color: "light.300",
    },
  };
  return (
    <Menu>
      <MenuButton {...menuStyle} rightIcon={<ChevronDownIcon />}>
        Profile
      </MenuButton>
      <MenuList
        bg="light.200"
        border="1px solid"
        borderRadius="0"
        fontSize="14px"
      >
        <MenuItem icon={<MdHome />} letterSpacing="2px" fontWeight="light">
          Home
        </MenuItem>
        <MenuItem icon={<MdSettings />} letterSpacing="2px" fontWeight="light">
          Settings
        </MenuItem>
        <MenuItem icon={<MdExitToApp />} letterSpacing="2px" fontWeight="light">
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const privateHeader = () => {
  const left = <Link to="/poet">Scroll and Feather</Link>;
  const center = <Spacer />;
  const right = <CustomMenu />;
  return <HeaderSkeleton left={left} center={center} right={right} />;
};

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

export const publicHeader = () => {
  const left = <Link to="/">Scroll and Feather</Link>;
  const center = <CircleIcon boxSize={4} color="red.500" />;
  const right = <Link to="/login">Login / Signup</Link>;
  return <HeaderSkeleton left={left} center={center} right={right} />;
};

export const loginHeader = () => {
  const left = <Link to="/">Scroll and Feather</Link>;
  const center = <CircleIcon boxSize={4} color="red.500" />;
  const right = <Spacer />;
  return <HeaderSkeleton left={left} center={center} right={right} />;
};
