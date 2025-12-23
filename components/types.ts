export interface CardItem {
    id: number,
    metaTitle:string,
    metaDescription:string,
    url:string,
    card_description: string,
    card_image: string,
    name: string,
    address: string,
    size: string,
    towers: string,
    nearest_metro: string,
    description: string,
    description_extended:string,
    area: string,
    certifications: string,
    building_type: string,
    developer: string,
    amenities: string,
    floor_plates: string,
    tower_spec: string,
    parking_spec: string,
    security_spec: string,
    sustainability_spec: string,
    location_description: string,
    connectivity_details: string,
    geo_location: string,
    // available_space: AvailableSpaceItem[],
    available_space:string
    brocher:string,
    brocher_image:string,
    tenents:string
    floor_plan:string
};

export interface AvailableSpaceItem {
  id: number;
  area: number;
  cam_charges: number;
  lock_in: string;
  escalation: string;
  status: string;
}