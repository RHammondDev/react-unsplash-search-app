/* https://www.freecodecamp.org/news/how-to-make-an-image-search-app-in-react/ */


import React from "react";
import { useEffect, useState } from "react";

const App = () => {

    //const defaultImg = "Bike"
    const [img, setImg] = useState("")
    const [res, setRes] = useState([])

    const fetchRequest = async () => {
        const Access_key = "D6WWHssanObs75SfSTRhSnBSTe0U9aSz5pjUfga-O6Y"
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${img || "Dirtbike"}&client_id=${Access_key}&per_page=20`
        );
        const dataJson = await data.json();
        const result = dataJson.results;
        //console.log(result);
        setRes(result);
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    const Submit = () => {
        fetchRequest()
        setImg("")
    }

    const handleEnter = e => {
        if (e.key === "Enter") {
            e.preventDefault()
            Submit()
        }
    }

    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center input">
                <input
                  className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
                  type="text"
                  placeholder="Search Anything..."
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  onKeyDown={handleEnter}
                />
                <button
                  type="submit"
                  onClick={Submit}
                  className="btn bg-dark text-white fs-3 mx-3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-evenly flex-wrap">
  {res.map((val) => {
    return (
      <>
        <img
          key={val.id}
          className="col-3 img-fluid img-thumbnail"
          src={val.urls.small}
          alt="val.alt_description"
        />
      </>
    );
  })}
</div>
        </>
      );
}
export default App