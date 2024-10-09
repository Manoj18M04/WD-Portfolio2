import styled from "styled-components";

export const TextLoop = styled.div`
  font-weight: 450;
  font-size: 1.4rem;
  display: flex;
  overflow: hidden; 
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
   
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;


export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  color: #5da94b;
`;