import { CardItem } from "../components/types";


const API_URL = "https://realsta.com/";

export async function getProperties(): Promise<CardItem[]> {
      const response = await fetch(API_URL+'get_properties.php');
    if (!response.ok) {
        throw new Error('Failed to fetch properties');
    }
    return await response.json();
}