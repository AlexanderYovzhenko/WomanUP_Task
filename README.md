# API для todo-лист(WomanUP_Task )

<p>
  <h2 align="center">Documentation for endpoints</h2>
  <h3>Home <a href="https://womanup-task.herokuapp.com/" target="blank">womanup-task.herokuapp.com</a> - home page, check if the server is running</h3>
  <h3>Static file <a href="https://womanup-task.herokuapp.com/robot.jpeg" target="blank">womanup-task.herokuapp.com/robot.jpeg</a> - view static file</h3>
  <br>
  <ul>
    <li><h3><u>womanup-task.herokuapp.com/login/registration</u> - registration</h3> 
      <ul>
        <li><font color="4040ff">POST</font> <u>login/registration</u> - JSON (login, password)</li> 
      </ul>
    </li>
    <br>
    <li><h3><u>womanup-task.herokuapp.com/login/authorization</u> - authorization</h3> 
      <ul>
        <li><font color="4040ff">POST</font> <u>login/authorization</u> - get token, JSON (login, password)</li> 
      </ul>
    </li>
    <br>
    <li><h3><u>womanup-task.herokuapp.com/todo</u> - requires authorization(header: authorization Bearer token)</h3> 
      <ul>
        <li><font color="4040ff">POST</font> <u>todo</u> - add task, JSON (any amount rows task of todo)</li>
        <li><font color="green">GET</font> <u>todo?param=any</u> - get all tasks for db todo, QueryParam('?param = any row' - for filtered array tasks)</li>
        <li><font color="green">GET</font> <u>todo/:taskId</u> - get task by id, Param(taskId - id by task)</li>
        <li><font color="green">GET</font> <u>todo/page/:page</u> - get tasks by page, Param(page - number page)</li>
        <li><font color="yellow">PUT</font> <u>todo/:taskId</u> - update task by id, Param(taskId - id by task), JSON (any amount rows of task)</li>
        <li><font color="red">DELETE</font> <u>todo/:taskId</u> - delete task by id, Param(taskId - id by task)</li>
      </ul>
    </li>
    <br>
    <li><h3><u>womanup-task.herokuapp.com/file</u> - upload file</h3> 
      <ul>
        <li><font color="4040ff">POST</font> <u>file</u> - upload file, key - file</li>
      </ul>
    </li>
</ul>
</p>