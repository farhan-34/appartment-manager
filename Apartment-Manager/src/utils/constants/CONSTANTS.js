import { HomeOutlined, ApartmentOutlined, WindowOutlined,  } from "@mui/icons-material";

export const menuList = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeOutlined />
    },
    {
        name: 'Apartment',
        path: '/apartment',
        icon: <ApartmentOutlined />
    },
    {
        name: 'Rooms',
        path: '/apartment/:id/rooms',
        icon: <WindowOutlined />
    }
]