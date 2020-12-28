export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  <table id="ta">
    <tbody>
    <tr>
      <td id="fst">
        <p>{props.name}</p>
        <p>Unit : {props.crd}</p>
        <p>Grade : {props.grd}</p>
      </td>
      <td id="but"><button onClick = {() =>props.del(props.name)} > delete </button></td>
    </tr>
    </tbody>
  </table>
  
  </>;
};
/*

  <div id="divf">
      <p>{props.name}</p>
      <p>Unit : {props.crd}</p>
      <p>Grade : {props.grd}</p>
      <button onClick = {() =>props.del(props.name)} > delete </button>
  </div>
  */