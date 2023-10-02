import {useState} from 'react'
import {MainContainer, Container, Button} from './HomeStyles'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [saved, setSaved] = useState(false)

  return (
    <MainContainer>
      <Container>
        <h1>Editable Text Input</h1>
        <div>
          {saved ? (
            <p>{inputValue}</p>
          ) : (
            <input
              type="text"
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
            />
          )}
          <Button type="button" onClick={() => setSaved(prev => !prev)}>
            {saved ? 'Edit' : 'Save'}
          </Button>
        </div>
      </Container>
    </MainContainer>
  )
}
