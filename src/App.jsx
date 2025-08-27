import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
const styles = {
        card: {
            width: '18rem',
            borderRadius: '12px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            background: '#fff',
            margin: '1rem',
            display: 'inline-block'
        },
        img: {
            width: '100%',
            height: '200px',
            objectFit: 'fit',
            display: 'block'
        },
        body: {
            padding: '1rem',
            textAlign: 'center'
        },
        title: {
            marginBottom: '.25rem',
            fontSize: '1.25rem',
            fontWeight: 700
        },
        text: {
            color: '#6c757d',
            marginBottom: 0
        },
        list: {
            borderTop: '1px solid #e9ecef',
            background: '#fafafa',
            margin: 0,
            padding: 0,
            listStyle: 'none'
        },
        listItem: {
            display: 'flex',
            justifyContent: 'center',
            padding: '.6rem 1rem',
            color: '#343a40'
        }
    };

class Greeting extends Component {
  state = {
    person: "lol",
    fullName: "lol robinson",
    bio: "i love bootstrap",
    imgSrc: "/Mr._Robinson_Young_Adult.webp",
    profession: "physics",
    show: true
  };
 
    setShow = () => {
        this.setState(prev => ({ show: !prev.show }));
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState(prev => ({ secondsSinceMount: (prev.secondsSinceMount || 0) + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }
  render() {
    return (
      <>
        <div className="card" style={styles.card}>
                <img src={this.state.imgSrc} className="card-img-top" alt="pic" style={styles.img} />
                <div className="card-body" style={styles.body}>
                    <h5 className="card-title" style={styles.title}>{this.state.person}</h5>
                    <p className="card-text" style={styles.text}>
                        {this.state.fullName}
                    </p>
                </div>
                <ul className="list-group list-group-flush" style={styles.list}>
                    <p className="list-group-item" style={styles.listItem}>{this.state.bio}</p>
                    <li className="list-group-item" style={styles.listItem}>{this.state.profession}</li>
                    
                </ul>
            </div>
            <input class="btn rounded-b btn-primary" onClick={setShow()} type="reset" value="Reset"/>
      </>
    );
  }
}

export default Greeting;
