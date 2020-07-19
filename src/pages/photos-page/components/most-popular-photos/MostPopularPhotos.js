import React from 'react'

import './mostPopularPhotos.sass'

import ShipItem from "./components/shipItem/ShipItem";
import PageTitle from "../../../../components/common/page-title/page-title";
import Select from "../../../../components/common/select/select";
import AdvancePagination from "../../../../components/common/advance-pagination/AdvancePagination";


const MostPopularPhotos = () => {

  return (
    <React.Fragment>
      <div className='most-popular-photos'>
        <PageTitle main={'most popular'} secondary='photos'/>

        <div className='most-popular-photos__container'>
          <div className={'most-popular-photos__container__info-section'}>
            <div>
              <p>Most viewed in: </p>
              <Select options={[{label: '365', value: '365'}]}/>
            </div>
            <p><span>141 558</span> photos uploaded in this period.</p>
          </div>
          <div className='most-popular-photos__container__pagination-section'>
            <AdvancePagination totalPages={11134}/>
          </div>
        </div>
        <main className='most-popular-photos__main'>
          {
            ships.map((ship, index) => (
              <ShipItem
                key={index}
                url={ship.url}
                firstTitle={ship.photographer}
                secondTitle={ship.shipName}
              />
            ))
          }
        </main>
        <footer className='most-popular-photos__footer'>
          <AdvancePagination totalPages={11134}/>
        </footer>
      </div>
    </React.Fragment>
  )
}

const ships = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU',
    photographer: 'MYSTERY VESSEL',
    shipName: 'Anthony Legg'
  },
]

export default MostPopularPhotos
