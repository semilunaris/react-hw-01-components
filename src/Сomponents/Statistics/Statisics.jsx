import { Section, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                ))}
            </StatList>
        </Section>
    );
};