const OfflineShimmer = () =>{
    return(
        <div className="offline-class">
            <h1>No Internet</h1>
            <p> try: 
                <ul className="list">
                    <li>Checking the network cables, modem,and router</li>
                    <li>Reconnecting to Wi-Fi</li>
                </ul>
            </p>
            <p>ERR_INTERNET_DISCONNECTED</p>
        </div>
    )
}

export default OfflineShimmer;