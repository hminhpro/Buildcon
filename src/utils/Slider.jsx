const Slider = () => {
    return (
        <div id="slider">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./images/slider/z5342517874253_0095e10d04e038ac7b0c765daaa24f0c 1.svg" class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/slider/z5342517874253_0095e10d04e038ac7b0c765daaa24f0c 1.svg" class="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/slider/z5342517874253_0095e10d04e038ac7b0c765daaa24f0c 1.svg" class="d-block w-100"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider;