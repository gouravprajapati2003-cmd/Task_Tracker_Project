import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { completeTask, toggleTask, deleteTask } from '../features/task/TaskSlice'
function TaskList () {
  let { items } = useSelector(state => state.task)
  const dispatch = useDispatch()
  //console.log("items = ", items);
  function doCompleteTask (id) {
    dispatch(completeTask(id))
  }
  function doToggle(id) {
      dispatch(toggleTask(id))
  }
  function doDelete(id) {
    dispatch(deleteTask(id))
  }
  return (
    <Container>
      <Row>
        <Col>
          {items.map(item => (
            <div
              className='d-flex mt-2'
              style={{ width: '50%', backgroundColor: '#f2f2f2' }}
            >
              <div className='mt-2'>
                {item.completed && (
                  <span>
                    <s>{item.content}</s>
                  </span>
                )}
                {!item.completed && (
                  <span>
                    {item.content}
                  </span>
                )}
              </div>
              <div className='ms-auto'>
                {!item.completed &&<Button
                  variant='success'
                  onClick={() => doCompleteTask(item.id)}
                >
                  Completed
                </Button>}

                {item.completed && <Button
                  variant='warning'
                  onClick={() => doToggle(item.id)}
                >
                  Undo
                </Button>}
                <Button variant='danger' className='ms-2' onClick={() => doDelete(item.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  )
}
export default TaskList
