import React from 'react'
import Loader from '../Loader'

function PresentationVideo() {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const fetchDATA = async () => {
    await fetch(
      'https://api.pexels.com/videos/videos/2499611',
      { 
        method: 'GET',
        headers: {
          "Authorization": "563492ad6f91700001000001d686fb7780164a7d833047a277988b39"
        }
      }
      )
      .then(response => response.json())
      .then(json => setData(json.video_files[0].link))
  }

  React.useEffect(() => {
    if(fetchDATA()){
      return setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="px-4 py-2 mb-5 text-center">
        <h1 className="display-5 fw-bold ">Exclusive Videos</h1>
        <p className="lead  fw-bold mb-4">No more complicated workflows. Just design and publish. That’s it..</p>
        <div className="App d-flex justify-content-center">
        <hr className="seperator" />
          <Loader />
      </div>
      </div>
      
      );
  }
  return (
    <div className="px-4 py-2 mb-5 text-center">
      <h1 className="display-5 fw-bold ">Exclusive Videos</h1>
      <p className="lead  fw-bold mb-4">No more complicated workflows. Just design and publish. That’s it..</p>
      <div className="ratio ratio-16x9" >
          <iframe src={data} title="video" allowFullScreen controls></iframe>
        </div>
    </div>
  )
}

export default PresentationVideo