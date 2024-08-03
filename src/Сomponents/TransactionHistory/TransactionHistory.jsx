import React from 'react';
import { Table, Thead, Th, Td, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Thead>
                <tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </tr>
            </Thead>
            <tbody>
                {items.map(({ type, amount, currency }, index) => (
                    <Tr key={index}>
                        <Td>{type}</Td>
                        <Td>{amount}</Td>
                        <Td>{currency}</Td>
                    </Tr>
                ))}
            </tbody>
        </Table>
    );
};