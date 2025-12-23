import React from 'react';
import './TextBrief.css';

interface BriefText{
  text:string
  image:string
}

function TextBrief({data}:Readonly<{data:BriefText}>){
    return(
        <section className='textBrief'>
            <div className="customContainer">
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <p className='briefText'>{data.text}</p>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-12 col-md-6'>
                        <img  loading="lazy" className="textBriefImage"src={`/assets/${data.image}.webp`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TextBrief