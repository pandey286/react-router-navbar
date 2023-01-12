import React from 'react'
import { useParams } from 'react-router-dom'

const Inbox = () => {
  const { userName, group } = useParams()
  // console.log(params)
  return (
    <>
      <section className="row">
        <div className="col-lg-10 mx-auto col-md-12 my-3">
          <h1 className="text-title text-capitalize text-center">
            welcome to your inbox {userName} in group {group}.
          </h1>
        </div>
      </section>
    </>
  )
}

export default Inbox

