import { TaskBlock, TaskCreateBtn, TaskForm, TaskInput, TaskTypeCount } from "./style";

function Task() {
    return (
        <TaskBlock>
            <h2>Todo List</h2>
            <TaskForm>
                <TaskInput />
                <TaskCreateBtn>Add Task</TaskCreateBtn>
                <TaskTypeCount>Pending Tasks Count</TaskTypeCount>
            </TaskForm>

        </TaskBlock>
    )
}
export default Task;