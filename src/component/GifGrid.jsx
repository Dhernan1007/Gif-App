import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import { useState } from "react";

export const GifGrid = ({ category }) => {

  const { images } = useFetchGifs(category);
  const [times, setTimes] = useState(false)

  setTimeout(() => {
    setTimes(true)
  }, 1500);

  return (
    <>
      {!times ? <>
        <span className="loader">L &nbsp; ading</span>

      </>
        : <>
          <h3>{category}</h3>
          <div className="card-grid">
            {images.map((image) => (
              <GifItem key={image.id}
                {...image}
              />
            )
            )}
          </div>
        </>
      }
    </>
  )
}

