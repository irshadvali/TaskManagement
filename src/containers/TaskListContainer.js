import { connect } from "react-redux";
import TaskList from "../screens/TaskList";
import { getTaskList } from "./../actions/task.action";

const mapStateToProps = state => {
  return {
    taskList: state.task.taskList,
    taskLoading: state.task.taskLoading,
    taskStatus: state.task.taskStatus,
    taskError: state.task.taskError,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTaskList: () => {
      dispatch(getTaskList());
    },

  };
};

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(
    TaskList
);
export default TaskListContainer;
