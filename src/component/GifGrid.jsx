import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import { useState } from "react";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);
  const [times, setTimes] = useState(false)

  setTimeout(() => {
    setTimes(true)
  }, 1500);

  return (
    <>
      {!times ? <> {isLoading && (
        <span className="loader">L &nbsp; ading</span>
      )}
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}