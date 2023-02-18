import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import a from './assets/a.svg';

export default function MyNavbar() {
    const navList = (
        <ul className=" flex mb-0 mt-0 flex-row items-center gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Home Page
                </a>
            </Typography>
            <Menu>
                <MenuHandler>
                    <Avatar src={a} alt="avatar" variant="circular"/>
                </MenuHandler>
                <MenuList>
                    <MenuItem>Logout</MenuItem>
                    <MenuItem>Profile</MenuItem>
                </MenuList>
            </Menu>
        </ul>
    );

    return (
        <Navbar className="w-[100%] rounded-[0px] shadow-none px-8 py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span>Senyuman.ID</span>
                </Typography>
                {navList}
            </div>
        </Navbar>
    );
}