import React, {Component} from 'react'
import Subfeature from './Subfeature'
import SubfeatureList from './SubfeatureList'

class Feature extends Component {
  render(){
    return (
      <div>
        <li className={`feature ${this.props.id}`} id="">
          <span id={`${this.props.id}`}>{this.props.title}</span>
          <ul className="subfeature-list">


            <SubfeatureList subfeatures={this.props.subfeatures} />

          </ul>
        </li>
      </div>
    )
  }
}

export default Feature
//if subfeatures.length === 0 then dont do anything
// if this.pops.subfeatures.length > 1, then call subfeaturelist

// take a look at justin's wacky externalized function call in featurelist
// else feature is 1 then just call
// <SubFeature subfeature = this.props.subfeatures[0] />
// {subfeatureArray}
