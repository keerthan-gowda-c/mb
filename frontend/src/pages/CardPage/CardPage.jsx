import cardData from "../../data/cardData";
import CardDetails from "../CardDetails/CardDetails";

export default function CardPage()
{
    return(
        <>
        <section>
            
            <div >
                {
                    cardData.map((details, index) => (
                        <CardDetails detail={details}/>
                    )
                )
                }
                
            </div>
        </section>
        </>
    )
}