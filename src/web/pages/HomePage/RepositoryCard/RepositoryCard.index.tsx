import Link from "next/link";

import type { RepositoryCardProps } from "./RepositoryCard.types";

import * as S from "./RepositoryCard.styled";

export const RepositoryCard: React.FC<RepositoryCardProps> = ({
	title,
	url,
	description,
	stargazersCount,
}) => {
	return (
		<Link href={url} target="_blank">
			<S.Container>
				<S.TitleContainer>
					<h4>{title}</h4>
					<span>Stars: {stargazersCount}</span>
				</S.TitleContainer>
				{description && <p>{description}</p>}
			</S.Container>
		</Link>
	);
};
