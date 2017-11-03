import React, {Component} from 'react'
import SubfeatureList from './SubfeatureList'

class Subfeature extends Component {
  render(){
    let subfeatureListArr = this.props.subfeatures.map( (subfeatureList) => {
      return (
        <subfeatureList
          key={subfeatureList.id}
          title={subfeatureList.title}
          id={subfeatureList.id} />
      )
    })
    return (
      <div>
        <li className={`subfeature ${this.props.id}`} id="">
          <span id={`${this.props.id}`}>{this.props.title}</span>
           if ({this.props.subFeature.length ===1}){
            <Subfeature />
          }
          else if ({this.props.subFeature.length > 1}){
            <SubfeatureList />
          }
          <ul className="subfeature-list">
            {subfeatureListArr}
          </ul>
        </li>
      </div>
    )
  }
}

export default Subfeature;

//
// else {
//   do nothting
// }
