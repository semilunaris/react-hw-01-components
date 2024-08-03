import styled from '@emotion/styled';

export const MainProfile = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
`;

export const Description = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Icon = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px 0;
`;

export const Tag = styled.p`
  color: #888;
  font-style: italic;
  margin: 0;
`;

export const Location = styled.p`
  color: #555;
  margin: 10px 0 20px;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

export const StatItem = styled.li`
  flex: 1;
  text-align: center;
  padding: 10px;
`;

export const Label = styled.span`
  display: block;
  color: #555;
  font-size: 0.9em;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
`;