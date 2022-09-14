import { css } from '@emotion/react'
import { colors, mq } from '@/styles/cmn.styles'

const styles = () => {
  return css`
    .button {
      background-color: ${colors.link};
      border-color: ${colors.link};
      color: #fff;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: linear;
      font-weight: bold;

      &::before {
        content: 'SPで表示';
      }

      ${mq('sm')} {
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        &::before {
          content: 'PCで表示';
        }
      }

      &:hover {
        opacity: 0.8;
      }
    }
  `
}

export default styles
