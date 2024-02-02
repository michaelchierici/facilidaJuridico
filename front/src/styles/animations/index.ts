export const easeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

export const easeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;

  }
  `;

import { keyframes } from "styled-components";
export const modalIn = keyframes`
from {
    opacity: 0;
    transform: translateY(400px);
  }

to {
    opacity: 1;
  }
  `;

export const modalOut = keyframes`

from {
    opacity: 1;
  }

to {
    opacity: 0;
    transform: translateY(400px);

  }
`;
