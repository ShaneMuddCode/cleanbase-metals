import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2hhbmVtdWRkNzciLCJhIjoiY2lycDRscmgwMGVxb3Q3bmt5NDNtYno3cCJ9.UYBkhk4OmCiOqgAizEPPAQ'

export default function SupplyChainMap() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-1.8)
  const [lat, setLat] = useState(17.0)
  const [zoom, setZoom] = useState(1)

  console.log('App was called')

  useEffect(() => {
    // if map.current exists return out; otherwise bould map.current
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/shanemudd77/ckto9loom11z217o79jpe4t4f',
      center: [lng, lat],
      zoom: zoom,
    })
  })

  useEffect(() => {
    // if map.current doesnt exist, return out; otherwise process the on('move')
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(3))
      setLat(map.current.getCenter().lat.toFixed(3))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  return (
    <div>
      <div ref={mapContainer} className='map-container'>
        <div className='sidebar'>
          Lon: {lng} | Lat: {lat}
        </div>
      </div>
    </div>
  )
}
