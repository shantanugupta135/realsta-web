import PropertyCard from './PropertyCard';
import './RelatedProperties.css';
import { CardItem } from './types';
import { useEffect, useRef } from 'react';


function RelatedProperties({ data }: {data:CardItem[]}) {

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

    // const filteredProperties = propertiesData.filter(
    //     (property: CardItem) => property.id !== id
    //   );

    return (
        <section>
            <div className="customContainer">
                <div className="rp-header pb-5">
                    Related <span className='rp-properties'>Properties</span>
                </div>
                <div className='rp-card-wrapper' ref={scrollRef}>
                    {data.map((property: CardItem, index: number) => (
                        <PropertyCard key={index} data={property} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RelatedProperties;