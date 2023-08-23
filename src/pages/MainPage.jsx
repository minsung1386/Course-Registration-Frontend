import React from 'react';
import { styled } from 'styled-components';
import Sidebar from 'components/Main/Sidebar';
import SearchField from 'components/Main/SearchField';

const MainPageLayout = styled.div`
	display: flex;
	margin-top: 7vh;
	margin-left: 14vw;
`;

function MainPage() {
	return (
		<MainPageLayout>
			<Sidebar />
			<SearchField />
		</MainPageLayout>
	);
}

export default MainPage;
