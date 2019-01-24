import React from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import Product from "../Product/Product";
import data from "../Product/data.json";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };

    const sortType = this.props.match.params.type;
    const sortDirection = this.props.match.params.direction;
    const dataHome = data.sort((a, b) => {
      if (sortDirection === "asc") {
        return a[sortType] > b[sortType] ? -1 : 0;
      } else if (sortDirection === "desc") {
        return a[sortType] < b[sortType] ? -1 : 0;
      } else {
        return 0;
      }
    });
    this.dataHomeSet = dataHome.map((a, i) => <Product key={i} {...a} />);
    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.dataHomeSet.length / this.pageSize);
  }

  handleClick(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
  }

  render() {
    const { currentPage } = this.state;
    console.log(this.props.match.params.type);
    return (
      <React.Fragment>
        <Link
          to="/"
          className="button-back_home"
          style={{
            visibility: this.props.match.url === "/" ? "hidden" : "show"
          }}
        >
          Back to Home
        </Link>
        <div className="products-list">
          <div className="products-list__container">
            {this.dataHomeSet
              .slice(
                currentPage * this.pageSize,
                (currentPage + 1) * this.pageSize
              )
              .map((data, i) => (
                <div className="product-list__item" key={i}>
                  {data}
                </div>
              ))}
          </div>
          <div className="pagination-wrapper">
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                  onClick={e => this.handleClick(e, currentPage - 1)}
                  previous
                  href="#"
                />
              </PaginationItem>

              {[...Array(this.pagesCount)].map((page, i) => (
                <PaginationItem active={i === currentPage} key={i}>
                  <PaginationLink
                    onClick={e => this.handleClick(e, i)}
                    href="#"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                <PaginationLink
                  onClick={e => this.handleClick(e, currentPage + 1)}
                  next
                  href="#"
                />
              </PaginationItem>
            </Pagination>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductsList;
