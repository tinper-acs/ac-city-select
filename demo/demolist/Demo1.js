/**
*
* @title 地区级联
* @description 中国地区级联
*
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CitySelect from '../../src';

class Demo1 extends Component {
	onChange=(obj)=>{
		console.log(obj)
	}
	render () {
		return (
			<CitySelect ref='city' onChange={this.onChange} />
		)
	}
}
export default Demo1;