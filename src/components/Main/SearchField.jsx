import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchTable from './SearchTable';

function SearchField() {
	const { token } = useSelector((state) => state.user);
	const [searchText, setSearchText] = useState('');
	const [searchData, setSearchData] = useState([]);

	const handleSearch = async () => {
		try {
			const response = await axios.get(`/api/course/total?keyword=${searchText}`, {
				headers: {
					// Authorization header 에 JWT token 포함
					Authorization: `Bearer ${token}`,
				},
			});

			setSearchData(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleKeyDown = (event) => {
		if (event.code === 'Enter') {
			handleSearch();
		}
	};

	const handleInputChange = (event) => {
		setSearchText(event.target.value);
	};

	return (
		<div>
			<TextField
				label="검색"
				value={searchText}
				onChange={handleInputChange}
				variant="outlined"
				size="small"
				onKeyDown={handleKeyDown}
			/>
			<IconButton onClick={handleSearch}>
				<SearchIcon />
			</IconButton>
			<SearchTable data={searchData} />
		</div>
	);
}

export default SearchField;
