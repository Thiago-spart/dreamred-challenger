import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 2rem;
	gap: 1rem;

	p {
		font-weight: 300;
		font-size: 1.6rem;
		line-height: 2rem;
		letter-spacing: 0.15rem;
	}
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;

	h1 {
		font-size: 4.2rem;
		line-height: 5.2rem;
		letter-spacing: 0.25rem;
		font-weight: 300;
	}

	@media screen and (min-width: 769px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const WeatherInformation = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	img {
		width: 20px;
		height: 20px;
		object-fit: cover;
	}
`;

export const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-direction: column;
	gap: 1rem;

	button,
	label {
		width: 100%;
	}

	@media screen and (min-width: 769px) {
		flex-direction: row;
		gap: 0.5rem;

		label {
			width: 70%;
		}

		button {
			width: 30%;
		}
	}
`;

export const RepositoriesContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;

	margin-top: 4rem;
`;
