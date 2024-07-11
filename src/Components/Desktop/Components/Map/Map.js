import { GoogleMap, useJsApiLoader, PolygonF } from '@react-google-maps/api';
import { useState, useEffect } from "react"
import "./Map.css"



function ToRightArray(Array){
    let newArr = [];
    Array.forEach(element => {
        newArr.push({lat:Number(element.lat), lng: Number(element.lng)})
    });
    return newArr
}

function ProjectMap(){
    const [center, setCenter] = useState({lat:48.472429962571105, lng:35.04126161767838})
    function success(position) {
        setCenter({lat: position.coords.latitude, lng:position.coords.longitude})
    }

    function error() {
        console.log("Unable to retrieve your location");
    }
    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    fetch("http://10.119.4.84:3100/zone")
    .then((res)=>res.json())
    .then((data)=>{
        setZones(data)
    })
}, [])

    

    
    const [Zones, setZones] = useState([])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDHO2nYzq334w4yPkfogcWBOxycma1Ygk8"
      })
    
      
    if(isLoaded){
        return(
    
            <div className="MapDesktopContainer">
                <GoogleMap
                    mapContainerStyle={{height:"100%", width:"100%", "borderRadius":"25px"}}
                    center={center}
                    zoom={15}
                    options={
                        {
                            disableDefaultUI : true
                        }
                    }
                >
                    {Zones && Zones.map((zone) => (
                        
                        <PolygonF 
                            key={zone.id}
                            options={{
                                fillColor: zone.color,
                                strokeColor: zone.color,
                                strokeOpacity: 0.1
                            }}
                            path={ToRightArray(zone.path)}
                        ></PolygonF>
                    ))}
                    
                </GoogleMap>
            </div>
                
            )
    }
    else{
        return(<div className='MapContainer'></div>)
    }
    
}

export default ProjectMap