import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import TodoList from "../../Component/TodoList/TodoList"
import { ApplicationState } from "../../Redux/reducers/rootReducer"
import package_json from "../../../package.json"

const TodoListPage: React.FC = (props) => {
  const todos = useSelector((state: ApplicationState) => {
    return state.todoReducer.allTodo
  })

  if (Array.isArray(todos)) {
    return (
      <div>
        <TodoList items={todos} />
        <footer>Version Number: {package_json.version}</footer>
      </div>
    )
  }
  return <div>loading...</div>
}

export default withRouter(TodoListPage)
