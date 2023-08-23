import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

function SearchTable({ data }) {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>과목 코드</TableCell>
						<TableCell>과목명</TableCell>
						<TableCell>시수</TableCell>
						<TableCell>학점</TableCell>
						<TableCell>현재 수강생</TableCell>
						<TableCell>수강 정원</TableCell>
						<TableCell>담당 교수</TableCell>
						<TableCell>강의 시간</TableCell>
						<TableCell>과목 설명</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((course, index) => (
						<TableRow key={index}>
							<TableCell>{course.courseId}</TableCell>
							<TableCell>{course.title}</TableCell>
							<TableCell>{course.hours}</TableCell>
							<TableCell>{course.credit}</TableCell>
							<TableCell>{course.currentEnrolled}</TableCell>
							<TableCell>{course.maxCapacity}</TableCell>
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
