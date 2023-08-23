import {
	Container,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Toolbar,
} from '@mui/material';
import { styled } from 'styled-components';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const SidebarInfo = styled.div`
	margin-bottom: 5px;
`;

function Sidebar() {
	const [selectedIndex, setSelectedIndex] = useState();

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const menuList = ['Home', '신청', '조회'];
	const iconList = [<HomeIcon />, <AddBoxIcon />, <PlaylistAddCheckIcon />];

	return (
		<Drawer variant="permanent">
			<Toolbar>SW Coach</Toolbar>
			<Divider variant="middle" />
			<List sx={{ width: '12vw' }}>
				{menuList.map((item, index) => (
					<ListItem key={item} sx={{ padding: 1 }}>
						<ListItemButton
							key={index}
							selected={selectedIndex === index}
							onClick={() => handleListItemClick(index)}
							sx={{
								'&:hover': {
									backgroundColor: 'lightgray', // 마우스 오버 시 색상 변경
								},
								'&.Mui-selected': {
									backgroundColor: 'silver', // 클릭 시 색상 변경
								},
							}}
						>
							<ListItemIcon>{iconList[index]}</ListItemIcon>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider variant="middle" />
			<Stack
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					alignItems: 'center',
					flexGrow: 1,
					marginBottom: 5,
				}}
			>
				<Container>
					<SidebarInfo>이름 : {}</SidebarInfo>
					<SidebarInfo>학과 : {}</SidebarInfo>
					<SidebarInfo>학번 : {}</SidebarInfo>
					<SidebarInfo>수강신청 가능 학점 : {}</SidebarInfo>
				</Container>
			</Stack>
		</Drawer>
	);
}

export default Sidebar;
