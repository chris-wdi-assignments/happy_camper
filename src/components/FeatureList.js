import React, {Component} from 'react'
import Feature from './Feature'
import FeaturesContainer from '../containers/FeaturesContainer'

class FeatureList extends Component {
  featureComponentize(){
    return this.props.features.map( (feature) => {
      return (
        <Feature
        key={feature.id}
        title={feature.title}
        id={feature.id}
        subfeatures={feature.subfeatures} />
      )
    })
  }

  render(){
    return (
      <div>
      {this.featureComponentize}
      </div>
    )
  }
}

export default FeatureList



//
// render(){
//   let featureArray = this.props.features.map( (feature) => {
//     return (
//       <Feature
//         key={feature.id}
//         title={feature.title}
//         id={feature.id}
//         subfeatures={feature.subfeatures} />
//     )
//   })
//   console.log(featureArray);
//   return (
//     <div>
//       {featureArray}
//     </div>
//   )
// }
