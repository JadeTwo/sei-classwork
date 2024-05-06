function Image(props) {
    return (
        <a href={props.href} target="_blank">
          <img src={props.src} className="logo" alt={props.alt} />
        </a>
    )
}

export default Image;