import React from "react";
import "./styles.css";
import axios from "axios";
function ViewTableRow(props) {
  const DeleteStudent = () => {
    let url = "http://localhost:5500/students/delete-student/";
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.password}</td>
      <button>Edit</button>
      <button onClick={DeleteStudent}>Delete</button>
    </tr>
  );
}

export default ViewTableRow;