import { TaskBlock, TaskCreateBtn, TaskForm, TaskInput } from "./style";

function Task() {
    return (
        <TaskBlock>
            <h2>Todo List</h2>
            <TaskForm>
                <TaskInput />
                <TaskCreateBtn>Add Task</TaskCreateBtn>
            </TaskForm>

        </TaskBlock>
    )
}
export default Task;