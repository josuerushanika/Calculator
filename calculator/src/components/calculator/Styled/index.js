import styled form 'styled-components'

export const Container = styled.div`
      display: grid;
      justify-content: center;
      align-content: center;
      width: 400px;
      margin: 40px auto;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: minmax(120px,auto);
`