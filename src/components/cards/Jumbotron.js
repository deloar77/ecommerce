
const Jumbotron = ({
    title,
    subtitle="welocome here"
})=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center p-4" >
                    <h1>{title}</h1>
                    <p>{subtitle}</p>

                </div>

            </div>

        </div>
    )
    
}
export default Jumbotron;