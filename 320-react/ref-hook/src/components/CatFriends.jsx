import { useRef } from "react";

export default function CatFriends() {

  const itemsRef = useRef(null); //  { current: null }

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);  //  { '0': <li></li>  }
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();   //   { current: { '0': <li></li>, '1': <li></li>, '2': <li></li> } }
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(99)}>Jellylorum</button>
      </nav>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node); 
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 100; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + 1
  });
}
