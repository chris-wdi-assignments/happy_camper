import React, {Component} from 'react'
import FeatureList from '../components/FeatureList'
import FEATURES from '../camp_features.js'

class FeaturesContainer extends Component {
  constructor(){
    super()
    this.state = {
      features: this.FEATURES
    }
  }

  // move this hard coded data to an external file and import it and use it like that so it's all pretty.

  // create crud functions to add, remove, get all, and update features and sub-features.
  // be careful of hunting down sub-sub-sub features.

  render(){
    return(
      <div>
        <main>
          <ul className="feature-list">
            <FeatureList
            features={this.state.features} />
          </ul>
        </main>
      </div>
    )
  }
}

export default FeaturesContainer;
