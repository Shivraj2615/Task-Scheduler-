export default function CompletedTasks({ completedTasks }) {
  return (
    <div>
      <h2>Completed Tasks</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.length === 0 ? (
            <tr>
              <td colSpan="3">No tasks completed yet 😄</td>
            </tr>
          ) : (
            completedTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td className={`priority-${task.priority}`}>{task.priority}</td>
                <td>{task.deadline}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
