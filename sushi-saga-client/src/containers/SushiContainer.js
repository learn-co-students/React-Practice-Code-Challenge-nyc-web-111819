import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let allSushiArray = props.sushi
  let targetArray = []

  const getMoreSushi = () => {
   let i = 0
   let arrayLength = 4
   while (i < arrayLength) {
     targetArray.length = 4
     targetArray.push(allSushiArray[i])
     i++
   }
  }

  getMoreSushi()
  // getMoreSushi()

  console.log(targetArray)


  let shortenedSushiArray = [...props.sushi].slice(0,4)
  
  let sushiComponentList = shortenedSushiArray.map(sushi => 
    <Sushi
    {...sushi}
    key={sushi.id}
    sushi={props.sushi}
    />
  )


  // console.log(sushiComponentList)

  return (
    <Fragment>
      <div className="belt">
          {sushiComponentList}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer