import { Container,Row, Col, Form, Button } from "react-bootstrap";
import { useState } from 'react'
import { addTask } from '../features/task/TaskSlice';
import { useDispatch } from "react-redux";

function AddTask() {
    const dispatch = useDispatch()
    let [task, setTask] = useState('')
    function sendTaskToAdd() {
        dispatch(addTask(task))
        setTask('');
    }
    return(
  <Container>
    <Row>
        <Col>
            <h3 className="text-center text-danger mt-5">Manage Your Task Here</h3>
            <Form>
                <Form.Group className="d-flex">
                    <Form.Control type="text" style={{ width: '50%' }} value={task} onChange={(e) => setTask(e.target.value)} className="mt-3"></Form.Control>
                    <Button className="ms-2 mt-3" variant="success" onClick={sendTaskToAdd}>Add Task</Button>
                </Form.Group>
            </Form>
        </Col>
    </Row>
  </Container>
    )
}

export default AddTask;
