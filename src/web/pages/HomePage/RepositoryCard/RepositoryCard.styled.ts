import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 0.5rem;

	border-radius: 0.75rem;
	padding: 1.2rem 1rem;

	width: 100%;
	min-height: 10rem;

	transition: 0.2s;

	&:hover,
	&:focus-visible,
	&:focus {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
