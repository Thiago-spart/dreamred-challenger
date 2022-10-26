/* eslint-disable multiline-ternary */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import type { KeyboardEvent } from "react";
import React from "react";
import useGeolocation from "react-hook-geolocation";

import { githubApi } from "services/api/github";
import { weatherApi } from "services/api/weather";

import { Button } from "web/components/Button/Button.index";
import { SearchInput } from "web/components/SearchInput/SearchInput.index";

import type { RepositoryProps } from "types/interfaces/githubData";
import type { WeatherDataProps } from "types/interfaces/weatherData";

import * as S from "./HomePage.styled";
import { RepositoryCard } from "./RepositoryCard/RepositoryCard.index";

export const HomePage: React.FC = () => {
	const [searchValue, setSearchValue] = React.useState("");
	const [repositories, setRepositories] =
		React.useState<Array<RepositoryProps>>();
	const [weatherData, setWeatherData] = React.useState<WeatherDataProps>();
	const geolocation = useGeolocation();

	const updateSearchCountry = (newValue: string) => {
		setSearchValue(newValue);
	};

	const HandleSearch = async () => {
		if (searchValue === "") return;

		try {
			const req = await githubApi.get(`users/${searchValue}/repos`);

			const searchedRepositories = req.data;

			setRepositories(searchedRepositories);
		} catch (error) {
			alert("User not found, please be sure if the user's name is correct");
		}
	};

	const SearchOnEnter = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter") {
			HandleSearch();
		}
	};

	const getWeatherData = async () => {
		const weatherReq = await weatherApi.get("v1/forecast.json", {
			params: {
				key: String(process.env.NEXT_PUBLIC_WEATHER_API_KEY),
				q: `${geolocation.latitude},${geolocation.longitude}`,
				aqi: "no",
				days: 1,
				alerts: "no",
			},
		});

		setWeatherData(weatherReq.data);
	};

	React.useEffect(() => {
		getWeatherData();
	}, [geolocation]);

	return (
		<S.Container onKeyDown={SearchOnEnter}>
			<S.TitleContainer>
				<h1>Github Search User</h1>

				<S.WeatherInformation>
					{geolocation.error ? (
						<span>
							To see information about your location, please allow the
							geolocation
						</span>
					) : (
						<span>
							your city: {weatherData?.location.name},{" "}
							{weatherData?.location.region}. {weatherData?.current.temp_c}°
							<img
								src={weatherData?.current.condition.icon}
								alt={weatherData?.current.condition.text}
							/>
						</span>
					)}
				</S.WeatherInformation>
			</S.TitleContainer>

			<p>Search for a list of a Github's user repositories.</p>

			<S.SearchContainer>
				<SearchInput
					placeholder="Search..."
					onChange={e => updateSearchCountry(e.target.value)}
					value={searchValue}
				/>
				<Button onClick={HandleSearch} schema="primary" type="button">
					Search
				</Button>
			</S.SearchContainer>

			<S.RepositoriesContainer>
				{repositories?.map(repository => (
					<RepositoryCard
						key={repository.name}
						title={repository.name}
						url={repository.url}
						description={repository.description}
						stargazersCount={repository.stargazers_count}
					/>
				))}
			</S.RepositoriesContainer>
		</S.Container>
	);
};
