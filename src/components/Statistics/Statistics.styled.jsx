import styled from '@emotion/styled';

export const StatisticsItem = styled.li`
    font-size: ${p => p.theme.fontSizes[3]}px;

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[2]}px;
    }
`