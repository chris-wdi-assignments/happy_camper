import React, {Component} from 'react'
import Subfeature from './Subfeature'


class SubfeatureList extends Component{
  render(){
      let subfeatureArray = this.props.subfeatures.map( (subfeature) => {
        return (
          <Subfeature
          key={subfeature.id}
          title={subfeature.title}
          id={subfeature.id}
          subfeatures={subfeature.subfeatures} />
        )
      })

      return (
        {subfeatureArray}
      )
    }
}

export default SubfeatureList;
