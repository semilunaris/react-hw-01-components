/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
    border-radius: 8px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #e9e9e9;
    }
`;

export const Status = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    margin-right: 15px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 15px;
    border: 2px solid #ddd;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0;
`;