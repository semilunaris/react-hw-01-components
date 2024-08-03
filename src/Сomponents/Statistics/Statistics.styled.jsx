/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Section = styled.section`
    padding: 20px;
    background-color: #2e8b57;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 0 10px;
    padding: 10px;
    width: 100px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #e9e9e9;
    }
`;

export const Label = styled.span`
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
`;

export const Percentage = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;