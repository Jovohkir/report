import React from "react";
import "./style.css";

export default function MyDefTable(props) {
  return (
    <tr>
      <td>{props.post.id}</td>
      <td>{props.post.title}</td>
      <td>{props.post.year}</td>
      <td>{props.post.davr}</td>
      <td>{props.post.status}</td>
      <td>{props.post.tVaqt}</td>
      <td>{props.post.nVaqt}</td>
      <td>{props.post.inspector}</td>
    </tr>
  );
}
