import styled from "styled-components";

const TaskBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const TaskForm = styled.div`
    display:flex;
`

const TaskInput = styled.input`
    padding: 10px 18px;
    width:250px;
    box-sizing: border-box;
`
const TaskCreateBtn = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left:5px;
`
const TaskTypeCount = styled.span`
    
`
export { TaskBlock, TaskInput, TaskCreateBtn, TaskForm };
