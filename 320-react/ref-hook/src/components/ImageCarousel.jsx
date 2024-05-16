import { useRef } from "react";




export default function ImageCarousel({ list }) {
  const itemsRef = useRef(null);
  const indexRef = useRef(0);

  function scrollTo(dir) {
    const arr = getList();

    let node = null;
    switch (dir) {
      case "next": {
        if (indexRef.current < arr.length) {
          node = arr[++indexRef.current];
        }
        break;
      }
      case "prev": {
        if (indexRef.current >= 0) {
          node = arr[--indexRef.current];
        }
        break;
      }
      default:
        break;
    }

    try {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    } catch (e) {}
  }

  function getList() {
    if (!itemsRef.current) itemsRef.current = [];
    return itemsRef.current;
  }

  return (
    <div
      style={{
        width: "100%",
        margin: "0",
        padding: "0",
        position: "relative",
        userSelect: "none"
      }}
    >
      <nav
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span
          onClick={() => scrollTo("prev")}
          style={{
            fontSize: "50px",
            color: "black",
            cursor: "pointer",
            backgroundColor: "lightgray",
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          ⮜
        </span>
        <span
          onClick={() => scrollTo("next")}
          style={{
            fontSize: "50px",
            color: "black",
            cursor: "pointer",
            backgroundColor: "lightgray",
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          ⮞
        </span>
      </nav>
      <div
        style={{
          width: "100%",
          overflow: "hidden"
        }}
      >
        <ul
          style={{
            listStyle: "none",
            whiteSpace: "nowrap",
            padding: "0 50px"
          }}
        >
          {list.map((e) => (
            <li
              key={e.id}
              ref={(node) => {
                const arr = getList();
                if (node) arr.push(node);
              }}
              style={{
                listStyle: "none",
                whiteSpace: "nowrap",
                display: "inline",
                padding: "0.5rem"
              }}
            >
              <img src={e.imageUrl} alt={e.id} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


