import tw from 'tailwind-styled-components'
import { Suspense } from 'react'
import { TodoForm } from './components/todo-form'
import { TodoList } from './components/todo-list'
import { TodoHeaderText } from './components/todo-header-text'
import { DarkModeSelector } from './components/dark-mode-selector'

const Container = tw.div`
  container
  max-w-[970px]
  flex
  flex-col
`

const Header = tw.header`
  h-[300px]
  flex
  flex-col
  justify-end
  fixed
  w-full
  bg-background
`

const Main = tw.main`
  pt-[340px]
`

export default async function Home() {
  return (
    <>
      <Header>
        <Container className="space-y-14">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex items-center justify-between">
              <TodoHeaderText />
              <DarkModeSelector />
            </div>
          </Suspense>
          <TodoForm />
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <TodoList />
          </Suspense>
        </Container>
      </Main>
    </>
  )
}
