import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export const Container = styled.div`
  padding: clamp(1em, 3vw, 2em);
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  & h1 {
    margin-block: 0.5em 1.5em;
    text-align: center;
    color: #323f4b;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }

  & div > input {
    padding: 0.7em;
    outline: none;
    border-radius: 5px;
    border: 1px solid #cbd2d9;
    font-weight: 500;
    font-size: 1rem;
    flex-grow: 1;
  }
`
export const Button = styled.button`
  padding: 0.5em 1em;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #d946ef;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
`
