import Tarefa from '../../Components/Tarefa'

import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>Lista de tarefas</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
