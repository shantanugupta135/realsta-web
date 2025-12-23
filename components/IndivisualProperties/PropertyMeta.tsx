import Head from "next/head";
import React from "react";


interface propertyMetadata{
    metaTitle?:string
    metaDescription?:string
    url?:string
}


function PropertyMeta({data}:{data:propertyMetadata}){
    return(
        <Head>
            {data&&<title>{data?.metaTitle}</title>}
            {data&&<meta name="description" content={data?.metaDescription} />}
            {data&&<link  rel="canonical" href={`https://realsta.com/property/${data?.url}`}/>}
        </Head>
    )
}

export default PropertyMeta