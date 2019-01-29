import React from "react";
import "./ProductsList.css";
import Product from "../Product/Product";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };

    this.dataHomeSet = this.props.data.map((a, i) => (
      <Product key={i} {...a} />
    ));
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
    return (
      <React.Fragment>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          <div className="products-list">
            <div className="products-list__container">
              {this.props.data
                .map(a => <Product key={`product-${a.id}`} {...a} />)
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
                  <i className="far fa-chevron-square-left" />
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
        </ReactCSSTransitionGroup>
      </React.Fragment>
    );
  }
}

export default ProductsList;
