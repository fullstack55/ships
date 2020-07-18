import React from 'react'
import './newPhotos.sass'

import PageTitle from "../../../../components/common/page-title/page-title";
import NewPhotoItem from "./components/new-photo-item/NewPhotoItem";
import Select from "../../../../components/common/select-with-label/select-with-label";
import Button from "../../../../components/common/button/button";
import AdvancePagination from "../../../../components/common/advance-pagination/AdvancePagination";

const NewPhotos = () => {
  return (
    <React.Fragment>
      <div className='new-photos'>
        <PageTitle main={'new'} secondary='photos'/>
        <div className='new-photos__select-block'>
          <Select
            label='Limit:'
            options={[{value: '192/page', label: '192/page'}]}
            className='custom-size'
          />
          <Select
            label='View:'
            options={[{value: 'Normal', label: 'Normal'}]}
            className='custom-size'
          />
          <Button variant={'outlined'}>Modify Search</Button>
          <p><span>11 345</span> photos found</p>
        </div>
        <div className='new-photos__pagination-block'>
          <AdvancePagination totalPages={11345}/>
          <p>Hint: The left/right arrows on your keyboard will take you to the previous/next page.</p>
        </div>
        <main className='new-photos__main-block'>
          {
            shipCards.map(({url, name, info}, index) => (
              <NewPhotoItem
                key={index}
                url={url}
                name={name}
                info={info}
              />
            ))
          }
        </main>
        <AdvancePagination totalPages={11345}/>
      </div>
    </React.Fragment>
)
}

const shipCards = [
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
  {
    url: 'https://spectrum.ieee.org/image/MzA2MTM1Mg.jpeg',
    name: 'GALAXY & BALTIC PRINCESS',
    info: {
      photographer: 'Marc Pingoud',
      captured: 'Feb 07, 2020',
      added: 'February 11, 2020',
      location: 'Mariehamn, Finland',
      views: '178',
      comments: '1',
      category: 'Passenger Vessels',
      imo: '2345324',
      mmsi: '3464325342',
      callsign: 'SZFQ',
      flag: 'Sweden',
    },
  },
]

export default NewPhotos