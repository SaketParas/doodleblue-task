import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product_type: '',
            product: '',
            price: '',
            file: ''
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        e.preventDefault()
        console.log(this.state);
        let random_number = Math.floor(Math.random(2000) * 1000);
        let data = {
            product_type: this.state.product_type,
            product: this.state.product,
            price: this.state.price,
            file: this.state.file,
            id: random_number
        }
        console.log(data);
        // this.props.note_data(data)
        this.reset()
        this.props.history.push('/')
    }
    reset = () => {
        this.setState({
            product_type: '',
            product: '',
            price: '',
            file: ''
        })
    }
    render() {
        return (
            <div className="container mt-4">
                <div class="form-row">
                    <div class="col">
                        <h3 className="float-left font-weight-bolder">Product</h3>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-danger float-right" data-toggle="modal" data-target="#exampleModal">Add Product</button>
                        {/* <!-- Modal --> */}

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header" >
                                        <h5 class="modal-title text-center" id="exampleModalLabel" class="text-center">Add Product</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={this.input_submit}>
                                        <div className="container">

                                            <div class="form-group">
                                                {/* <label>Product Category</label> */}
                                                Product<select class="form-control" id="exampleFormControlSelect1" name="product_type" value={this.state.product_type} onChange={this.input_change} required >
                                                    <option value="">Product Type</option>
                                                    <option value="book">Books</option>
                                                    <option value="hoodies">Hoodies</option>
                                                    <option value="bags">Bags</option>
                                                    <option value="misc">Misc</option>
                                                </select>
                                            </div>
                                            Product Title<input type="name" class="form-control " name="product" value={this.state.product} onChange={this.input_change} required ></input>
                                            Price<input type="number" class="form-control" name="price" value={this.state.price} onChange={this.input_change} required ></input>
                                            <h4 className="mt-2 text-center">Top Products</h4>
                                            <div class="form-group">
                                                <label for="exampleFormControlFile1">Upload Product image</label>
                                                <input type="file" class="form-control-file" name="file" value={this.state.file} onChange={this.input_change} />
                                            </div>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CANCLE</button>
                                            <button type="submit" class="btn btn-danger" data-dismiss="modal">SAVE</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container-fluid p-0 mt-3">
                    <div class="row text-left">
                        <div class="col-md-3 col-sm-12">
                            <p class="font-weight-bolder">CATEGORIES</p>
                            <div class="card mt-5 ">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item bg-light font-weight-bold "><Link to="/" class="text-body">All</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Books" class="text-body">Books</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Books" class="text-body">Hoodie / T-shirt</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Books" class="text-body">Bags</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Books" class="text-body">Paintings</Link></li>

                                </ul>
                            </div>
                            <Filter />
                        </div>

                        {/* 2nd row */}
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col">
                                    <h6 class="font-italic text-muted">Showing 1-8 of 9 results</h6>
                                </div>
                                <div class="col-0">
                                    <div class="dropdown ">
                                        <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Default Sorting
                                </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Price</a>
                                            <a class="dropdown-item" href="#">Ratings</a>
                                            <a class="dropdown-item" href="#">Popularity</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-deck p-3">
                                    <div class="card ">
                                        <img src="https://colosse.com/wp-content/uploads/2016/04/maple-syrup-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.justanned.in/blog/wp-content/uploads/2018/08/Leather-bags-and-Wallets-for-men-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Casual Handbag</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://1.bp.blogspot.com/-TCLTp348Vkk/XYJwgy2C03I/AAAAAAAAE-4/uUE38aAlAW8yrfWxSMEDJiIjEktHkpw3wCLcBGAsYHQ/s1600/best-internal-medicine-books-pdf-free-download.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">e-book Reader</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 259.00 </s> $ 199.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck p-3">
                                    <div class="card ">
                                        <img src="https://brodix.com/wp-content/uploads/2017/11/hoodiezip.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Hard Coverbook</h5>
                                            <p className="text-center">$ 59.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUaQizT7j5ROBmv9L3PGE_13yAeFe1JkAJ3Q&usqp=CAU" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Mug MockUp</h5>
                                            <p className="text-center">$ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://static.dribbble.com/users/190300/screenshots/2701024/default_a000796ac77455860f486a50ff8fec26.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck p-3">
                                    <div class="card ">
                                        <img src="https://media.self.com/photos/5e345256fc821b000895c091/4:3/w_400%2Cc_limit/product-roundup_books2.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Hard Coverbook</h5>
                                            <p className="text-center">$ 59.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.educationquizzes.com/library/Knowledge-Bank/Will-teachers-need-text-books-in-the-future.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Mug MockUp</h5>
                                            <p className="text-center">$ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.livegrowplayaustin.com/images/media/posts/Books.jpg?width=400" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck p-3">
                                    <div class="card ">
                                        <img src="https://libraries.towson.edu/sites/default/files/2020-08/ContactlessPickuppng.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://lh3.googleusercontent.com/proxy/HhKP5VMCLSHPfJ4DJKh-YZVctFvEWPoBVBau6ckAgZfkzzidZJ1tK4irtjQ16l3S4IKqh9JPBkBpD5e0sMiHzEXkgmzB1Lpc5r8i0K5ANnZja9bfsp1VOrE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://1.bp.blogspot.com/-TCLTp348Vkk/XYJwgy2C03I/AAAAAAAAE-4/uUE38aAlAW8yrfWxSMEDJiIjEktHkpw3wCLcBGAsYHQ/s1600/best-internal-medicine-books-pdf-free-download.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Online Books</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck p-3">
                                    <div class="card ">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJqqG7b1Ib1GzSX0bo4qLqTh-f-VPW1_fQ6w&usqp=CAU" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.hotvero.com/wp-content/uploads/2017/08/Cheap-Urban-Mens-Womens-Hoodies.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.justanned.in/blog/wp-content/uploads/2018/08/Leather-bags-and-Wallets-for-men-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Online Books</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck p-3">
                                    <div class="card ">
                                        <img src="https://nescospecialty.com/file/2014/10/g0116949a-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://apicms.thestar.com.my/uploads/images/2020/02/19/566701.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://colosse.com/wp-content/uploads/2016/04/maple-syrup-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Online Books</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Home
