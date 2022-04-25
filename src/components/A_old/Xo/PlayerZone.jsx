export const PlayerZone = (props) => {
    return(
        <div className="container" onClick={(e)=>props.spanClick(e, props)}>
            <div>
                <span data-num='1-1'></span>
                <span data-num='1-2'></span>
                <span data-num='1-3'></span>
            </div>
            <div>
                <span data-num='2-1'></span>
                <span data-num='2-2'></span>
                <span data-num='2-3'></span>
            </div>
            <div>
                <span data-num='3-1'></span>
                <span data-num='3-2'></span>
                <span data-num='3-3'></span>
            </div>
        </div>
    );
}