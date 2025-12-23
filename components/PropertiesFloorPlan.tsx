"use client";
import React,{useEffect,useRef} from "react";
import { CardItem } from "./types";
import { Row,Col } from "react-bootstrap";
import FloorPlanCard from "./FloorPlanCard";

function PropertiesFloorPlan({ data }: { data: CardItem }){

const scrollRef = useRef<HTMLDivElement | null>(null);
    
        useEffect(() => {
          const el = scrollRef.current;
          if (!el) return;
      
          const handleWheel = (e: WheelEvent) => {
            const scrollLeft = el.scrollLeft;
            const maxScrollLeft = el.scrollWidth - el.clientWidth;
            const delta = e.deltaY;
      
            const scrollingRight = delta > 0;
            const scrollingLeft = delta < 0;
      
            const atStart = scrollLeft <= 0;
            const atEnd = scrollLeft >= maxScrollLeft;
      
            const isScrollable = el.scrollWidth > el.clientWidth;
      
            if (!isScrollable) return; // Don't interfere if no horizontal scroll
      
            if (
              (scrollingRight && !atEnd) || // Scroll right if not at end
              (scrollingLeft && !atStart)   // Scroll left if not at start
            ) {
              e.preventDefault();
              el.scrollLeft += delta;
            }
          };
      
          el.addEventListener('wheel', handleWheel, { passive: false });
      
          return () => {
            el.removeEventListener('wheel', handleWheel);
          };
        }, []);


    return(
        data.floor_plan?(
        <section style={{height:'100%'}}>
            <Row>
                <Col md={12}>
                    <h2 className='ip_amenities_heading'>Floor Plan</h2>
                    <hr className='ip_hr' />
                </Col>
            </Row>
            <Row className="mt-4">
                <div className='rp-card-wrapper' ref={scrollRef}>
                    {/* {JSON.parse(data.floor_plan).map((floor_plan: string, index: number) => (
                        <FloorPlanCard  data={data} />
                    ))} */}
                    <FloorPlanCard  data={data} />
                </div>
            </Row>
        </section>):null
    )
}

export default PropertiesFloorPlan