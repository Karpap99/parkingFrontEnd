import "./Functional.css";
function Functional({ImageSrc, Text, orientation = "left"}){
    let margin = {
        "marginLeft" : "10%"
    }   

    if(orientation == "right"){
        margin = {
            "marginLeft" : "20%",
        }
    }
    return(
        <div className="Functional-MainBody" style={margin}>
            
            <div className="Functional-Body">
                
                <p className="FunctionalText font-semibold text-lg">{Text}</p>
            </div>
            <img src={ImageSrc} alt="FunctionalI" className="FunctionalImage"/>
                
        </div>
    )
}

export default Functional