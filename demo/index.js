import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 地区级联","code":"/**\r\n*\r\n* @title 地区级联\r\n* @description 中国地区级联\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\nimport { Button  } from 'tinper-bee';\r\n\nimport ACCitySelect from \"ac-city-select\";\r\n\r\nclass Demo1 extends Component {\r\n\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tdefaultValue:{ province:'北京',city:'北京',area:'东城区'},\r\n\t\t\tvalue:{ province:'北京',city:'北京',area:'东城区'}\r\n\t\t}\r\n\t}\r\n\r\n\tonChange=(obj)=>{\r\n\t\tconsole.log(obj)\r\n\t}\r\n\r\n\tbtnOnClick=()=>{\r\n\t\tthis.setState({\r\n\t\t\tvalue:{ province:'山西',city:'长治',area:'长治县'}\r\n\t\t})\r\n\t}\r\n\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<ACCitySelect ref='city' onChange={this.onChange} defaultValue={this.state.defaultValue} value={this.state.value}/>\r\n\t\t\t\t<Button shape=\"border\" onClick={this.btnOnClick} style={{marginTop:\"10px\"}}>代码设置数据</Button>\r\n\t\t\t</div>\r\n\t)}\r\n}\r\n","desc":" 中国地区级联"},{"example":<Demo2 />,"title":" 切换语言","code":"/**\r\n*\r\n* @title 切换语言\r\n* @description 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\nimport { Button  } from 'tinper-bee';\r\n\nimport CitySelect from \"ac-city-select\";\r\n\r\nclass Demo2 extends Component {\r\n\r\n\tonChange=(obj)=>{\r\n\t\tconsole.log(obj)\r\n\t}\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect lang='en_US' onChange={this.onChange}/>\r\n\t\t\t\t<div style={{'height':'20px'}}/>\r\n\t\t\t\t<CitySelect lang='zh_TW' onChange={this.onChange}/>\r\n\t\t\t</div>\r\n\t)}\r\n}\r\n","desc":" 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文"},{"example":<Demo3 />,"title":" 设置不可用状态","code":"/**\r\n*\r\n* @title 设置不可用状态\r\n* @description 设置属性disabled为布尔值，默认为false；\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport CitySelect from \"ac-city-select\";\r\n\r\nclass Demo3 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tdefaultValue: { province: '北京', city: '北京', area: '东城区' },\r\n\t\t\tvalue: null,\r\n\t\t\tdisabled: true\r\n\t\t}\r\n\t}\r\n\tonChange = (obj) => {\r\n\t\tconsole.log(obj);\r\n\t}\r\n\trender() {\r\n\t\tlet { disabled } = this.state\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect lang='zh_TW' disabled={disabled} onChange={this.onChange} />\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" 设置属性disabled为布尔值，默认为false；"},{"example":<Demo4 />,"title":" 设置省市联动部分城市不可选择","code":"/**\r\n* @title 设置省市联动部分城市不可选择\r\n* @description 设置属性disabled为布尔值，默认为false；\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport CitySelect from \"ac-city-select\";\r\n\r\nclass Demo4 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tdefaultValue: { province: '北京', city: '北京', area: '东城区' },\r\n\t\t\tvalue: null,\r\n\t\t\tdisabledProvinceArr: ['天津', '河北'],\r\n\t\t\tdisabledCityArr: [\"天津\", \"长春\", \"四平\", \"大连\"],\r\n\t\t\tdisabledAreaObj: {\r\n\t\t\t\t\"鞍山\": [\"铁东区\", \"铁西区\", \"立山区\"],\r\n\t\t\t\t\"抚顺\": [\"新抚区\", \"东洲区\", \"望花区\", \"抚顺县\"],\r\n\t\t\t\t\"北京\": [\"崇文区\", \"宣武区\", \"朝阳区\"]\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\trender() {\r\n\t\tlet { disabledProvinceArr, disabledCityArr, disabledAreaObj } = this.state;\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect\r\n\t\t\t\t\tlang='zh_CN'\r\n\t\t\t\t\tdisabledProvinceArr={disabledProvinceArr}\r\n\t\t\t\t\tdisabledCityArr={disabledCityArr}\r\n\t\t\t\t\tdisabledAreaObj={disabledAreaObj}\r\n\t\t\t\t\tonChange={this.onChange}\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" 设置属性disabled为布尔值，默认为false；"},{"example":<Demo5 />,"title":" 设置城市选择可以清空；","code":"/**\r\n*\r\n* @title 设置城市选择可以清空；\r\n* @description 设置属性allowClear为布尔值，默认为false，设置allowClear: true时城市可以被清空；\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport CitySelect from \"ac-city-select\";\r\n\r\nclass Demo5 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tdefaultValue: { province: '北京', city: '北京', area: '东城区' },\r\n\t\t\tvalue: null,\r\n\t\t\tdisabled: true\r\n\t\t}\r\n\t}\r\n\tonChange = (obj) => {\r\n\t\tconsole.log(obj);\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect lang='zh_TW' allowClear={true}  onChange={this.onChange} />\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" 设置属性allowClear为布尔值，默认为false，设置allowClear: true时城市可以被清空；"},{"example":<Demo6 />,"title":" 应用到form表单；","code":"/**\r\n*\r\n* @title 应用到form表单；\r\n* @description 在getFieldProps中设置initialValue以指定初始化值，若不需默认值只需设置initialValue：{ province:''}；\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Form } from 'tinper-bee';\r\nimport CitySelect from \"ac-city-select\";\r\n\n\r\nclass Demo6 extends Component {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tvalue: { province:'山西',city:'长治',area:'长治县'},\r\n\t\t\t// value: { province:''},//设置空值\r\n\t\t\tdisabled: true\r\n\t\t}\r\n\t}\r\n\tonChange = (obj) => {\r\n\t\tconsole.log(obj);\r\n\t}\r\n\trender() {\r\n        const {getFieldProps,getFieldValue} = this.props.form;\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect lang='zh_CN' allowClear={true} \r\n\t\t\t\t\t{...getFieldProps(\"areaInfo\",{\r\n\t\t\t\t\t\tinitialValue:this.state.value\r\n\t\t\t\t\t})}\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" 在getFieldProps中设置initialValue以指定初始化值，若不需默认值只需设置initialValue：{ province:''}；"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
