import { useState } from "react";
import { ErrorText, TaskBlock, TaskCountBlock, TaskCreateBtn, TaskForm, TaskInput, TaskText, TaskTypeCount } from "./style";

function Task() {
    const [taskText, setTaskText] = useState('');
    const [error, setError] = useState('');
    const [taskArr, setTaskArr] = useState([]);
    const [pendingTaskCount, setPendingTaskCount] = useState(0);
    const [completedTaskCount, setCompletedTaskCount] = useState(0);

    function changeTaskText (e) {
        setTaskText(e)
        setError('');
    }

    function resetInput() {
        setTaskText('');
    }
    
    function countPendingTasks() {
        setPendingTaskCount(prevPendingTaskCount => prevPendingTaskCount + 1);
    }
    function countCompletedTasks() {
        setCompletedTaskCount(prevCompletedTaskCount => prevCompletedTaskCount + 1);
    }
    function addTask() {
        if (taskText) {
            setTaskArr(prevTaskArr => [...prevTaskArr, { text: taskText, id: pendingTaskCount, status: false }]);
            countPendingTasks();
            resetInput();
        }
        else {
            setError('Fill the empty field');
        }
    }
    function completePendingTask() {
        setPendingTaskCount(prevPendingTaskCount => prevPendingTaskCount - 1);
    }
    function completeTask(id) {
        const newTaskArr = [...taskArr];
        newTaskArr.forEach(item => {
            if (item.id === id) {
                item.status = true;
            }
        })
        setTaskArr(newTaskArr);
        countCompletedTasks();
        completePendingTask();
    }

    function _handleKeyDown(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    return (
        <TaskBlock>
            <h2>Todo List</h2>
            <TaskForm>
                <TaskInput error={error} onKeyDown={_handleKeyDown} type='text' value={taskText} onChange={e => changeTaskText(e.target.value)} />
                <TaskCreateBtn onClick={addTask}>Add Task</TaskCreateBtn>
            </TaskForm>
            {error ? <ErrorText>{error}</ErrorText> : null}
            <TaskCountBlock>
                <TaskTypeCount>Pending Tasks Count({pendingTaskCount})</TaskTypeCount>
                <TaskTypeCount>Completed Tasks Count({completedTaskCount})</TaskTypeCount>
            </TaskCountBlock>
            {
                taskArr.map((task, index) => {
                    return <TaskText status={task.status} onClick={() => completeTask(task.id)} key={index}>{index + 1}.{task.text}</TaskText>
                })
            }
        </TaskBlock>
    )
}
export default Task;