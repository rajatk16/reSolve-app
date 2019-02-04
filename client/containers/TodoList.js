import React from 'react';
import {connect} from 'react-redux';
import {connectViewModel} from 'resolve-redux';
import {bindActionCreators} from 'redux';
import { ListGroup, ListGroupItem, Checkbox, ControlLabel, Row, Col, FormControl, Button } from 'react-bootstrap';

export class TodoList extends React.PureComponent {
  state = {
    itemText: ''
  }

  createTodoItem = () => {
    this.props.createTodoItem('Todo-list-1', {
      text: this.state.itemText,
      id: Date.now().toString()
    })
    this.setState({
      itemText: ''
    })
  }

  updateItemText = event => {
    this.setState({
      itemText: event.target.value
    })
  }

  onItemTextPressEnter = event => {
    if (event.charcode === 13) {
      event.preventDefault()
      this.createTodoItem()
    }
  }

  render() {
    const completeTodoItem = this.props.completeTodoItem;
    const list = (this.props.data && this.props.data.list) || []

    return (
      <div style={{maxWidth: '500px', margin: 'auto'}}>
        <ListGroup>
          {list.map(task => (
            <ListGroupItem key={task.id}>
              <Checkbox
                inline
                checked={task.mark}
                onChange={completeTodoItem.bind(null, 'Todo-list-1', {
                  id: task.id
                })}
              >
                {task.text}
              </Checkbox>
            </ListGroupItem>
          ))}
        </ListGroup>
        <ControlLabel>Task Name</ControlLabel>
        <Row>
          <Col md={8}>
            <FormControl
              className="example-form-control"
              type="text"
              value={this.state.itemText}
              onChange={this.updateItemText}
              onKeyPress={this.onItemTextPressEnter}
            />
          </Col>
          <Col md={4}>
            <Button
              className="example-button"
              bsStyle="success"
              onClick={this.createTodoItem}
            >
              Add Task
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export const mapStateToOptions = (state, ownProps) => {
  return {
    viewModelName: 'ToDoList',
    aggregateIds: ['Todo-list-1']
  }
}

export const mapDispatchToProps = (dispatch, {aggregateActions}) =>
  bindActionCreators(
    {
      ...aggregateActions
    },
    dispatch
  )


export default connectViewModel(mapStateToOptions)(
  connect(
    null,
    mapDispatchToProps
  )(TodoList)
)