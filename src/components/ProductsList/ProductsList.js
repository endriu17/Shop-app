import React from "react";
import "./ProductsList.css";
import Product from "../Product/Product";
import data from "../Product/data.json";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class ProductsList extends React.Component {
  constructor() {
    super();

    this.dataSet = data.map((a, i) => <Product key={i} {...a} />);

    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

    this.state = {
      currentPage: 0
    };
  }

  handleClick(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
  }

  render() {
    const { currentPage } = this.state;
    return (

      <React.Fragment>
        <div className="products-list">
          {this.dataSet
            .slice(
              currentPage * this.pageSize,
              (currentPage + 1) * this.pageSize
            )
            .map((data, i) => (
              <div className="data-slice" key={i}>
                {data}
              </div>
            ))}
          <div className="pagination-wrapper">
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                  onClick={e => this.handleClick(e, currentPage - 1)}
                  previous
                  href="#">
                </PaginationLink>
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
