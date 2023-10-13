import React, { Component } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import serviceStyle from "./serviceStyle.module.css";
class ServiceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceList: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:7898/api/services")
      .then((res) => {
        console.log(res);
        this.setState({ serviceList: res.data });
      })
      .catch((err) => console.log("error fetching data", err));
  }

  render() {
    return (
      <div>
        {this.state.serviceList.map((service) => (
          <div>
            <Link
              to={`/service-detail/${service.id}`}
              key={service.id}
              className={serviceStyle.serviceGrid}
            >
              {service.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ServiceList;
