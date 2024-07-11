import "./TextBlock.css"
function TextBlock({Title, orientation = "left"}){
    let margin = {
        "marginLeft" : "10%"
    }
    if (orientation == "right"){
        margin = {
            "marginLeft" : "50%"
        }
    }
    return(
        <div className="TextBlock" style={margin}>
            {Title}
        </div>
    )
}

export default TextBlock