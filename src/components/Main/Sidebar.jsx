import { React, useState } from 'react';
import { useSelector } from 'react-redux';
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
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { getStudentInfo } from 'actions/getStudentInfo';

const SidebarInfo = styled.div`
	margin-bottom: 5px;
`;

function Sidebar() {
	// load student info
	getStudentInfo();

	const { student } = useSelector((state) => state.user);
	console.log(student);

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
					<SidebarInfo>이름 : {student.name}</SidebarInfo>
					<SidebarInfo>학과 : {student.major}</SidebarInfo>
					<SidebarInfo>학번 : {student.idNum}</SidebarInfo>
					<SidebarInfo>수강신청 가능 학점 : {student.availableCredit}</SidebarInfo>
				</Container>
			</Stack>
		</Drawer>
	);
}

export default Sidebar;
