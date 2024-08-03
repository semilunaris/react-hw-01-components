import styled from '@emotion/styled';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    min-width: 400px;
`;

export const Thead = styled.thead`
    background-color: #f4f4f4;
`;

export const Th = styled.th`
    padding: 12px 15px;
    text-align: left;
    border-bottom: 2px solid #ddd;
`;

export const Td = styled.td`
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`;

export const Tr = styled.tr`
    &:nth-of-type(even) {
        background-color: #f9f9f9;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;