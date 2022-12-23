import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import TodoList from "../../Component/TodoList/TodoList"
import { ApplicationState } from "../../Redux/reducers/rootReducer"
import package_json from "../../../package.json"
import { Helmet } from "react-helmet"

const TodoListPage: React.FC = (props) => {
  const todos = useSelector((state: ApplicationState) => {
    return state.todoReducer.allTodo
  })

  if (Array.isArray(todos)) {
    return (
      <div>
        <Helmet>
          <title>Todo List</title>
        </Helmet>
        <TodoList items={todos} />
        <footer>Version Number Current: {package_json.version}</footer>
      </div>
    )
  }
  return <div>loading...</div>
}

export default withRouter(TodoListPage)
