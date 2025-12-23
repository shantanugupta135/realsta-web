import propertiesData from "../data/propertiesData.json"

function PropertiesLenght(){
    return propertiesData.length
}

function getProperty(url:string){
    return propertiesData.filter((obj)=>{if (obj.url===url){return true}})[0]
}

export {PropertiesLenght,getProperty}