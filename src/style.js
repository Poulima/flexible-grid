import styled from 'styled-components';
import { media } from './Media';

export const FlexibleGrid = styled.div`

.header {
  font-size: 24px;
  text-align: center;
  color: #444;
}
.grid-container {
  margin: 0px;
  padding: 0px !important;
  max-width: 100% !important;
}

.parent-block {
  padding: 10px 0px;
  margin: 0px !important;
  width: inherit;
}

.block {
  border: 1px solid #333;
  margin: 0px !important;
  width: calc( 25% - 2px);
  height: auto;
  ${media.sm`width: calc( 50% - 2px);`};
  ${media.xs`width: calc( 100% - 2px);`};
}

.sub-block {
  border: 1px solid #333;
  padding: 10px;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
}
`;
