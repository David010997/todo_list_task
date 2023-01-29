import styled from "styled-components";

const TaskBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const TaskForm = styled.div`
    display:flex;
`
const TaskCountBlock = styled(TaskForm)`
    margin-top:10px;
`
const TaskInput = styled.input`
    padding: 10px 18px;
    width:250px;
    box-sizing: border-box;
`
const TaskCreateBtn = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left:5px;
`
const TaskTypeCount = styled.span`
    font-size:16px;
    margin-left:20px;
    margin-right:20px;
`

const TaskText = styled.p`
    font-size:16px;
    cursor:pointer;
    color: red;
    text-decoration: ${({ status }) => status ? 'line-through' : 'none'};
`
const ErrorText = styled.p`
    font-size:16px;
    color: red;
`
export { TaskBlock, TaskInput, TaskCreateBtn, TaskForm, TaskTypeCount, TaskCountBlock, TaskText, ErrorText };
