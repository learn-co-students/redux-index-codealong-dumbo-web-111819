import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodosContainer = (props) => {
    // console.log(props)
    const renderTodos = () => {
        console.log(props);
        
        return props.todos.map(todo => <Todo todo ={todo}/>)
    }
    return (
        <div>
            {renderTodos()}
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(TodosContainer)
