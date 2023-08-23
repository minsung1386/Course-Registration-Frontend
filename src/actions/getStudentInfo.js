import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function getStudentInfo() {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.user);

	const getStudent = async () => {
		try {
			const response = await axios.get('api/student', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log('RESPONSE BELOW');
			console.log(response);

			const student = {
				name: response.data.userDto.name,
				major: response.data.major,
				idNum: response.data.idNum,
				availableCredit: 18,
			};
			dispatch(setStudent(student));
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getStudent();
	});
}

export function setStudent(student) {
	return {
		type: 'SET_STUDENT_INFO',
		payload: student,
	};
}
