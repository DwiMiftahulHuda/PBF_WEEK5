import React, { Component } from 'react';
import './OnlineShop.css'
import logo from '../assets/imagelogo.jpg'
import image from '../assets/image.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    // useHistory,
    Redirect,
    // useLocation,
    useParams,
    withRouter
} from 'react-router-dom';

function OnlineShop() {
    return (
        <Router>
            <div className="header">
                <img src={logo} alt="" />
                <AuthButton />

                <ul>
                    <li className="TopBar-1" id="TB1">
                        <Link className="Link-1" to="/home">Home</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link-1" to="/data">Info Bucket Hat</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/data" component={Data} />
                </Switch>
            </div>
        </Router>
    )
}
//digunakan untuk autentification
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p id="logout">Welcome!
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/home"));
                }}>
                <p>Sign out</p>
            </button>
        </p>
    ) : (
        <p id="warning-log" >
            You are not Log in!
        </p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
// Home
function Home() {
    return (
        <div className="Home">
            <h2>Welcome!</h2>
            <div className="grid">
                <div className="row">
                    <div className="col-sm">
                        <img src={image} alt="Gambar Thumbnail Artikel" />
                        <h3>Kpop Bucket Hat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={image1} alt="Gambar Thumbnail Artikel" />
                        <h3>Kpop Bucket Hat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={image2} alt="Gambar Thumbnail Artikel" />
                        <h3>Kpop Bucket Hat</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                </div>
                {/* <div className="row">
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Kain Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Kain Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className="col-sm">
                        <img src={kain8} alt="Gambar Thumbnail Artikel" />
                        <h3>Kain Batik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

function Data() {

    let { path, url } = useRouteMatch();

    return (
        <div className="header-2">
            {/* <h2>Data Barang</h2> */}
            <ul>
                <li className="TopBar-2">
                    <Link to={`${url}/Databucket`}>Info Bucket Hat</Link>
                </li>
                <li className="TopBar-2">
                    <Link to={`${url}/Detailinfo`}>Detail Info Bucket Hat</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:dataId`}>
                    <DataBody />
                </Route>
            </Switch>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();

    if (dataId === "Databucket") {
        return (
            <div className="Data-bucket">
                <h1>{dataId}</h1>
                <div className="table-bucket">
                    <table border="1">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Gambar</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                        </tr>
                        <tr>
                            <td>WonderlousWork A01</td>
                            <td><img src={image1} alt="image1" /></td>
                            <td>5 Pcs</td>
                            <td>500.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A02</td>
                            <td><img src={image1} alt="image1" /></td>
                            <td>10 Pcs</td>
                            <td>1.000.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A03</td>
                            <td><img src={image1} alt="image1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A04</td>
                            <td><img src={image1} alt="image1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A05</td>
                            <td><img src={image1} alt="image1" /></td>
                            <td>10 Pcs</td>
                            <td>150.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                    </table>
                </div>
            </div >
        )
    } else if (dataId === "Detailinfo") {
        return (
            <div className="Data-info">
                <h1>{dataId}</h1>
                <div className="table-bucket">
                    <table border="1">
                        <tr>
                            <th>Nama Barang</th>
                            <th>Gambar</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                        </tr>
                        <tr>
                            <td>WonderlousWork A01</td>
                            <td><img src={image2} alt="image2" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A02</td>
                            <td><img src={image2} alt="image2" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A03</td>
                            <td><img src={image2} alt="image2" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A04</td>
                            <td><img src={image2} alt="image2" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                        <tr>
                            <td>WonderlousWork A05</td>
                            <td><img src={image2} alt="image2" /></td>
                            <td>10 Pcs</td>
                            <td>200.000</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
                <p>You must log in to view the page</p>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default OnlineShop;