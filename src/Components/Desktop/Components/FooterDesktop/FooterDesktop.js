import EdniproLogo from "../../../../eDniproLogo.png";
import "./FooterDesktop.css"

function FooterDesktop(){
    return(
        <div className="FooterDesktopBody">
            <div className="FooterDesktopInnerBody">
                <img src={EdniproLogo} alt="EdniproLogo" className="EdniproLogo"></img>
                <div className="FooterContactsHeader">Контакти</div>
                <div className="DesktopFooterGrid">
                    <div className="FooterGridLeft">
                        <div className="FooterContactsTypeHeader text-margin">Оператор паркування</div>
                        <div className="text-margin">Понеділок - неділя: 08:00 - 19:00</div>
                        <div className="text-margin">+38 098 058 31 59</div>
                        <div className="links text-margin">info@psg.ua <br/>https://psg.ua</div>
                    </div>
                    <div className="FooterGridRight">
                        <div className="FooterContactsTypeHeader">Інспекція з паркування</div>
                        <div className="text-margin callendar">Понеділок - четвер: 08:00 - 17:00<br/>П'ятниця: 08:00 - 15:45</div>
                        <div className="text-margin">+38 068 578 04 37</div>
                        <div className="links text-margin">dpparkcontrol@gmail.com<br/>https://ipkp.dniprorada.gov.ua</div>
                    </div>
                </div>
                   
            </div>      
        </div>
    )
}


export default FooterDesktop