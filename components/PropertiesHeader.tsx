import React ,{useState} from "react";
import NavigationMenu from "./NavigationMenu";
import { CardItem } from "./types";
import "./PropertiesHeader.css"
import FormModal from './FormModal';

function PropertyHeader({data}:{data:CardItem}){
const [show, setShow] = useState(false);

    return(
        <section className="ip_top_section">
                        <NavigationMenu />
            <div className="customContainer">
                    <div className="row mt4">
                        <div className="col-12 col-md-6">
                            <h1 className="ip_header_name">{data?.name}</h1>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">ADDRESS</p>
                            <p className="ip_header_text">{data?.address}</p>
                            </div>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">Size</p>
                            <p className="ip_header_text">{data?.size}</p>
                            </div>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">Towers</p>
                            <p className="ip_header_text">{data?.towers}</p>
                            </div>
                            <div className="ip_header_Details">
                            <p className="ip_header_titles">Nearest Metro</p>
                            <p className="ip_header_text">{data?.nearest_metro}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* <img className="ip_header_image" src={`/assets/property-images/property_${data.id}.png`}/> */}
                            <img loading="lazy" className="ip_header_image" src={data?.card_image} alt=""/>
                        </div>
                    </div>
                    <div className="row ip_slogan_cta mt-3">
                        <div className="col-12 col-md-6">
                            <button className="btn-secondary-alternative-custom" onClick={() => setShow(true)}>CONTACT FOR PRICING<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i></button>
                        </div>
                        <FormModal show={show} onClose={() => setShow(false)} />
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-3 col-md-1 d-flex justify-content-start mt-2">
                                    <i className="fa-solid fa-circle-check tick-icon"></i>
                                </div>
                                <div className="col-9 col-md-11 mt-2">
                                    <p className="ip_slogan" style={{alignContent: 'end'}}>
    
                                    Consolidated offices up to <span className="ip_slogan_red">50,000 sq. ft.</span> available<br/>
                                    Customised <span className="ip_slogan_red">fitouts</span> available
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
    )

}

export default PropertyHeader