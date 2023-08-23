import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@mui/material';

function SearchTable({ data }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell sx={{ width: '5vw' }}>학수번호</TableCell>
						<TableCell sx={{ width: '7vw' }}>과목명</TableCell>
						<TableCell sx={{ width: '3.5vw' }}>학점(시수)</TableCell>
						<TableCell sx={{ width: '3vw' }}>신청/제한 </TableCell>
						<TableCell sx={{ width: '3vw' }}>교강사</TableCell>
						<TableCell sx={{ width: '16vw' }}>강의 시간</TableCell>
						<TableCell sx={{ width: '30vw' }}>과목 설명</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((course, index) => (
						<TableRow key={index}>
							<TableCell>
								<Button variant="contained">신청</Button>
							</TableCell>
							<TableCell>{course.courseId}</TableCell>
							<TableCell>{course.title}</TableCell>
							<TableCell>
								{course.credit}({course.hours})
							</TableCell>
							<TableCell>
								{course.currentEnrolled}/{course.maxCapacity}
							</TableCell>
							<TableCell>{course.instructor}</TableCell>
							<TableCell>{course.schedule}</TableCell>
							<TableCell>{course.description}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default SearchTable;
