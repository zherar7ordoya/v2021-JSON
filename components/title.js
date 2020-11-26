export default function Title(props) {

  if (!props.count || props.count === 0) {
    return null;
  }

  return <h3>{props.title}</h3>

}
