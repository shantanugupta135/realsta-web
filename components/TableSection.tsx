import React, { useState } from 'react';
import { TabContainer, Nav, TabContent, TabPane } from 'react-bootstrap';

import './TableSection.css';

interface TableSectionItem{
  titleNormal:string;
  titleBold:string;
  tableContents:{
    heading:string;
    content:string;
    image:string;
  }[]

}

interface TableSectionProps{
    data:TableSectionItem
}

function TableSection(props:TableSectionProps){

const [activeIndex, setActiveIndex] = useState(0);
const [image,setImage]=useState(props.data.tableContents[0].heading.replace(/[-]/g, '').replace(/[+]/g, '').replace(/[ \n]/g, '-').replace(/[%]/g, ''))

    return(
        <section className='TableSection'>
            <div className="customContainer">
                 <TabContainer  defaultActiveKey={props.data.tableContents[0].heading}>
                <div className='row tabTitleTop'>
                    <div className='tabtopColLeft col-12 col-md-5 '>
                        <div className='col-12 tableTitle'>
                            <p className='tableSectionTitle'>{props.data.titleNormal}<br/><b className='tableSectionTitleBold'>{props.data.titleBold}</b></p>
                        </div>
                        <hr className="tabDivider"/>
                    </div>
                    <div className='tabtopColRight col-12 col-md-7 '>
                        <Nav justify  className="justify-content-center">
                            {props.data.tableContents.map((item,index)=>(
                                <Nav.Item key={index} className={`tabHeadingContainer ${activeIndex===index?"tabHeadingContainerRed":""}`} onClick={(e)=>{setActiveIndex(index);setImage(item.heading.replace(/[-]/g, '').replace(/[+]/g, '').replace(/[ \n]/g, '-').replace(/[%]/g, ''))}}>
                                    <Nav.Link eventKey={item.heading} className='tabHeadings'>{item.heading}</Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        {/* <img className='tableSectionImage' src={`/assets/${image}.png`}/>  */}
                        <img loading="lazy" className='tableSectionImage' src={props.data.tableContents[activeIndex].image}/>     
                    </div>
                    <div className='col-12 col-md-7'>
                        <TabContent>
                            {props.data.tableContents.map((item, index)=>(
                                <TabPane key={`${item.heading}-${index}`} eventKey={item.heading}>
                                    <p className='tabContent mt-3'>{item.content}</p>
                                </TabPane>
                            ))}
                        </TabContent>
                    </div>
                </div>
                </TabContainer>
            </div>
        </section>
    )
}

export default TableSection