/*

let href = props.href

*/

function Image({ href, src, alt }) {
    // let href = props.href
    // let src = props.src
    // let alt = props.alt

    // object destructuring
    // let { href, src, alt } = props

    return (
        <a href={href} target="_blank">
          <img src={src} className="logo" alt={alt} />
        </a>
    )
}

export default Image;