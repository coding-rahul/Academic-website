const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div class="container-fluid">
                    <h4 className="text-white">Kaps Academy</h4>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="d-flex justify-content-around" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 navul">
                            <li class="nav-item mx-3">
                                <a class="nav-link " aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">CONTACT US</a>
                            </li>
                            <button class="btn btn-danger btn-sm" type="submit">APPLY FOR EXAM</button>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;