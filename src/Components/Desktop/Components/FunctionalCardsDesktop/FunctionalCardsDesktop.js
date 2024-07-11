import "./FunctionalCardsDesktop.css"
function FunctionalCard({Image,Title}){
    return(
        <div className="FunctionalCardBody">
            <img src={Image} alt="FunctionalI" className="FunctionalImageDesktop"/>
            <div className="FunctionalDescript">{Title}</div>
        </div>
    )

}

export default FunctionalCard