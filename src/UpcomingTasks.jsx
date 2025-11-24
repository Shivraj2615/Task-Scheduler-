export default function UpcomingTasks({ tasks, markTaskDone, deleteTask }) {
  const upcomingTasks = tasks.filter((task) => !task.isDone);

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {upcomingTasks.length === 0 ? (
            <tr>
              <td colSpan="4">No upcoming tasks</td>
            </tr>
          ) : (
            upcomingTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td className={`priority-${task.priority}`}>{task.priority}</td>
                <td>{task.deadline}</td>
                <td>
                  <button className="action-btn mark-btn" onClick={() => markTaskDone(task.id)}>
                    Mark Done
                  </button >
                  &nbsp;
                  <button className="action-btn delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
