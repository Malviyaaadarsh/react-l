import React from 'react'
import { useParams } from 'react-router-dom'

const CollectionDetail = () => {
    const params = useParams(); 
    console.log(params);
  return (
    <div>
      <h1>{params.collectionId} Collection Detail Page</h1>
    </div>
  )
}

export default CollectionDetail
